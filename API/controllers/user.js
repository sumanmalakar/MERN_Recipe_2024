import { User } from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  // console.log("route is working..")
  const { name, gmail, password } = req.body;
  try {
    let user = await User.findOne({ gmail });

    if (user) return res.json({ message: "User already exist..!" });

    const hashPassword = await bcrypt.hash(password, 10);

    user = await User.create({ name, gmail, password: hashPassword });

    res.json({ message: "User Register Successfully" });
  } catch (error) {
    console.error("Error occure while registering user ", error.message);
    res.json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  const { gmail, password } = req.body;

  try {
    let user = await User.findOne({ gmail });

    if (!user) return res.json({ message: "User not Exist...!" });

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) return res.json({ message: "Invalid Credential" });

    const token = jwt.sign({ userId: user._id }, "!@#$%^&*()", {
      expiresIn: "1d",
    });

    res.json({ message: `Welcome ${user.name}`, token });
  } catch (error) {
    // console.log("Internal Server Error ..")

    res.json({ message: "Internal Server Error", error });
  }
};

export const allUser = async (req, res) => {
  let users = await User.find();

  if (!users) return res.json({ message: "No User exist" });

  res.json({ users });
};


export const MyProfile = async (req,res) =>{
  res.json({user:req.user})
}