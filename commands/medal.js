var videos = [
    // Her skal medal-linkene;
    "https://medal.tv/clips/43950779/d1337xyvLTRY",
    "https://medal.tv/clips/43930190/d1337lRt4yTl",
    "https://medal.tv/clips/43668198/FMiQYVOwgzD2",
    "https://medal.tv/clips/26347213/briRZhKwdcgT",
    "https://medal.tv/clips/28280817/lG95X6ILtQ4Q",
    "https://medal.tv/clips/37539268/MVxZVCiBrpyB",
    "https://medal.tv/clips/41634880/d13376X6PlJ1",
    "https://medal.tv/clips/44580269/d1337eF6Gk4L",
    "https://medal.tv/clips/44580128/d1337yDbHTJf",
    "https://medal.tv/clips/44580684/d1337PKXceoM",
    "https://medal.tv/clips/44662156/d1337GCkYzKi",
    "https://medal.tv/clips/44834832/d1337kb7ry2A",
    "https://medal.tv/clips/44834832/d1337DLcmicc",
    "https://medal.tv/clips/44834859/d1337VZzwwfC",
    "https://medal.tv/clips/45186689/d13373m6Sr1R",
    "https://medal.tv/clips/36359599/d1337S3XO5Ku",
    "https://medal.tv/clips/45348679/d1337brP3FVC",
    "https://medal.tv/clips/45911244/d1337ahWniO3",
    "https://medal.tv/clips/46163782/d13378CIpPjq",
    "https://medal.tv/clips/46348453/d1337paAAvye",
    "https://medal.tv/clips/46450492/d1337wLepf5K",
    "https://medal.tv/clips/46450787/d1337f8UeCNV"
    ];

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

    var date = new Date();
    var hours = date.getHours() + 1; // because of the timezone :)
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var timeString = ("" + hours + ":" + minutes + ":" + seconds);

    console.log(message.author.username + " requested a video from #skrytevideoer at: " + timeString);
      
    // Spyr ut en tilfeldig insult fra insults[];      
      message.channel.send(video);
    },
};