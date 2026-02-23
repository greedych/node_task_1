require("dotenv").config();
const axios = require("axios");

const CITY = process.env.CITY;

const URL = `https://wttr.in/${CITY}?format=%t`;

const getWether = async () => {
  try {
    const responce = await axios.get(URL);
    console.log(responce.data);
  } catch (e) {
    console.error(e);
  }
};

getWether();
