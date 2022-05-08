const mongoose = require("mongoose");
const schema = mongoose.Schema;
const PubSchema = new schema({
    nom: {
        type: String,
    },
    titre: {
        type: String,
    },
    content: {
        type: String,
        required: true,
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "comment",
        }
    ],
    likers: {
        type: [String],
       
    },
    user: 
    {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
    },
   
   
},
{
    timestamps:true,
}
);

module.exports = mongoose.model("publication", PubSchema);