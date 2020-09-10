<<<<<<< HEAD
module.exports = {
    name: 'restartbot',
    description: "Restarts me, but only my maker can use this!",
    execute(message, args) {
      
      var trashID = '227520275132973056'

    if (message.author != '227520275132973056') {
      message.channel.send('Sorry, only my maker can use this one!');
      return;
    }
      
      message.channel.send("You can now honestly say you've tried 'turning it off and on again', unlike everyone else I've ever asked").then(() => { 

      process.exit(1);
      });
      
    },
=======
module.exports = {
    name: 'restartbot',
    description: "Restarts me, but only my maker can use this!",
    category: "Private",
    execute(message, args) {
      
      var trashID = '227520275132973056'

    if (message.author != '227520275132973056') {
      message.channel.send('Sorry, only my maker can use this one!');
      return;
    }
      
      message.channel.send("You can now honestly say you've tried 'turning it off and on again', unlike everyone else I've ever asked").then(() => { 

      process.exit(1);
      });
      
    },
>>>>>>> 162081be50e93303004d213456a09e9250e98d2f
};