const Player = require('../models/player');
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");


exports.leaderboard = asyncHandler(async (req, res) => {
    const allPlayers = await Player.find({})
    .sort({ timer: 1 })
    .exec();

  res.status(200).json({success: true, players: allPlayers});
})

// exports.player_create = [

//     body("name", "Name must not be empty.")
//       .trim()
//       .isLength({ min: 1 })
//       .escape(),
//     body("time", "time must greater than 0.")
//       .isInt({ min: 0 })
//       .escape(),
//     body("timetext", "Timetext must not be empty.")
//       .trim()
//       .isLength({ min: 1 })
//       .escape(),
//     body("date", "Invalid date")
//       .optional({ values: "falsy" })
//       .isISO8601()
//       .toDate(),
//     body("board")
//       .escape(),

  
//     asyncHandler(async (req, res, next) => {
//       // Extract the validation errors from a request.
//       const errors = validationResult(req);
  
//       // Create a Book object with escaped and trimmed data.
//       const player = new Player({
//         name: req.body.name,
//         time: req.body.time,
//         timetext: req.body.timetext,
//         board: req.body.board,
//       });
  
//       if (!errors.isEmpty()) {
//         // There are errors. Render form again with sanitized values/error messages.
//         res.status(400).json({ success: false, message: "invalid input" });
//         return;
//       }
//         // Data from form is valid. Save book.
//       const saved_player = await player.save();
//       res.status(200).json({ success: true, player: saved_player });
//     }),
// ]

exports.player_create = async (req, res) => {

  const player = new Player(
      {
        name: req.body.name,
        time: req.body.time,
        timetext: req.body.timetext,
        board: req.body.board,
      }
  )

  const newPlayer = await player.save()

  res.status(200).json({success:true, player: newPlayer})
}

exports.leaderboard_filter = asyncHandler(async (req, res, next) => {
  // Get details of author and all their books (in parallel)
  const players = await Player.find({ board: req.params.id }).sort({time: 1}).exec()

  if (players === null) {
    res.status(400).json({ success: false, message: "invalid players_id" });
    return;
  }

  res.status(200).json({success: true, players: players})
})