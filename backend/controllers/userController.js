import asyncHandler from 'express-async-handler';
import User from '../model/userModel.js';
import generateToken from '../utils/genToken.js';

//api/users/auth
//post
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      user: user
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

//@ Register User
//api/users/register
//post
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    name,
    email,
    password
  });
  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      user: user
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

//@ Logout  User
//api/users/logout
//get
export const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0)
  });
  res.status(200).json({ message: 'User logged out' });
});

//@ Get User   Profile
//api/users/profile
//get
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email
  };
  res.status(200).json(user);
});

//@ Update user profile
//api/users/profile
//patch
export const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();
    res.status(200).json({ updatedUser: updatedUser });
  } else {
    res.status(404);
    throw new Error('User Not found');
  }
  res.status(200).json({ message: 'update user profile ' });
});
