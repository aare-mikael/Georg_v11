var path = require("path")
const fs = require("fs")
const userPath = (path.join(__dirname, "..", "customsounds/"))

module.exports = function intro(client, message){
    
        var name = message.author.tag
        
        const intro = client.intro.get(message.author.tag)
        if(!intro) return
        delete require.cache[require.resolve(`./${intro}.js`)]

        fs.unlinkSync(userPath,`${name}.js`)
}


