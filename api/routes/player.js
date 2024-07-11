const express = require("express");
const router = express.Router();

const player_controller = require('../controllers/playerController')

router.get('/leaderboard/:id', player_controller.leaderboard_filter );

router.get('/leaderboard', player_controller.leaderboard );

router.post('/save', player_controller.player_create );

module.exports = router
