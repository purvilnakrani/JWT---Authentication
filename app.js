const express = require("express");
const app = express();
const authRoute = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const authMiddlewares = require("./middleware/authMiddleware");
const connectDB = require("./db/connect");

// middleware
app.use(express.static("./public"));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set("view engine", "ejs");

// database connection
// const dbURI = 'mongodb+srv://purvilpatel1234:1234@cluster0.h1jl7ko.mongodb.net/userDatabase';
// const uri =
//   "mongodb+srv://pnakrani:1234@cluster0.h1jl7ko.mongodb.net/userDatabase";
// mongoose
//   .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then((result) => {
//     console.log("connected to db");
//     console.log(result);
//   })
//   .catch((err) => console.log(err));

// routes
app.get("*", authMiddlewares.checkUser);
app.get("/", (req, res) => {
  res.render("home");
});
app.use(authRoute);
app.get("/cakes", authMiddlewares.requireAuth, (req, res) => {
  res.render("cakes");
});
const post = 3000;

const start = async () => {
  try {
    await connectDB();
    app.listen(post, () =>
      console.log(`Server is listening on port ${post}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
