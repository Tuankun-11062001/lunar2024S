const DragonModel = require("../models/dragonModel");

const dragonController = {
  getAllDragon: async (req, res) => {
    try {
      const dragons = await DragonModel.find({}, "-price");

      // random element
      function shuffleArray(array) {
        // Sử dụng Fisher-Yates Shuffle Algorithm
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          // Swap phần tử thứ i và j
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
      const newDragons = shuffleArray(dragons);

      return res.status(200).send({
        status: 200,
        message: "success",
        data: newDragons,
        oldData: dragons,
      });
    } catch (error) {
      return res.status(500).send({
        status: 500,
        message: error.message,
      });
    }
  },

  findDragon: async (req, res) => {
    try {
      const dragon = await DragonModel.findOne({ _id: req.params.id });

      return res.status(200).send({
        status: 200,
        message: "success",
        data: dragon,
      });
    } catch (error) {
      return res.status(500).send({
        status: 500,
        message: error.message,
      });
    }
  },

  rankDragon: async (req, res) => {
    try {
      const dragon = await DragonModel.find();
      const rank = dragon.filter((item) => item.username);
      rank.sort((a, b) => b.price - a.price);
      return res.status(200).send({
        status: 200,
        message: "success",
        data: rank,
      });
    } catch (error) {
      return res.status(500).send({
        status: 500,
        message: error.message,
      });
    }
  },
  createOneDragon: async (req, res) => {
    try {
      const body = req.body;
      const dragon = new DragonModel(body);
      await dragon.save();

      return res.status(200).send({
        status: 200,
        message: "success",
        data: dragon,
      });
    } catch (error) {
      return res.status(500).send({
        status: 500,
        message: error.message,
      });
    }
  },
  EditOneDragon: async (req, res) => {
    try {
      const body = req.body;

      // check bank
      const user = await DragonModel.findOne({
        numberBank: req.body.numberBank,
      });
      if (user) {
        return res.status(400).send({
          status: 400,
          message: "user already exist",
        });
      }

      // check secretKey

      if (
        body.secretKey.toLowerCase() !== process.env.SECRET_KEY.toLowerCase()
      ) {
        return res.status(400).send({
          status: 400,
          message: "wrong secretKey",
        });
      }

      const dragon = await DragonModel.findByIdAndUpdate(req.params.id, body);

      return res.status(200).send({
        status: 200,
        message: "success",
        data: body,
      });
    } catch (error) {
      return res.status(500).send({
        status: 500,
        message: error.message,
      });
    }
  },
  DeleteOneDragon: async (req, res) => {
    try {
      const dragon = await DragonModel.findByIdAndDelete(req.params.id);

      return res.status(200).send({
        status: 200,
        message: "success",
        data: dragon,
      });
    } catch (error) {
      return res.status(500).send({
        status: 500,
        message: error.message,
      });
    }
  },
};

module.exports = dragonController;
