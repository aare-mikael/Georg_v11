module.exports = {
  name: 'restartbot',
  description: "Restarts me, but only my maker can use this!",
  category: "Private",
  ownerOnly: true,
  callback: (message) => {
    message.channel.send("You can now honestly say you've tried 'turning it off and on again', unlike everyone else I've ever asked").then(() => { 
      process.exit(1);
    });
  },
}    
