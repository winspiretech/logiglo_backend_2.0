// create course

async function createCourse(req, res) {
  try {
    // Extract form fields from req.body
    const { title} = req.body;

    const file = req.files

    if(!title){
      res.json({success: false, message: 'Provide all the fields'})
    }

    


  } catch (error) {}
}
