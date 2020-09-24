var path = require("path")
const fs = require("fs")
const userPath = (path.join(__dirname, "..", "customsounds/"))

module.exports = function intro(client, message, name, url, bool){

    fs.writeFile(userPath + name +".js", "module.exports = {\n" + "name: " + "'" + name.tag + "'" + ",\n" + "id: " + "'" + message.author.id + "',\n" + "toggled: " + "'" + bool + "',\n" + "url: " + "'" + url + "'" + "\n};", err => {
    if (err) throw err;

    var intro = require(path.join(__dirname, "..", "customsounds/", name, ".js"));

    client.intro.set(intro.id, intro)
    });
}