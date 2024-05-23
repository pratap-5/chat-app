import User from "../models/user.model.js";

export const getUserForSideBar = async (req, res) => {
  try {
    const logedInUserId = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: logedInUserId },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("error in getuserfor side bar ", error.message);
    res.status(500).json({ error: "internal server error" }); 
  }
};
