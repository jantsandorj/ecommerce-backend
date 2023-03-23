const order = require("../models/orderModel");

exports.getAll = async (req, res) => {
  try {
    const result = await order.find();
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

exports.getOne = async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await order.findById({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

exports.create = async (req, res) => {
  try {
    const result = await order.create(req.body);
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

exports.update = async (req, res) => {
  const { _id } = req.params;
  try {
    const result = await order.findByIdAndUpdate({ _id }, req.body, {
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
    const result = await order.deleteOne({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
