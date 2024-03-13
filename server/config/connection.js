const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI ||
    'mongodb+srv://jaredeichhorst:Fa0TcSLWzBcoke3p@cluster0.rh8orni.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
);

module.exports = mongoose.connection;
