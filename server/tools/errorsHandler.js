module.exports.error = (err, res) => {
  res.status(500).json({
    message: err.message
  });
};