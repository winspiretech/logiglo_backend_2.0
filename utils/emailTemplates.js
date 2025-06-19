// Removed: const DOMPurify = require('dompurify');

const baseTemplate = (content, subject) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/2.4.0/purify.min.js"></script>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #F3F4F6;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
      color: #000000;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #FFFFFF;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .header {
      padding: 20px;
      text-align: center;
      border-bottom: 1px solid #E5E7EB;
    }
    .header img {
      max-width: 150px;
    }
    .content {
      padding: 30px;
    }
    .content h1 {
      font-size: 24px;
      margin: 0 0 20px;
      color: #000000;
    }
    .content p {
      font-size: 16px;
      line-height: 1.5;
      color: #6B7280;
      margin: 0 0 15px;
    }
    .description-html {
      font-size: 16px;
      line-height: 1.5;
      color: #6B7280;
      margin: 0 0 15px;
    }
    .button {
      display: inline-block;
      padding: 12px 24px;
      background-color: #FFC107;
      color: #000000;
      text-decoration: none;
      font-size: 16px;
      font-weight: 600;
      border-radius: 6px;
      margin: 20px 0;
      text-align: center;
    }
    .button:hover {
      background-color: #FBBF24;
    }
    .footer {
      background-color: #F3F4F6;
      padding: 20px;
      text-align: center;
      font-size: 14px;
      color: #6B7280;
    }
    .footer a {
      color: #000000;
      text-decoration: none;
      margin: 0 10px;
    }
    .footer a:hover {
      text-decoration: underline;
    }
    @media (max-width: 600px) {
      .container {
        margin: 10px;
      }
      .content {
        padding: 20px;
      }
      .button {
        display: block;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://tester.logiglo.com/Uploads/user/bd21670f-07e5-4b03-ae47-85afc3c1f28b/user_bd21670f-07e5-4b03-ae47-85afc3c1f28b_4dabc5ee-bc3f-4355-bdd8-9784a5195489.jpg" alt="Logiglo Logo">
    </div>
    <div class="content">
      ${content}
    </div>
    <div class="footer">
      Follow us: 
      <a href="https://x.com/logiglocom">Twitter</a> | 
      <a href="https://linkedin.com/company/logiglo">LinkedIn</a>
      <a href="https://www.facebook.com/logiglocom">Facebook</a>
      <a href="https://www.instagram.com/logiglocom/">Instagram</a>
      <p>© ${new Date().getFullYear()} Logiglo. All rights reserved.</p>
    </div>
  </div>
  <script>
    // Sanitize HTML content on load
    document.querySelectorAll('.description-html').forEach(element => {
      element.innerHTML = DOMPurify.sanitize(element.innerHTML);
    });
  </script>
</body>
</html>
`;

module.exports.quotePostCreatedTemplate = (post) => {
  const subject = `New Quote Created: ${post.title}`;
  const content = `
    <h1>Quote Created</h1>
    <p>Your quote post "${post.title}" has been successfully created.</p>
    <p><strong>Description:</strong></p>
    <div class="description-html">${post.description}</div>
    <a href="https://tester.logiglo.com/account" class="button">View Quote In Your Account</a>
    <p>Regards,<br>Logiglo Admin Team</p>
  `;
  return {
    subject,
    html: baseTemplate(content, subject),
    text: `Your quote post "${post.title}" has been successfully created.\n\nDescription: ${post.description}\n\nView it at: https://tester.logiglo.com/account\n\nRegards,\nLogiglo Admin Team`,
  };
};

module.exports.quotePostAcceptedTemplate = (post) => {
  const subject = `Quote Accepted: ${post.title}`;
  const content = `
    <h1>Quote Accepted</h1>
    <p>Great news! Your quote "${post.title}" has been accepted.</p>
    <p><strong>Description:</strong></p>
    <div class="description-html">${post.description}</div>
    <a href="https://tester.logiglo.com/quote/${post.id}" class="button">View Quote </a>
    <p>Regards,<br>Logiglo Admin Team</p>
  `;
  return {
    subject,
    html: baseTemplate(content, subject),
    text: `Your quote "${post.title}" has been accepted.\n\nDescription: ${post.description}\nReason: ${post.acceptReason || 'No reason provided'}\n\nView it at: https://tester.logiglo.com/quote/${post.id}\n\nRegards,\nLogiglo Admin Team`,
  };
};

module.exports.quotePostRejectedTemplate = (post) => {
  const subject = `Quote Rejected: ${post.title}`;
  const content = `
    <h1>Quote Rejected</h1>
    <p>Your quote "${post.title}" has been rejected.</p>
    <p><strong>Description:</strong></p>
    <div class="description-html">${post.description}</div>
    <p><strong>Reason:</strong> ${Array.isArray(post.rejectionReason) ? post.rejectionReason.join(', ') : post.rejectionReason || 'No reason provided'}</p>
    <p>Please review and resubmit if needed.</p>
    <a href="https://tester.logiglo.com/account" class="button">View Quote In Your Account</a>
    <p>Regards,<br>Logiglo Admin Team</p>
  `;
  return {
    subject,
    html: baseTemplate(content, subject),
    text: `Your quote "${post.title}" has been rejected.\n\nDescription: ${post.description}\nReason: ${Array.isArray(post.rejectionReason) ? post.rejectionReason.join(', ') : post.rejectionReason || 'No reason provided'}\n\nView it at: https://tester.logiglo.com/account\n\nRegards,\nLogiglo Admin Team`,
  };
};

module.exports.quoteReplyAcceptedTemplate = (reply, post) => {
  const subject = `Quote Reply Accepted on Post: ${post.title}`;
  const content = `
    <h1>Quote Reply Accepted</h1>
    <p>Your reply to the quote post "${post.title}" has been accepted.</p>
    <p><strong>Reply:</strong></p>
    <div class="description-html">${reply.description || 'No description provided'}</div>
    <a href="https://tester.logiglo.com/quote/${post.id}" class="button">View Quote </a>
    <p>Regards,<br>Logiglo Admin Team</p>
  `;
  return {
    subject,
    html: baseTemplate(content, subject),
    text: `Your reply to the quote post "${post.title}" has been accepted.\n\nReply: ${reply.description || 'No description provided'}\n\nView it at: https://tester.logiglo.com/quote/${post.id}\n\nRegards,\nLogiglo Admin Team`,
  };
};

module.exports.quoteReplyRejectedTemplate = (reply, post) => {
  const subject = `Quote Reply Rejected on Post: ${post.title}`;
  const content = `
    <h1>Quote Reply Rejected</h1>
    <p>Your reply to the quote post "${post.title}" has been rejected.</p>
    <p><strong>Reply:</strong></p>
    <div class="description-html">${reply.description || 'No description provided'}</div>
    <p><strong>Reason:</strong> ${reply.rejectionReason || 'No reason provided'}</p>
    <p>Please review and resubmit if needed.</p>
    <a href="https://tester.logiglo.com/quote/${post.id}" class="button">View Quote </a>
    <p>Regards,<br>Logiglo Admin Team</p>
  `;
  return {
    subject,
    html: baseTemplate(content, subject),
    text: `Your reply to the quote post "${post.title}" has been rejected.\n\nReply: ${reply.description || 'No description provided'}\nReason: ${reply.rejectionReason || 'No reason provided'}\n\nView it at: https://tester.logiglo.com/quote/${post.id}\n\nRegards,\nLogiglo Admin Team`,
  };
};

module.exports.generalPostCreatedTemplate = (post) => {
  const subject = `New Post Created: ${post.title}`;
  const content = `
    <h1>Post Created</h1>
    <p>Your post "${post.title}" has been successfully created.</p>
    <p><strong>Description:</strong></p>
    <div class="description-html">${post.description}</div>
    <a href="https://tester.logiglo.com/account" class="button">View Post In Your Account</a>
    <p>Regards,<br>Logiglo Admin Team</p>
  `;
  return {
    subject,
    html: baseTemplate(content, subject),
    text: `Your post "${post.title}" has been successfully created.\n\nDescription: ${post.description}\n\nView it at: https://tester.logiglo.com/account\n\nRegards,\nLogiglo Admin Team`,
  };
};

module.exports.generalPostAcceptedTemplate = (post) => {
  const subject = `Post Accepted: ${post.title}`;
  const content = `
    <h1>Post Accepted</h1>
    <p>Great news! Your post "${post.title}" has been accepted.</p>
    <p><strong>Description:</strong></p>
    <div class="description-html">${post.description}</div>
    <p><strong>Reason:</strong> ${post.acceptReason || 'No reason provided'}</p>
    <a href="https://tester.logiglo.com/general/${post.id}" class="button">View Post</a>
    <p>Regards,<br>Logiglo Admin Team</p>
  `;
  return {
    subject,
    html: baseTemplate(content, subject),
    text: `Your post "${post.title}" has been accepted.\n\nDescription: ${post.description}\nReason: ${post.acceptReason || 'No reason provided'}\n\nView it at: https://tester.logiglo.com/general/${post.id}\n\nRegards,\nLogiglo Admin Team`,
  };
};

module.exports.generalPostRejectedTemplate = (post) => {
  const subject = `Post Rejected: ${post.title}`;
  const content = `
    <h1>Post Rejected</h1>
    <p>Your post "${post.title}" has been rejected.</p>
    <p><strong>Description:</strong></p>
    <div class="description-html">${post.description}</div>
    <p><strong>Reason:</strong> ${Array.isArray(post.rejectionReason) ? post.rejectionReason.join(', ') : post.rejectionReason || 'No reason provided'}</p>
    <p>Please review and resubmit if needed.</p>
    <a href="https://tester.logiglo.com/account" class="button">View Post In Your Account</a>
    <p>Regards,<br>Logiglo Admin Team</p>
  `;
  return {
    subject,
    html: baseTemplate(content, subject),
    text: `Your post "${post.title}" has been rejected.\n\nDescription: ${post.description}\nReason: ${Array.isArray(post.rejectionReason) ? post.rejectionReason.join(', ') : post.rejectionReason || 'No reason provided'}\n\nView it at: https://tester.logiglo.com/account\n\nRegards,\nLogiglo Admin Team`,
  };
};

module.exports.generalReplyAcceptedTemplate = (reply, post) => {
  const subject = `Reply Accepted on Post: ${post.title}`;
  const content = `
    <h1>Reply Accepted</h1>
    <p>Your reply to the post "${post.title}" has been accepted.</p>
    <p><strong>Reply:</strong></p>
    <div class="description-html">${reply.description || 'No description provided'}</div>
    <a href="https://logiglo.com/general/${post.id}" class="button">View Post</a>
    <p>Regards,<br>Logiglo Admin Team</p>
  `;
  return {
    subject,
    html: baseTemplate(content, subject),
    text: `Your reply to the post "${post.title}" has been accepted.\n\nReply: ${reply.description || 'No description provided'}\n\nView it at: https://logiglo.com/general/${post.id}\n\nRegards,\nLogiglo Admin Team`,
  };
};

module.exports.generalReplyRejectedTemplate = (reply, post) => {
  const subject = `Reply Rejected on Post: ${post.title}`;
  const content = `
    <h1>Reply Rejected</h1>
    <p>Your reply to the post "${post.title}" has been rejected.</p>
    <p><strong>Reply:</strong></p>
    <div class="description-html">${reply.description || 'No description provided'}</div>
    <p><strong>Reason:</strong> ${reply.rejectionReason || 'No reason provided'}</p>
    <p>Please review and resubmit if needed.</p>
    <a href="https://logiglo.com/general/${post.id}" class="button">View Post</a>
    <p>Regards,<br>Logiglo Admin Team</p>
  `;
  return {
    subject,
    html: baseTemplate(content, subject),
    text: `Your reply to the post "${post.title}" has been rejected.\n\nReply: ${reply.description || 'No description provided'}\nReason: ${reply.rejectionReason || 'No reason provided'}\n\nView it at: https://logiglo.com/general/${post.id}\n\nRegards,\nLogiglo Admin Team`,
  };
};
