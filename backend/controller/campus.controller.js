const Campus = require('../model/Campus.model.js')
const Post = require('../model/Post.model.js')
const campusController = {

    async campusName(req, res){
     

        try {
            
              const campuses = await Campus.find(); // fetch all campuses
            res.status(200).json(campuses);
        } catch (error) {
            console.error("Error fetching campuses:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    },

  async getPostByCampus(req, res) {
  try {
    const { name } = req.params;
    const posts = await Post.find({ collegeName: name });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
}

}

module.exports = campusController