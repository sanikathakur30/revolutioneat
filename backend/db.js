const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://gofood:revolutioneat@cluster0.udqsfex.mongodb.net/gofood?retryWrites=true&w=majority';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");

    // Define your data fetching logic here
    const fetchedData = await mongoose.connection.db.collection("food_items").find({}).toArray();
    const foodCategory = await mongoose.connection.db.collection("food_category").find({}).toArray();

    global.food_items = fetchedData;
    global.food_category = foodCategory;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDB;