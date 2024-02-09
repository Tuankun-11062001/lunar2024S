const mongoose = require("mongoose");

const DragonSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    wish: {
      type: String,
      required: true,
    },
    username: {
      type: String,
    },
    numberBank: {
      type: String,
    },
    detailBank: {
      type: String,
    },
    secretKey: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const DragonModel =
  mongoose.models.dragons || mongoose.model("dragons", DragonSchema);

module.exports = DragonModel;
