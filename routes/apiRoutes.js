const router = require("express").Router();
const workout = require("../models/workout.js");

router.post("/api/workouts", ({ body }, res) => {

  workout.create(body)
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
      console.log(dbWorkout)
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});



// router.get("/api/workout", (req, res) => {
//   workout.find({})
//     .sort({ date: -1 })
//     .then(dbworkout => {
//       res.json(dbworkout);
//       console.log(dbworkout)
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });


router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.updateOne({_id: params.id}, {$push: {exercises: body}})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
