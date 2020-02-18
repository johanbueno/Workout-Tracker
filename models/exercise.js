const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
      name: {
      type:String,
      require: true
     },
      distance: {
      type : Number,
      require: true
     },
     duration :{
         type: Number,
         require: true
     },
     weight :{

        type:Number,
        require:true
     },
     sets :{
        type:Number,
        require:true
     },
     reps:{
        type:Number,
        require:true
     }
 
});

const ExerciseSchema = mongoose.model("Exercise", ExerciseSchema);

module.exports = ExerciseSchema;