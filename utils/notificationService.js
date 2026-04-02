const axios = require('axios');

const NOTIFICATION_API_URL =
  process.env.NOTIFICATION_API_URL || 'https://transfus.com/api/v1';
const NOTIFICATION_API_KEY =
  process.env.NOTIFICATION_API_KEY || 'logigloemails';
const NOTIFICATION_API_SECRET =
  process.env.NOTIFICATION_API_SECRET || 'logiglonotifications';

// Create axios instance with auth headers
const notificationApi = axios.create({
  baseURL: NOTIFICATION_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': NOTIFICATION_API_KEY,
    'x-api-secret': NOTIFICATION_API_SECRET,
  },
});

// Template codes enum for easy reference
const TEMPLATES = {
  OTP_EMAIL: 'logiglo_otp_email',
  COURSE_ENQUIRY_ADMIN: 'logiglo_course_enquiry_admin',
  COURSE_ENQUIRY_USER: 'logiglo_course_enquiry_user',
  REQUEST_TO_CONNECT: 'logiglo_request_to_connect',
  QUOTE_POST_CREATED: 'logiglo_quote_post_created',
  QUOTE_POST_ACCEPTED: 'logiglo_quote_post_accepted',
  QUOTE_POST_REJECTED: 'logiglo_quote_post_rejected',
  QUOTE_REPLY_ACCEPTED: 'logiglo_quote_reply_accepted',
  QUOTE_REPLY_REJECTED: 'logiglo_quote_reply_rejected',
  GENERAL_POST_CREATED: 'logiglo_general_post_created',
  GENERAL_POST_ACCEPTED: 'logiglo_general_post_accepted',
  GENERAL_POST_REJECTED: 'logiglo_general_post_rejected',
  GENERAL_REPLY_ACCEPTED: 'logiglo_general_reply_accepted',
  GENERAL_REPLY_REJECTED: 'logiglo_general_reply_rejected',
};

/**
 * Core function to send notification via template
 */
const sendNotification = async ({
  templateCode,
  channel = 'EMAIL',
  recipient,
  data,
  options = {},
}) => {
  try {
    const payload = {
      templateCode,
      channel,
      recipient: {
        email: recipient.email?.toLowerCase(),
        name: recipient.name,
        phone: recipient.phone,
        userId: recipient.userId,
      },
      data,
      options: {
        priority: options.priority || 'MEDIUM',
        scheduledAt: options.scheduledAt,
        metadata: options.metadata || {},
      },
    };

    console.log('Sending notification via notification service:', {
      templateCode,
      channel,
      recipientEmail: recipient.email,
    });

    const response = await notificationApi.post('/notifications/send', payload);

    console.log('Notification sent successfully:', {
      notificationId: response.data.data.notificationId,
      status: response.data.data.status,
    });

    return response.data.data;
  } catch (error) {
    console.error('Failed to send notification:', {
      error: error.response?.data || error.message,
      templateCode,
      recipientEmail: recipient.email,
    });
    throw new Error(
      `Failed to send notification: ${error.response?.data?.message || error.message}`,
    );
  }
};

/**
 * Send email notification
 */
const sendEmail = async ({ templateCode, recipient, data, options = {} }) => {
  return sendNotification({
    templateCode,
    channel: 'EMAIL',
    recipient,
    data,
    options,
  });
};

// ==================== Template-Specific Helpers ====================

/**
 * Send OTP email
 */
const sendOTPEmail = async ({
  email,
  userName,
  otpCode,
  expiryMinutes = 5,
  userId,
}) => {
  return sendEmail({
    templateCode: TEMPLATES.OTP_EMAIL,
    recipient: {
      email,
      name: userName,
      userId,
    },
    data: {
      userName,
      otpCode,
      expiryMinutes,
    },
    options: {
      priority: 'HIGH',
    },
  });
};

/**
 * Send course enquiry notification to admin
 */
const sendCourseEnquiryAdminEmail = async ({
  adminEmail,
  institutionName,
  institutionType,
  contactPersonName,
  contactPersonPosition,
  contactNumber,
  website,
  email,
  message,
}) => {
  return sendEmail({
    templateCode: TEMPLATES.COURSE_ENQUIRY_ADMIN,
    recipient: {
      email: adminEmail,
      name: 'Admin',
    },
    data: {
      institutionName,
      institutionType,
      contactPersonName,
      contactPersonPosition,
      contactNumber,
      website: website || 'N/A',
      email: email || 'N/A',
      message,
    },
    options: {
      priority: 'HIGH',
    },
  });
};

/**
 * Send course enquiry confirmation to user
 */
const sendCourseEnquiryUserEmail = async ({ email, contactPersonName }) => {
  return sendEmail({
    templateCode: TEMPLATES.COURSE_ENQUIRY_USER,
    recipient: {
      email,
      name: contactPersonName,
    },
    data: {
      contactPersonName,
    },
    options: {
      priority: 'MEDIUM',
    },
  });
};

/**
 * Send request to connect confirmation
 */
const sendRequestToConnectEmail = async ({ email, userName, userId }) => {
  return sendEmail({
    templateCode: TEMPLATES.REQUEST_TO_CONNECT,
    recipient: {
      email,
      name: userName,
      userId,
    },
    data: {
      userName,
    },
    options: {
      priority: 'MEDIUM',
    },
  });
};

/**
 * Send quote post created notification
 */
const sendQuotePostCreatedEmail = async ({
  email,
  userName,
  title,
  description,
  userId,
}) => {
  return sendEmail({
    templateCode: TEMPLATES.QUOTE_POST_CREATED,
    recipient: {
      email,
      name: userName,
      userId,
    },
    data: {
      title,
      description,
    },
    options: {
      priority: 'LOW',
    },
  });
};

/**
 * Send quote post accepted notification
 */
const sendQuotePostAcceptedEmail = async ({
  email,
  userName,
  title,
  description,
  postId,
  userId,
}) => {
  return sendEmail({
    templateCode: TEMPLATES.QUOTE_POST_ACCEPTED,
    recipient: {
      email,
      name: userName,
      userId,
    },
    data: {
      title,
      description,
      postId,
    },
    options: {
      priority: 'MEDIUM',
    },
  });
};

/**
 * Send quote post rejected notification
 */
const sendQuotePostRejectedEmail = async ({
  email,
  userName,
  title,
  description,
  rejectionReason,
  userId,
}) => {
  return sendEmail({
    templateCode: TEMPLATES.QUOTE_POST_REJECTED,
    recipient: {
      email,
      name: userName,
      userId,
    },
    data: {
      title,
      description,
      rejectionReason,
    },
    options: {
      priority: 'MEDIUM',
    },
  });
};

/**
 * Send quote reply accepted notification
 */
const sendQuoteReplyAcceptedEmail = async ({
  email,
  userName,
  postTitle,
  postId,
  quotePrice,
  contactEmail,
  userId,
}) => {
  return sendEmail({
    templateCode: TEMPLATES.QUOTE_REPLY_ACCEPTED,
    recipient: {
      email,
      name: userName,
      userId,
    },
    data: {
      postTitle,
      postId,
      quotePrice: quotePrice
        ? `$${quotePrice.toFixed(2)}`
        : 'No price provided',
      contactEmail: contactEmail || 'No email provided',
    },
    options: {
      priority: 'MEDIUM',
    },
  });
};

/**
 * Send quote reply rejected notification
 */
const sendQuoteReplyRejectedEmail = async ({
  email,
  userName,
  postTitle,
  postId,
  quotePrice,
  contactEmail,
  rejectionReason,
  userId,
}) => {
  return sendEmail({
    templateCode: TEMPLATES.QUOTE_REPLY_REJECTED,
    recipient: {
      email,
      name: userName,
      userId,
    },
    data: {
      postTitle,
      postId,
      quotePrice: quotePrice
        ? `$${quotePrice.toFixed(2)}`
        : 'No price provided',
      contactEmail: contactEmail || 'No email provided',
      rejectionReason: rejectionReason || 'No reason provided',
    },
    options: {
      priority: 'MEDIUM',
    },
  });
};

/**
 * Send general post created notification
 */
const sendGeneralPostCreatedEmail = async ({
  email,
  userName,
  title,
  description,
  userId,
}) => {
  return sendEmail({
    templateCode: TEMPLATES.GENERAL_POST_CREATED,
    recipient: {
      email,
      name: userName,
      userId,
    },
    data: {
      title,
      description,
    },
    options: {
      priority: 'LOW',
    },
  });
};

/**
 * Send general post accepted notification
 */
const sendGeneralPostAcceptedEmail = async ({
  email,
  userName,
  title,
  description,
  postId,
  userId,
}) => {
  return sendEmail({
    templateCode: TEMPLATES.GENERAL_POST_ACCEPTED,
    recipient: {
      email,
      name: userName,
      userId,
    },
    data: {
      title,
      description,
      postId,
    },
    options: {
      priority: 'MEDIUM',
    },
  });
};

/**
 * Send general post rejected notification
 */
const sendGeneralPostRejectedEmail = async ({
  email,
  userName,
  title,
  description,
  rejectionReason,
  userId,
}) => {
  return sendEmail({
    templateCode: TEMPLATES.GENERAL_POST_REJECTED,
    recipient: {
      email,
      name: userName,
      userId,
    },
    data: {
      title,
      description,
      rejectionReason,
    },
    options: {
      priority: 'MEDIUM',
    },
  });
};

/**
 * Send general reply accepted notification
 */
const sendGeneralReplyAcceptedEmail = async ({
  email,
  userName,
  postTitle,
  postId,
  replyDescription,
  userId,
}) => {
  return sendEmail({
    templateCode: TEMPLATES.GENERAL_REPLY_ACCEPTED,
    recipient: {
      email,
      name: userName,
      userId,
    },
    data: {
      postTitle,
      postId,
      replyDescription: replyDescription || 'No description provided',
    },
    options: {
      priority: 'MEDIUM',
    },
  });
};

/**
 * Send general reply rejected notification
 */
const sendGeneralReplyRejectedEmail = async ({
  email,
  userName,
  postTitle,
  postId,
  replyDescription,
  rejectionReason,
  userId,
}) => {
  return sendEmail({
    templateCode: TEMPLATES.GENERAL_REPLY_REJECTED,
    recipient: {
      email,
      name: userName,
      userId,
    },
    data: {
      postTitle,
      postId,
      replyDescription: replyDescription || 'No description provided',
      rejectionReason: rejectionReason || 'No reason provided',
    },
    options: {
      priority: 'MEDIUM',
    },
  });
};

module.exports = {
  // Core functions
  sendNotification,
  sendEmail,

  // Template-specific helpers
  sendOTPEmail,
  sendCourseEnquiryAdminEmail,
  sendCourseEnquiryUserEmail,
  sendRequestToConnectEmail,
  sendQuotePostCreatedEmail,
  sendQuotePostAcceptedEmail,
  sendQuotePostRejectedEmail,
  sendQuoteReplyAcceptedEmail,
  sendQuoteReplyRejectedEmail,
  sendGeneralPostCreatedEmail,
  sendGeneralPostAcceptedEmail,
  sendGeneralPostRejectedEmail,
  sendGeneralReplyAcceptedEmail,
  sendGeneralReplyRejectedEmail,

  // Template constants
  TEMPLATES,
};
