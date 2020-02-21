const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    day:{
        type: Date,
        require:true
     },
    // totalDuration : {
    //      type: Number,
    //      require:true
    //  },
     exercises : {
         type: Number,
         require:true
     }

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;