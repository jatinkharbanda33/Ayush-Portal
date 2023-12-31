import mongoose from "mongoose";
const {Schema} = mongoose;

const GigSchema = new Schema({
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    
    cat: {
      type: String,
      required: true,
    },
    nEmp: {
      type: Number,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: false,
    },
    userId: {
      type: String,
      required: true,
    },

    currEval: {
      type: Number,
      required: true,
    },
    },{
        timestamps:true
    });

export default mongoose.model("Gig", GigSchema);