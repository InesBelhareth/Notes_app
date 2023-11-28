const mongoose = require("mongoose");
require("dotenv").config();

const connOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/Notes";

const connectToDB = async () => {
  try {
    const connect = await mongoose.connect("mongodb://notesapp:7aWCN6zB4KOnHT1IUICVg15DtkIGyVtMnU7G6WInpJ4Hpuzw15JPHG9svH69gODffRv7f27sGlY9ACDbxakUug==@notesapp.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@notesapp@");
    if (connect) console.log(`Mongodb connected - ${connect.connection.host}`);
  } catch (err) {
    console.log(`Database error ${err}`);
  }
};

module.exports = connectToDB;
