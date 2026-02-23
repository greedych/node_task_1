const fs = require("fs");
const axios = require("axios");

const URL = `https://jsonplaceholder.typicode.com/posts`;

const getPosts = async () => {
  try {
    const responce = await axios.get(URL);
    fs.writeFile(
      "./posts.txt",
      JSON.stringify(responce.data),
      "utf-8",
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("File was successfully created");
      },
    );
  } catch (e) {
    console.error(e);
  }
};

getPosts();
