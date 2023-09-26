const mongoose = require('mongoose');

const dbUri =
  'mongodb+srv://admin:ThCeBTLfvY6y4wBH@cluster0.d9fonce.mongodb.net/employee_db?retryWrites=true&w=majority';

module.exports = () => {
  return mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
