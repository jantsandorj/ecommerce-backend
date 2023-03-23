const Category = require("../models/categoryModel");

exports.getAll = async (req, res) => {
  try {
    const result = await Category.find();
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

exports.getOne = async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await Category.findById({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

exports.create = async (req, res) => {
  try {
    const result = await Category.create(req.body);
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

exports.update = async (req, res) => {
  const { _id } = req.params;
  try {
    const result = await Category.findByIdAndUpdate({ _id }, req.body, {
      new: true,
    });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

exports.delete = async (req, res) => {
  const { _id } = req.params;
  try {
    const result = await Category.deleteOne({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
