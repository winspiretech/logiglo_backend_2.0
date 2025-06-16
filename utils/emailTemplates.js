// src/utils/emailTemplates.js

// Template for Quote Post Creation
const quotePostCreatedTemplate = (post, user) => ({
  subject: `New Quote Post Created: ${post.title}`,
  text: `Hello ${user.name},\n\nYour quote post "${post.title}" has been successfully created.\nDescription: ${post.description}\n\nYou can view it at: https://tester.logiglo.com/quote-post/${post.id}\n\nBest regards,\nLogiglo Team`,
});

// Template for Quote Post Accepted
const quotePostAcceptedTemplate = (post, user) => ({
  subject: `Quote Post Accepted: ${post.title}`,
  text: `Hello ${user.name},\n\nGreat news! Your quote post "${post.title}" has been accepted.\nDescription: ${post.description}\nReason: ${post.acceptReason || 'No reason provided'}\n\nView it at: https://tester.logiglo.com/quote-post/${post.id}\n\nBest regards,\nLogiglo Team`,
});

// Template for Quote Post Rejected
const quotePostRejectedTemplate = (post, user) => ({
  subject: `Quote Post Rejected: ${post.title}`,
  text: `Hello ${user.name},\n\nYour quote post "${post.title}" has been rejected.\nDescription: ${post.description}\nReason: ${post.rejectionReason[0] || 'No reason provided'}\n\nPlease review and resubmit if needed.\n\nBest regards,\nLogiglo Team`,
});

// Template for Quote Reply Accepted
const quoteReplyAcceptedTemplate = (reply, post, user) => ({
  subject: `Quote Reply Accepted on Post: ${post.title}`,
  text: `Hello ${user.name},\n\nYour reply to the quote post "${post.title}" has been accepted.\nReply: ${reply.description}\n\nView the post at: https://tester.logiglo.com/quote-post/${post.id}\n\nBest regards,\nLogiglo Team`,
});

// Template for Quote Reply Rejected
const quoteReplyRejectedTemplate = (reply, post, user) => ({
  subject: `Quote Reply Rejected on Post: ${post.title}`,
  text: `Hello ${user.name},\n\nYour reply to the quote post "${post.title}" has been rejected.\nReply: ${reply.description}\nReason: ${reply.rejectionReason || 'No reason provided'}\n\nPlease review and resubmit if needed.\n\nBest regards,\nLogiglo Team`,
});

// Template for General Post Creation
const generalPostCreatedTemplate = (post, user) => ({
  subject: `New General Post Created: ${post.title}`,
  text: `Hello ${user.name},\n\nYour general post "${post.title}" has been successfully created.\nDescription: ${post.description}\n\nYou can view it at: https://tester.logiglo.com/general-post/${post.id}\n\nBest regards,\nLogiglo Team`,
});

// Template for General Post Accepted
const generalPostAcceptedTemplate = (post, user) => ({
  subject: `General Post Accepted: ${post.title}`,
  text: `Hello ${user.name},\n\nGreat news! Your general post "${post.title}" has been accepted.\nDescription: ${post.description}\nReason: ${post.acceptReason || 'No reason provided'}\n\nView it at: https://tester.logiglo.com/general-post/${post.id}\n\nBest regards,\nLogiglo Team`,
});

// Template for General Post Rejected
const generalPostRejectedTemplate = (post, user) => ({
  subject: `General Post Rejected: ${post.title}`,
  text: `Hello ${user.name},\n\nYour general post "${post.title}" has been rejected.\nDescription: ${post.description}\nReason: ${post.rejectionReason.join(', ') || 'No reason provided'}\n\nPlease review and resubmit if needed.\n\nBest regards,\nLogiglo Team`,
});

// Template for General Reply Accepted
const generalReplyAcceptedTemplate = (reply, post, user) => ({
  subject: `General Reply Accepted on Post: ${post.title}`,
  text: `Hello ${user.name},\n\nYour reply to the general post "${post.title}" has been accepted.\nReply: ${reply.description}\n\nView the post at: https://tester.logiglo.com/general-post/${post.id}\n\nBest regards,\nLogiglo Team`,
});

// Template for General Reply Rejected
const generalReplyRejectedTemplate = (reply, post, user) => ({
  subject: `General Reply Rejected on Post: ${post.title}`,
  text: `Hello ${user.name},\n\nYour reply to the general post "${post.title}" has been rejected.\nReply: ${reply.description}\nReason: ${reply.rejectionReason || 'No reason provided'}\n\nPlease review and resubmit if needed.\n\nBest regards,\nLogiglo Team`,
});

module.exports = {
  quotePostCreatedTemplate,
  quotePostAcceptedTemplate,
  quotePostRejectedTemplate,
  quoteReplyAcceptedTemplate,
  quoteReplyRejectedTemplate,
  generalPostCreatedTemplate,
  generalPostAcceptedTemplate,
  generalPostRejectedTemplate,
  generalReplyAcceptedTemplate,
  generalReplyRejectedTemplate,
};
