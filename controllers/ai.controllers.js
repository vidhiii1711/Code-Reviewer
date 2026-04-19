const aiservice = require("../services/ai.server")
module.exports.getReview=async (req,res) => {
    const code=req.body.code;

    if(!code){
        return res.status(400).send("code is required");
    }
    const response= await aiservice(code)
    res.send(response)
}