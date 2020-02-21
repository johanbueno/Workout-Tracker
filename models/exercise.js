const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
   type: {
      type: String,
      trim: true,
      required: true
  },
  name: {
      type: String,
      trim: true,
      required: true
  },
  duration: {
      type: Number,
      trim: true,
      required: true
  },
  weight: {
      type: Number,
      trim: true,
  },
  reps: {
      type: Number,
      trim: true,
  },
  sets: {
      type: Number,
      trim: true,
  },
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;