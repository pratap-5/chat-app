import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, //ms
    httpOnly: true, //prevent the xss attacks cross origin scripting attacks
    sameSite: "strict", // crfs attacks cross-site request forgery attacks
    secure: process.env.MODE_ENV !== "devlopment",
  });

};

export default generateTokenAndSetCookie;
