import { authentificateToken } from '../auth/auth.js';
import { generateToken } from '../config/generateToken.js';
import { UserModel } from '../models/userModel.js';

// (SIGNUP) Create new user in DataBase
export const createUser = async (req, res) => {
  const { email } = req.body;
  const userExists = await UserModel.findOne({ email });

  if (userExists) {
    res.status(400).send('User with that email already exists');
    console.log('User with that email already exists');
  } else {
    const newUserModel = new UserModel(req.body);
    newUserModel
      .save()
      // .then((res) => console.log(res))
      .then(() => res.send('User created successfully'))
      .catch((err) => {
        console.error(err);
        res.send('Failed to add user to data base');
      });
  }
};

// (LOGIN) Compare passwords, generate token
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (!user) {
    res.status(404).send('Cant find user with this email');
    console.log('Cant find user with this email');
    return;
  }

  const isMatching = await user.comparePassword(password);
  console.log('userController', isMatching);

  const dataToSend = {
    userID: user._id,
    fullName: user.fullName,
    acces: user.acces,
  };
  if (isMatching) {
    res.status(201).send({ user: dataToSend, token: generateToken(user._id) });
  } else {
    res.status(404).send('Wrong password');
    console.log('Wrong password');
    return;
  }
};
// TESTAS GET
export const TESTAS = (req, res) => {
  console.log('testas', req.user);
  res.send('PRAEJO');
};
