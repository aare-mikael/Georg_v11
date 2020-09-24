var path = require("path")
const fs = require("fs")
const userPath = (path.join(__dirname, "..", "customsounds/"))

module.exports = function intro(client, message, name, url, bool){

    fs.writeFile(userPath + name, "module.exports = {\n" + "name: " + "'" + name.tag + "'" + ",\n" + "id: " + "'" + message.author.id + "',\n" + "toggled: " + "'" + bool + "',\n" + "url: " + "'" + url + "'" + "\n};");

    module.exports = {
        name: 'Trash.#8640',
        id: '227520275132973056',
        toggled: 'true',
        url: 'https://www.myinstants.com/media/sounds/so-long-gayboys.mp3'
    }; 

    if (err) throw err;

    var intro = require(path.join(usersPath, name, ".js"));

    client.introSound.set(intro.id, intro)

}