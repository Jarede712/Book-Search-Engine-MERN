const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.error('Database connection error', err));

module.exports = mongoose.connection;
