const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
        type: String,
        require: true,
      },
  
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", TaskSchema);