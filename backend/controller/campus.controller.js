const Campus = require('../model/Campus.model.js')

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
}

module.exports = campusController