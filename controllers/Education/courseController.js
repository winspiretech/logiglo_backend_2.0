// create course

async function createCourse(req, res) {
  try {
    // Extract form fields from req.body
    const { title } = req.body;

    const file = req.files;

    if (!title) {
      res.json({ success: false, message: 'Provide all the fields' });
    }

    if (file) {
      console.log(file);
    } else {
      console.log('file not found!');
    }

    res.json({ success: true, message: 'Course created successfully' });
  } catch (error) {
    console.log(`Error: while creating the course ${error}`);
  }
}

module.exports = createCourse;
