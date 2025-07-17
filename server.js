// const app = require('./app');
// const { archiveOldBlogs } = require('./jobs/archiveOldBlogs.job');
// const { archiveOldEvents } = require('./jobs/archiveOldEvents.job');
// const PORT = process.env.PORT || 3000;

// archiveOldBlogs();
// archiveOldEvents();

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

const http = require('http');
const app = require('./app');
const { initSocket } = require('./socket/socket');
const { archiveOldBlogs } = require('./jobs/archiveOldBlogs.job');
const { archiveOldEvents } = require('./jobs/archiveOldEvents.job');

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

initSocket(server);

archiveOldBlogs();
archiveOldEvents();

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
