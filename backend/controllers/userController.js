import asyncHandler from 'express-async-handler';

//api/users/auth
//post
export const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Auth user' });
});

//@ Register User
//api/users/register
//post
export const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Register user' });
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
