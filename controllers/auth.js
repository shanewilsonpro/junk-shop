const User = require("../models/user");

exports.getLogin = (req, res, next) => {
  //   const isLoggedIn =
  //     req.get("Cookie").split(";")[1].trim().split("=")[1] === "true";

  //   const cookies = [];
  //   const browerCookies = req.get("Cookie").split(";");
  //   for (let cookie of browerCookies) {
  //     let key = cookie.split("=")[0].trim();
  //     let val = cookie.split("=")[1].trim();
  //     cookies.push({ key, val });
  //   }
  //   const isLoggedIn = cookies.find((cookie) => cookie.key === "loggedIn").val;

  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: false,
  });
};

exports.postLogin = (req, res, next) => {
  User.findById("63226ab23e47e85b3ed32fdc")
    .then((user) => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      req.session.save((error) => {
        console.log(error);
        res.redirect("/");
      });
    })
    .catch((err) => console.log(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};
