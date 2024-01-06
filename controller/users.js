const {response} = require("express")

const usersGet = (req, res = response) => {
    res.json({ msg: "get - api"});
  };
const usersPut = (req, res = response) => {
    res.json({ msg: "put - api" });
  };
const usersPost = (req, res = response ) => {
    const { name, age } = req.body
    res.status(201).json({ msg: "post - api", name, age});
  }
const usersDelete = (req, res =  response) => {
    res.json({ msg: "delete - api"});
  }

  module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete
  }