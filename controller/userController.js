const UserModel = require("../models/userModel");

const dragonController = {
  // admin controller
  login: async (req, res) => {
    try {
      const body = req.body;

      if (
        body.name === process.env.USER_ADMIN &&
        body.password === process.env.PASSWORD_ADMIN
      ) {
        return res.status(200).send({
          status: 200,
          message: "success",
          data: {
            username: "luner2024",
            password: "secret",
          },
        });
      }
      return res.status(400).send({
        status: 400,
        message: "wrong username or password",
        data: {},
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
