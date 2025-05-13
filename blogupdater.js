import fs from "fs";

//find file names
const folder = "src/assets/blog/posts";
let files = [];
const jsonArray = [];

fs.readdir(folder, function (err, filenames) {
  if (err) {
    console.log(err);
    return;
  }
  filenames.forEach((file) => {
    files.push(`${folder}/${file}`);
  });
  files.forEach((file) => {
    const data = fs.readFileSync(file, "utf8");
    const lines = data.trim().split("\r\n");
    const tags = lines[4].split(",");
    const blogObject = {
      type: lines[0],
      title: lines[1],
      date: lines[2],
      author: lines[3],
      tags: tags,
      image: lines[5],
      content: lines.slice(6).join("\r\n"),
    };
    jsonArray.push(blogObject);
  });
  fs.writeFileSync(
    "src/assets/blog/posts.json",
    JSON.stringify(jsonArray, null, 2)
  );
});
