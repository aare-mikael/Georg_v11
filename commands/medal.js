var videos = [
// Her skal medal-linkene
    "https://medal.tv/clips/43950779/d1337xyvLTRY",
    
    ]

module.exports = {
    name: 'medal',
    description: "Gives a random medal-link from #skrytevideoer in **The Dilf's Noobhouse** for you to either laugh at or be impressed by, 90% chance of the former!",
    category: "Text",
    execute(message, args) {
    // Returnerer tidlig om meldingen er sendt av en bot;
    if (message.author.bot) return;

    var antallVideos = videos.length;
    var videoNumber = Math.floor(Math.random() * antallVideos - 1) + 1;
    var video =  videos[videoNumber];
      
    // Spyr ut en tilfeldig insult fra insults[];      
      message.channel.send(video);
    },
};