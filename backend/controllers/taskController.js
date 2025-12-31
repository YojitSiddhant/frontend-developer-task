const Task = require("../models/Task");

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user }).sort({ createdAt: -1 });
  res.json(tasks);
};

exports.createTask = async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
    user: req.user,
  });
  res.status(201).json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
};
