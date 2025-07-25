const prisma = require('../models/prismaClient');
const { ApiResponse } = require('../utils/ApiResponse');
const { ApiError } = require('../utils/ApiError');
const NodeCache = require('node-cache');

const cache = new NodeCache({ stdTTL: 3600, checkperiod: 120 });

const TOP_USERS_CACHE_KEY = 'top_10_users';
const TOP_POSTS_CACHE_KEY = 'top_10_mixed_posts';
const TOTAL_COUNTS_CACHE_KEY = 'total_counts';

module.exports.getTopLikedPosts = async (req, res) => {
  try {
    const cachedPosts = cache.get(TOP_POSTS_CACHE_KEY);
    if (cachedPosts) {
      return res
        .status(200)
        .json(
          new ApiResponse(
            200,
            cachedPosts,
            'Top liked posts fetched from cache',
          ),
        );
    }

    const [quotePosts, generalPosts] = await Promise.all([
      prisma.quotePost.findMany({
        where: { status: 'success' },
        select: {
          id: true,
          title: true,
          description: true,
          userId: true,
          createdAt: true,
          incoterm: true,
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
          mainCategory: {
            select: {
              id: true,
              name: true,
            },
          },
          subCategory: {
            select: {
              id: true,
              name: true,
            },
          },
          quoteLike: {
            select: {
              id: true,
            },
          },
        },
      }),

      prisma.generalPost.findMany({
        where: { status: 'success' },
        select: {
          id: true,
          title: true,
          description: true,
          userId: true,
          createdAt: true,
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
          MainCategory: {
            select: {
              id: true,
              name: true,
            },
          },
          SubCategory: {
            select: {
              id: true,
              name: true,
            },
          },
          generalLike: {
            select: {
              id: true,
            },
          },
        },
      }),
    ]);

    const mixedPosts = [
      ...quotePosts.map((post) => ({
        ...post,
        type: 'QuotePost',
        mainCategory: post.mainCategory,
        subCategory: post.subCategory,
        likesCount: post.quoteLike.length, // Calculate likes count from QuoteLike relation
      })),
      ...generalPosts.map((post) => ({
        ...post,
        type: 'GeneralPost',
        mainCategory: post.MainCategory, // Normalize field name
        subCategory: post.SubCategory, // Normalize field name
        likesCount: post.generalLike.length, // Calculate likes count from GeneralLike relation
      })),
    ]
      .sort((a, b) => (b.likesCount ?? 0) - (a.likesCount ?? 0))
      .slice(0, 10);

    cache.set(TOP_POSTS_CACHE_KEY, mixedPosts);

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          mixedPosts,
          'Top liked posts fetched successfully',
        ),
      );
  } catch (error) {
    console.error('Error in getTopLikedPosts:', error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          'Failed to fetch top liked posts due to server error',
          error.message,
        ),
      );
  }
};

module.exports.getTopPerformingUsers = async (req, res) => {
  try {
    const cachedUsers = cache.get(TOP_USERS_CACHE_KEY);
    if (cachedUsers) {
      return res
        .status(200)
        .json(
          new ApiResponse(
            200,
            cachedUsers,
            'Top performing users fetched from cache',
          ),
        );
    }

    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        profilePic: true,
        quotePost: { select: { id: true } },
        generalPost: { select: { id: true } },
        quoteReply: { select: { id: true } },
        generalReply: { select: { id: true } },
        quoteLike: { select: { id: true } },
        generalLike: { select: { id: true } },
        BlogComment: { select: { id: true } },
        Course: { select: { id: true } },
        Event: { select: { id: true } },
      },
    });

    const topUsers = users
      .map((user) => {
        const activities = {
          quotePosts: user.quotePost?.length || 0,
          generalPosts: user.generalPost?.length || 0,
          quoteReplies: user.quoteReply?.length || 0,
          generalReplies: user.generalReply?.length || 0,
          quoteLikes: user.quoteLike?.length || 0,
          generalLikes: user.generalLike?.length || 0,
          blogComments: user.BlogComment?.length || 0,
          courses: user.Course?.length || 0,
          events: user.Event?.length || 0,
        };

        const totalPoints =
          Object.values(activities).reduce((sum, val) => sum + val, 0) * 5;

        return {
          id: user.id,
          name: user.name,
          profile: user.profilePic || null,
          email: user.email,
          points: totalPoints,
          activities,
        };
      })
      .sort((a, b) => b.points - a.points)
      .slice(0, 10);

    cache.set(TOP_USERS_CACHE_KEY, topUsers);

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          topUsers,
          'Top performing users fetched successfully',
        ),
      );
  } catch (error) {
    console.error('Error in getTopPerformingUsers:', error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          'Failed to fetch top performing users due to server error',
          error.message,
        ),
      );
  }
};

module.exports.getTotalCounts = async (req, res) => {
  try {
    const cachedCounts = cache.get(TOTAL_COUNTS_CACHE_KEY);
    if (cachedCounts) {
      return res
        .status(200)
        .json(
          new ApiResponse(200, cachedCounts, 'Total counts fetched from cache'),
        );
    }

    const [userCount, quotePostCount, generalPostCount] = await Promise.all([
      prisma.user.count(),
      prisma.quotePost.count(),
      prisma.generalPost.count(),
    ]);

    const totalCounts = {
      totalUsers: userCount,
      totalPosts: quotePostCount + generalPostCount,
      totalQuotePosts: quotePostCount,
      totalGeneralPosts: generalPostCount,
    };

    cache.set(TOTAL_COUNTS_CACHE_KEY, totalCounts);

    return res
      .status(200)
      .json(
        new ApiResponse(200, totalCounts, 'Total counts fetched successfully'),
      );
  } catch (error) {
    console.error('Error in getTotalCounts:', error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          'Failed to fetch total counts due to server error',
          error.message,
        ),
      );
  }
};
