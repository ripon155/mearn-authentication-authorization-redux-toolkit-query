import asyncHandler from 'express-async-handler';
import User from '../model/userModel.js';
import generateToken from '../utils/genToken.js';

//api/users/auth
//post
export const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Auth user' });
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
  res.status(200).json({ message: 'Logout  user' });
});

//@ Get User   Profile
//api/users/profile
//get
export const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get User Profile user' });
});

//@ Update user profile
//api/users/profile
//patch
export const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'update user profile ' });
});
