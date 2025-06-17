const baseTemplate = (content, subject) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; color: #333333; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden;">
          <tr>
            <td style="background-color: #007BFF; text-align: center; padding: 20px;">
              <img src="http://tester.logiglo.com/Uploads/user/bd21670f-07e5-4b03-ae47-85afc3c1f28b/user_bd21670f-07e5-4b03-ae47-85afc3c1f28b_3c4ed364-aec6-4a98-bcad-32f1513ac872.jpg" alt="Logiglo Logo" style="max-width: 150px;" />
            </td>
          </tr>
          <tr>
            <td style="padding: 30px;">
              ${content}
            </td>
          </tr>
          <tr>
            <td style="background-color: #f4f4f4; text-align: center; padding: 20px; font-size: 12px; color: #666666;">
              <p>Follow us: 
                <a href="https://twitter.com/logiglo" style="color: #007BFF; text-decoration: none;">Twitter</a> | 
                <a href="https://linkedin.com/company/logiglo" style="color: #007BFF; text-decoration: none;">LinkedIn</a>
              </p>
              <p>&copy; ${new Date().getFullYear()} Logiglo. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

module.exports.quotePostCreatedTemplate = (post) => {
  const subject = `New Quote Post Created: ${post.title}`;
  const content = `
    <h1 style="font-size: 24px; color: #007BFF;">Quote Post Created</h1>
    <p style="font-size: 16px; line-height: 1.5;">Your quote post "<strong>${post.title}</strong>" has been successfully created.</p>
    <p style="font-size: 16px; line-height: 1.5;"><strong>Description:</strong> ${post.description}</p>
    <p style="margin: 20px 0;">
      <a href="https://logiglo.com/quote/${post.id}" style="display: inline-block; padding: 12px 24px; background-color: #007BFF; color: #ffffff; text-decoration: none; border-radius: 4px; font-size: 16px;">View Quote Post</a>
    </p>
    <p style="font-size: 16px; line-height: 1.5;">Regards,<br>Logiglo Admin Team</p>
  `;
  return {
    subject,
    html: baseTemplate(content, subject),
    text: `Your quote post "${post.title}" has been successfully created.\n\nDescription: ${post.description}\n\nView it at: https://logiglo.com/quote/${post.id}\n\nRegards,\nLogiglo Admin Team`,
  };
};

module.exports.quotePostAcceptedTemplate = (post) => {
  const subject = `Quote Post Accepted: ${post.title}`;
  const content = `
    <h1 style="font-size: 24px; color: #007BFF;">Quote Post Accepted</h1>
    <p style="font-size: 16px; line-height: 1.5;">Great news! Your quote post "<strong>${post.title}</strong>" has been accepted.</p>
    <p style="font-size: 16px; line-height: 1.5;"><strong>Description:</strong> ${post.description}</p>
    <p style="font-size: 16px; line-height: 1.5;"><strong>Reason:</strong> ${post.acceptReason || 'No reason provided'}</p>
    <p style="margin: 20px 0;">
      <a href="https://logiglo.com/quote/${post.id}" style="display: inline-block; padding: 12px 24px; background-color: #007BFF; color: #ffffff; text-decoration: none; border-radius: 4px; font-size: 16px;">View Quote Post</a>
    </p>
    <p style="font-size: 16px; line-height: 1.5;">Regards,<br>Logiglo Admin Team</p>
  `;
  return {
    subject,
    html: baseTemplate(content, subject),
    text: `Your quote post "${post.title}" has been accepted.\n\nDescription: ${post.description}\nReason: ${post.acceptReason || 'No reason provided'}\n\nView it at: https://logiglo.com/quote/${post.id}\n\nRegards,\nLogiglo Admin Team`,
  };
};

module.exports.quotePostRejectedTemplate = (post) => {
  const subject = `Quote Post Rejected: ${post.title}`;
  const content = `
    <h1 style="font-size: 24px; color: #007BFF;">Quote Post Rejected</h1>
    <p style="font-size: 16px; line-height: 1.5;">Your quote post "<strong>${post.title}</strong>" has been rejected.</p>
    <p style="font-size: 16px; line-height: 1.5;"><strong>Description:</strong> ${post.description}</p>
    <p style="font-size: 16px; line-height: 1.5;"><strong>Reason:</strong> ${Array.isArray(post.rejectionReason) ? post.rejectionReason.join(', ') : post.rejectionReason || 'No reason provided'}</p>
    <p style="font-size: 16px; line-height: 1.5;">Please review and resubmit if needed.</p>
    <p style="margin: 20px 0;">
      <a href="https://logiglo.com/quote/${post.id}" style="display: inline-block; padding: 12px 24px; background-color: #007BFF; color: #ffffff; text-decoration: none; border-radius: 4px; font-size: 16px;">View Quote Post</a>
    </p>
    <p style="font-size: 16px; line-height: 1.5;">Regards,<br>Logiglo Admin Team</p>
  `;
  return {
    subject,
    html: baseTemplate(content, subject),
    text: `Your quote post "${post.title}" has been rejected.\n\nDescription: ${post.description}\nReason: ${Array.isArray(post.rejectionReason) ? post.rejectionReason.join(', ') : post.rejectionReason || 'No reason provided'}\n\nView it at: https://logiglo.com/quote/${post.id}\n\nRegards,\nLogiglo Admin Team`,
  };
};

module.exports.quoteReplyAcceptedTemplate = (reply, post) => {
  const subject = `Quote Reply Accepted on Post: ${post.title}`;
  const content = `
    <h1 style="font-size: 24px; color: #007BFF;">Quote Reply Accepted</h1>
    <p style="font-size: 16px; line-height: 1.5;">Your reply to the quote post "<strong>${post.title}</strong>" has been accepted.</p>
    <p style="font-size: 16px; line-height: 1.5;"><strong>Reply:</strong> ${reply.description || 'No description provided'}</p>
    <p style="margin: 20px 0;">
      <a href="https://logiglo.com/quote/${post.id}" style="display: inline-block; padding: 12px 24px; background-color: #007BFF; color: #ffffff; text-decoration: none; border-radius: 4px; font-size: 16px;">View Quote Post</a>
    </p>
    <p style="font-size: 16px; line-height: 1.5;">Regards,<br>Logiglo Admin Team</p>
  `;
  return {
    subject,
    html: baseTemplate(content, subject),
    text: `Your reply to the quote post "${post.title}" has been accepted.\n\nReply: ${reply.description || 'No description provided'}\n\nView it at: https://logiglo.com/quote/${post.id}\n\nRegards,\nLogiglo Admin Team`,
  };
};

module.exports.quoteReplyRejectedTemplate = (reply, post) => {
  const subject = `Quote Reply Rejected on Post: ${post.title}`;
  const content = `
    <h1 style="font-size: 24px; color: #007BFF;">Quote Reply Rejected</h1>
    <p style="font-size: 16px; line-height: 1.5;">Your reply to the quote post "<strong>${post.title}</strong>" has been rejected.</p>
    <p style="font-size: 16px; line-height: 1.5;"><strong>Reply:</strong> ${reply.description || 'No description provided'}</p>
    <p style="font-size: 16px; line-height: 1.5;"><strong>Reason:</strong> ${reply.rejectionReason || 'No reason provided'}</p>
    <p style="font-size: 16px; line-height: 1.5;">Please review and resubmit if needed.</p>
    <p style="margin: 20px 0;">
      <a href="https://logiglo.com/quote/${post.id}" style="display: inline-block; padding: 12px 24px; background-color: #007BFF; color: #ffffff; text-decoration: none; border-radius: 4px; font-size: 16px;">View Quote Post</a>
    </p>
    <p style="font-size: 16px; line-height: 1.5;">Regards,<br>Logiglo Admin Team</p>
  `;
  return {
    subject,
    html: baseTemplate(content, subject),
    text: `Your reply to the quote post "${post.title}" has been rejected.\n\nReply: ${reply.description || 'No description provided'}\nReason: ${reply.rejectionReason || 'No reason provided'}\n\nView it at: https://logiglo.com/quote/${post.id}\n\nRegards,\nLogiglo Admin Team`,
  };
};

module.exports.generalPostCreatedTemplate = (post) => {
  const subject = `New General Post Created: ${post.title}`;
  const content = `
    <h1 style="font-size: 24px; color: #007BFF;">General Post Created</h1>
    <p style="font-size: 16px; line-height: 1.5;">Your general post "<strong>${post.title}</strong>" has been successfully created.</p>
    <p style="font-size: 16px; line-height: 1.5;"><strong>Description:</strong> ${post.description}</p>
    <p style="margin: 20px 0;">
      <a href="https://logiglo.com/general/${post.id}" style="display: inline-block; padding: 12px 24px; background-color: #007BFF; color: #ffffff; text-decoration: none; border-radius: 4px; font-size: 16px;">View General Post</a>
    </p>
    <p style="font-size: 16px; line-height: 1.5;">Regards,<br>Logiglo Admin Team</p>
  `;
  return {
    subject,
    html: baseTemplate(content, subject),
    text: `Your general post "${post.title}" has been successfully created.\n\nDescription: ${post.description}\n\nView it at: https://logiglo.com/general/${post.id}\n\nRegards,\nLogiglo Admin Team`,
  };
};

module.exports.generalPostAcceptedTemplate = (post) => {
  const subject = `General Post Accepted: ${post.title}`;
  const content = `
    <h1 style="font-size: 24px; color: #007BFF;">General Post Accepted</h1>
    <p style="font-size: 16px; line-height: 1.5;">Great news! Your general post "<strong>${post.title}</strong>" has been accepted.</p>
    <p style="font-size: 16px; line-height: 1.5;"><strong>Description:</strong> ${post.description}</p>
    <p style="font-size: 16px; line-height: 1.5;"><strong>Reason:</strong> ${post.acceptReason || 'No reason provided'}</p>
    <p style="margin: 20px 0;">
      <a href="https://logiglo.com/general/${post.id}" style="display: inline-block; padding: 12px 24px; background-color: #007BFF; color: #ffffff; text-decoration: none; border-radius: 4px; font-size: 16px;">View General Post</a>
    </p>
    <p style="font-size: 16px; line-height: 1.5;">Regards,<br>Logiglo Admin Team</p>
  `;
  return {
    subject,
    html: baseTemplate(content, subject),
    text: `Your general post "${post.title}" has been accepted.\n\nDescription: ${post.description}\nReason: ${post.acceptReason || 'No reason provided'}\n\nView it at: https://logiglo.com/general/${post.id}\n\nRegards,\nLogiglo Admin Team`,
  };
};

module.exports.generalPostRejectedTemplate = (post) => {
  const subject = `General Post Rejected: ${post.title}`;
  const content = `
    <h1 style="font-size: 24px; color: #007BFF;">General Post Rejected</h1>
    <p style="font-size: 16px; line-height: 1.5;">Your general post "<strong>${post.title}</strong>" has been rejected.</p>
    <p style="font-size: 16px; line-height: 1.5;"><strong>Description:</strong> ${post.description}</p>
    <p style="font-size: 16px; line-height: 1.5;"><strong>Reason:</strong> ${Array.isArray(post.rejectionReason) ? post.rejectionReason.join(', ') : post.rejectionReason || 'No reason provided'}</p>
    <p style="font-size: 16px; line-height: 1.5;">Please review and resubmit if needed.</p>
    <p style="margin: 20px 0;">
      <a href="https://logiglo.com/general/${post.id}" style="display: inline-block; padding: 12px 24px; background-color: #007BFF; color: #ffffff; text-decoration: none; border-radius: 4px; font-size: 16px;">View General Post</a>
    </p>
    <p style="font-size: 16px; line-height: 1.5;">Regards,<br>Logiglo Admin Team</p>
  `;
  return {
    subject,
    html: baseTemplate(content, subject),
    text: `Your general post "${post.title}" has been rejected.\n\nDescription: ${post.description}\nReason: ${Array.isArray(post.rejectionReason) ? post.rejectionReason.join(', ') : post.rejectionReason || 'No reason provided'}\n\nView it at: https://logiglo.com/general/${post.id}\n\nRegards,\nLogiglo Admin Team`,
  };
};

module.exports.generalReplyAcceptedTemplate = (reply, post) => {
  const subject = `General Reply Accepted on Post: ${post.title}`;
  const content = `
    <h1 style="font-size: 24px; color: #007BFF;">General Reply Accepted</h1>
    <p style="font-size: 16px; line-height: 1.5;">Your reply to the general post "<strong>${post.title}</strong>" has been accepted.</p>
    <p style="font-size: 16px; line-height: 1.5;"><strong>Reply:</strong> ${reply.description || 'No description provided'}</p>
    <p style="margin: 20px 0;">
      <a href="https://logiglo.com/general/${post.id}" style="display: inline-block; padding: 12px 24px; background-color: #007BFF; color: #ffffff; text-decoration: none; border-radius: 4px; font-size: 16px;">View General Post</a>
    </p>
    <p style="font-size: 16px; line-height: 1.5;">Regards,<br>Logiglo Admin Team</p>
  `;
  return {
    subject,
    html: baseTemplate(content, subject),
    text: `Your reply to the general post "${post.title}" has been accepted.\n\nReply: ${reply.description || 'No description provided'}\n\nView it at: https://logiglo.com/general/${post.id}\n\nRegards,\nLogiglo Admin Team`,
  };
};

module.exports.generalReplyRejectedTemplate = (reply, post) => {
  const subject = `General Reply Rejected on Post: ${post.title}`;
  const content = `
    <h1 style="font-size: 24px; color: #007BFF;">General Reply Rejected</h1>
    <p style="font-size: 16px; line-height: 1.5;">Your reply to the general post "<strong>${post.title}</strong>" has been rejected.</p>
    <p style="font-size: 16px; line-height: 1.5;"><strong>Reply:</strong> ${reply.description || 'No description provided'}</p>
    <p style="font-size: 16px; line-height: 1.5;"><strong>Reason:</strong> ${reply.rejectionReason || 'No reason provided'}</p>
    <p style="font-size: 16px; line-height: 1.5;">Please review and resubmit if needed.</p>
    <p style="margin: 20px 0;">
      <a href="https://logiglo.com/general/${post.id}" style="display: inline-block; padding: 12px 24px; background-color: #007BFF; color: #ffffff; text-decoration: none; border-radius: 4px; font-size: 16px;">View General Post</a>
    </p>
    <p style="font-size: 16px; line-height: 1.5;">Regards,<br>Logiglo Admin Team</p>
  `;
  return {
    subject,
    html: baseTemplate(content, subject),
    text: `Your reply to the general post "${post.title}" has been rejected.\n\nReply: ${reply.description || 'No description provided'}\nReason: ${reply.rejectionReason || 'No reason provided'}\n\nView it at: https://logiglo.com/general/${post.id}\n\nRegards,\nLogiglo Admin Team`,
  };
};
