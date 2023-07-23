import asyncHandler from 'express-async-handler';

export const authUser = asyncHandler(async (req, res) => {
  res.status(401);
  throw new Error('something went wrong');
  res.status(200).json({ message: 'Auth user' });
});
