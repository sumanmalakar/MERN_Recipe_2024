import { User } from "../Models/User.js";
import jwt from "jsonwebtoken";

export const Authenticate = async (req, res, next) => {
  const token = req.header("Auth");
  console.log("token", token);
  try {
    if (!token) return res.json({ message: "login first..!" });

    const decoded = jwt.verify(token, "!@#$%^&*()");

    // console.log(decoded)
    const id = decoded.userId;

    let user = await User.findById(id);

    if (!user) return res.json({ message: "User not exist" });

    req.user = user;
    next();
  } catch (error) {
    res.json({ message: error.message });
  }
};
