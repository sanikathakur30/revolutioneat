const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://gofood:revolutioneat@cluster0.udqsfex.mongodb.net/gofood?retryWrites=true&w=majority';
const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
    // Define the Mongoose model for "food_items"
    const FoodItem = mongoose.model('food_items', new mongoose.Schema({
      // Define your schema here
    }));
    // Fetch data from the "food_items" collection using the model
    const data = await FoodItem.find({}); // You can add conditions in the find() method if needed
    console.log();
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDB;
