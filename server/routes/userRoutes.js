const express = require("express");
const router = express.Router();

const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");

router.put(
  "/endorse/:userId/:skillName/:endorserId", authMiddleware, 
  async (req, res) => {
    try {
        if (req.params.userId === req.params.endorserId) {
          return res.status(400).json({
          message: "You cannot endorse yourself"
         });
        }

      const user = await User.findById(req.params.userId);

      if (!user) {
        return res.status(404).json({
          message: "User not found"
        });
      }

      const skill = user.skills.find(
        s => s.name === req.params.skillName
      );

      if (!skill) {
        return res.status(404).json({
          message: "Skill not found"
        });
      }

      if (
        !skill.endorsements.includes(
          req.params.endorserId
        )
      ) {
        skill.endorsements.push(
          req.params.endorserId
        );
      }

      await user.save();

      res.json(user);

    } catch (error) {

      res.status(500).json({
        message: error.message
      });

    }
  }
);

router.get(
  "/endorsements/:userId",
  async (req, res) => {

    try {

      const user = await User.findById(
        req.params.userId
      );

      const skills = user.skills.map(skill => ({
        skill: skill.name,
        endorsements:
          skill.endorsements.length
      }));

      res.json(skills);

    } catch (error) {

      res.status(500).json({
        message: error.message
      });

    }

  }
);

module.exports = router;