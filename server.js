const app = require('./app');
const { archiveOldBlogs } = require('./jobs/archiveOldBlogs.job');
const { archiveOldEvents } = require('./jobs/archiveOldEvents.job');
const PORT = process.env.PORT || 3000;

archiveOldBlogs();
archiveOldEvents();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
