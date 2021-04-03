// Dependencies
const express = require("express");
const routes = require("./routes");
const path = require("path");
const session = require("express-session");
const passport = require("./passport/index");
const mongoose = require("mongoose");
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Variable Port
const PORT = process.env.PORT || 3001;

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hobbies", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });


// TESTING 123


// app.use(
//   session({
//     secret: "key",
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// app.use(routes);

// If our node environment is production we will serve up our static assets from the build folder
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// app.use(express.static("client/build"));
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// app.listen(PORT, function () {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });
