// Import the User model
import { user } from "../Models/User.model.js";
// Import bcrypt for password hashing
import bcrypt from "bcrypt";
// Import jwt for token generation
import jwt from "jsonwebtoken";

// Get the salt rounds from environment variables
const saltRounds = +process.env.SALT_ROUNDS;

// Controller for user registration
export const userRegister = (req, res) => {
  try {
    let password = req.body.password;
    bcrypt.hash(password, saltRounds, async (err, hash) => {
      if (err) {
        console.log(err);
      }

      let userData = { ...req.body, password: hash };
      await user.create(userData);
      res.status(201).send("registration successful");
    });
  } catch (error) {
    res.status(500).send("registration failed");
    console.error(error);
  }
};

// Controller for user login
export const userLogin = async (req, res) => {
  try {
    const userData = await user.findOne({ username: req.body.username });

    if (!userData) {
      console.log("user not found");
      res.status(404).send("user not found");
    } else {
      let hash = userData.password;
      let plainPassword = req.body.password;
      bcrypt.compare(plainPassword, hash, async (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send("error comparing passwords");
        }

        if (result) {
          const payload = {
            id: userData._id,
            username: userData.username,
          };
          let jwtToken = jwt.sign(payload, process.env.JWT_SECURITY_KEY);

          userData.token = jwtToken;
          await userData.save(); // Save the updated user document
          res.status(200).json({ msg: "login success", token: jwtToken });
        } else {
          res.status(401).send("username or password not matched");
        }
      });
    }
  } catch (error) {
    res.status(500).send("login again");
    console.error(error);
  }
};

// Controller for user logout
export const userLogout = async (req, res) => {
  try {
    req.user.token = "";
    await req.user.save();
    res.status(200).send("logout success");
  } catch (error) {
    res.status(500).send("logout again");
    console.error(error);
  }
};
