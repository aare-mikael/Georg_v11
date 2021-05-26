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
    "https://medal.tv/clips/46450492/d1337wLepf5K", // Da eg sto bak lemmi i 30 sek, minst
    "https://medal.tv/clips/46450787/d1337f8UeCNV", // denne er pikaboo fra 5v5 inhouse
    "https://medal.tv/clips/49602180/d1337BY9AsVD", // Erik i Telialigaen, p90 spray and pray
    "https://medal.tv/clips/49801615/d13371cbpv5U", // Jan-Erik 1v5, tok 3 før han døde
    "https://medal.tv/clips/49804811/d1337OQwm0dF", // Jan-Erik 1v4, tok 3 før han døde igjen
    "https://medal.tv/clips/51876015/ad1337VdxgWpfo", // Jan-Erik sneaky beaky, kniv i bank
    "https://medal.tv/clips/52022206/ad1337JoAE47KE", // Jan-Erik 2v3 solo A site hold Inferno
    "https://medal.tv/clips/52022226/ad1337ds1FtNpa", // Ranks fra matchen over
    "https://medal.tv/clips/52145466/ad13372r7KQYZS", // Jan-Erik 4k med awp på cache
    "https://medal.tv/clips/52145694/ad13372yDD3nLY", // Jan-Erik spideysense tingling
    "https://medal.tv/clips/52628508/d1337sj0wK2m", // Erik kniva Kari
    "https://medal.tv/clips/52637898/d1337BWZZ5y2", // Erik spray and pray mp5 Vertigo
    "https://medal.tv/clips/52638084/d1337twl9SgU", // Jan-Erik tok en iBuyPower og throwa en tie
    ];

module.exports = {
    name: 'medal',
    description: "Gives a random medal-link from #skrytevideoer in **The Dilf's Noobhouse** for you to either laugh at or be impressed by, 90% chance of the former!",
    category: "Text",
    callback: async ({ message, args, text, client, prefix, instance, channel, interaction }) => {
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