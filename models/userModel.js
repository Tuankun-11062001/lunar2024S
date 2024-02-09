const mongoose = require("mongoose");

const useSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    secretKey: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.models.users || mongoose.model("users", useSchema);

module.exports = UserModel;
