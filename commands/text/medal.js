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
    "https://medal.tv/clips/54823549/d1337qrdx8DS",
    "https://youtu.be/gQlvoEbI4Es?t=54",
    "https://medal.tv/clips/36703109/9BcdstFwn3li",
    "https://medal.tv/clips/36297223/d1337H8IIh6r",
    "https://medal.tv/clips/41546315/d1337qji2FgO",
    "https://medal.tv/clips/55744226/d1337Do14LsT",
    "https://medal.tv/clips/55929994/d1337NNBgDMk",
    "https://medal.tv/clips/55929961/d1337ugFMhI4",
    "https://medal.tv/clips/55930043/d1337gAssUjL",
    "https://medal.tv/clips/56015537/d13372I120BV",
    "https://medal.tv/clips/56026977/d1337YKTETY7",
    "https://medal.tv/clips/56027388/d13375YB4clm",
    "https://medal.tv/clips/56027609/d1337malMdEu",
    "https://medal.tv/clips/56215600/d1337fWeu9s9",
    "https://medal.tv/clips/56422831/d1337kZ2EQlX",
    "https://medal.tv/clips/56423129/d13379SmEyBS",
    "https://medal.tv/clips/56518616/d13371ZxqThM",
    "https://medal.tv/clips/56518560/d1337giuWyqN",
    "https://medal.tv/clips/56518822/d1337nCad8tJ",
    "https://medal.tv/clips/56519003/d1337kMhtUdL",
    "https://medal.tv/clips/56519165/d1337Omljqpq",
    "https://medal.tv/clips/56512984/d1337iliseic",
    "https://medal.tv/clips/56512780/d1337dwOU3Dw",
    "https://medal.tv/clips/56502561/d1337y5QRJf4",
    "https://medal.tv/clips/56502384/d1337GOWtIAY",
    "https://medal.tv/clips/56502008/d1337FUkqDD8",
    "https://medal.tv/clips/56501879/d1337nZMFzsX",
    "https://medal.tv/clips/56791700/d1337FjvAhtK",
    "https://medal.tv/clips/3QjOwzEMOpEuN/j1fmA0VJTNsH",
    "https://medal.tv/clips/3QjWWKKTMNp9V/5T59lh6FT12Q",
    "https://medal.tv/clips/3Qk4slHyda_gb/LCpMQtN9ZdEV",
    "https://medal.tv/clips/3QkaiIssGMIjO/n3nUz7wp8Gvr",
    "https://medal.tv/clips/56881707/d1337EUhUtLA",
    "https://medal.tv/clips/56885334/d1337sAixkDf",
    "https://medal.tv/clips/56891712/d1337MxMjrv5",
    "https://medal.tv/clips/56891438/d13377qjPGjh",
    "https://medal.tv/clips/56891556/d13371qwAIyj",
    "https://medal.tv/clips/56891626/d13372Z68ttu",
    "https://medal.tv/clips/56891552/d1337Ncm5KHR",
    "https://medal.tv/clips/56891845/d1337luZuO2a",
    "https://medal.tv/clips/56984738/d1337hjWb2Fc",
    "https://medal.tv/clips/56984938/d13372zXXHZi",
    "https://medal.tv/clips/56985054/d1337w8NF7s5",
    "https://medal.tv/clips/57089583/d1337C7ptOeQ",
    "https://medal.tv/clips/57089749/d1337DhmFBXz",
    "https://medal.tv/clips/57090100/d1337IRjVJAa",
    "https://medal.tv/clips/57169875/d1337r96dW14",
    "https://medal.tv/clips/57275855/d13370cAzuBw",
    "https://medal.tv/clips/57275924/d1337MLMUTpA",
    "https://medal.tv/clips/57276003/d1337SpKdG4B",
    "https://medal.tv/clips/57276117/d13372L5Ruk1",
    "https://medal.tv/clips/57276210/d1337LuV91az",
    "https://medal.tv/clips/57276278/d1337a4HObOL",
    "https://medal.tv/clips/57276469/d1337zKJVcaE",
    "https://medal.tv/clips/57342941/d1337uW00tNQ",
    "https://medal.tv/clips/57352529/d13378qAR2a5",
    "https://medal.tv/clips/57357346/d1337OXrHJBM",
    "https://medal.tv/clips/57357618/d1337Gdsp57s",
    "https://medal.tv/clips/57358271/d13378tRY0QZ",
    "https://medal.tv/clips/57358183/d1337W3QEKkK",
    "https://medal.tv/clips/57357485/d1337SSqKlhp",
    "https://medal.tv/clips/57358514/d13377bowaRO",
    "https://medal.tv/clips/57361655/d1337XD1Rvmi",
    "https://medal.tv/clips/57367104/d13378hMt1at",
    "https://medal.tv/clips/57369296/d1337Pdui35x",
    "https://medal.tv/clips/57369469/d1337aDEcVzS",
    "https://medal.tv/clips/57369527/d13376AdrJWJ",
    "https://medal.tv/clips/57369580/d1337xBSYtuO",
    "https://medal.tv/clips/57369937/d1337MN27jEa",
    "https://medal.tv/clips/57434716/d1337fVzRFOp",
    "https://medal.tv/clips/57455380/d1337vVjykx8",
    "https://medal.tv/clips/57455093/d1337IdzjSHF",
    "https://medal.tv/clips/57455531/d1337e2I7hUH",
    "https://medal.tv/clips/57455418/d13377pJTLVt",
    "https://medal.tv/clips/57455556/d1337KNcTLxC",
    "https://medal.tv/clips/57455717/d1337TtlFnO6",
    "https://medal.tv/clips/57456218/d1337LJ88xFF",
    "https://medal.tv/clips/57533982/d1337IMJiAkG",
    "https://medal.tv/clips/57538992/d1337z3eBqF2",
    "https://medal.tv/clips/57539062/d1337pQpjAy9",
    "https://medal.tv/clips/57548603/d1337QROPzAd",
    "https://medal.tv/clips/57548688/d1337ra5W3Fe",
    "https://medal.tv/clips/57628450/d1337faI1wYe",
    "https://medal.tv/clips/57628546/d1337IeyT9Wo",
    "https://medal.tv/clips/57628669/d1337JWX080c",
    "https://medal.tv/clips/57645581/d1337q9HE74Q",
    "https://medal.tv/clips/57650559/d1337KaSfhO5",
    "https://medal.tv/clips/57657188/d1337OAg721r",
    "https://medal.tv/clips/57657223/d1337D991Age",
    "https://medal.tv/clips/57657303/d1337PogFvGa",
    "https://medal.tv/clips/57657279/d1337rFloU8w",
    "https://medal.tv/clips/57754775/d1337miHk9jQ",
    "https://medal.tv/clips/57940272/d13375YaWyPT",
    "https://medal.tv/clips/57951790/d1337HGXuLXg",
    "https://medal.tv/clips/57951847/d1337sPyCY10",
    "https://medal.tv/clips/57951921/d13377hzxfpX",
    "https://medal.tv/clips/57952118/d1337mtiSlA9",
    "https://medal.tv/clips/3V9Ygalam-J3x/i05wFBGzNr",
    "https://medal.tv/clips/57954394/d1337x4279v8",
    "https://medal.tv/clips/58028495/d1337kVBoqtw",
    "https://medal.tv/clips/58028705/d133786meXHB",
    "https://medal.tv/clips/58028861/d1337r86hA7y",
    "https://medal.tv/clips/58028996/d1337V7rw4so",
    "https://medal.tv/clips/58214575/d1337xZpQHeV",
    "https://medal.tv/clips/58214591/d1337ZC8bfrG",
    "https://medal.tv/clips/58214708/d1337p4LdwYC",
    "https://medal.tv/clips/58214769/d1337G7cRcQd",
    "https://medal.tv/clips/58214834/d1337s7fd0PD",
    "https://medal.tv/clips/58215012/d1337UPz1IvE",
    "https://medal.tv/clips/58308660/d1337QgkksN5",
    "https://medal.tv/clips/3WEOeKneyh2QI/NwH3jAKaHOmO",
    "https://medal.tv/clips/58309495/d1337jDSl6mi",
    "https://medal.tv/clips/58346804/d1337xIhooPC",
    "https://medal.tv/clips/58346911/d13372jJ2aA4",
    "https://medal.tv/clips/58346945/d1337keT8PYC",
    "https://medal.tv/clips/58347056/d1337TzbWvFr",
    "https://medal.tv/clips/58347182/d1337fN8BMOp",
    "https://medal.tv/clips/58355656/d13372pNzWNs",
    "https://medal.tv/clips/3WR8LNpgaqJ4s/AsDKxdnKnuTm",
    "https://medal.tv/clips/58725903/d1337j1dKkbG",
    "https://medal.tv/clips/58572528/d1337aoupIiq",
    "https://medal.tv/clips/58572709/d1337hY5JAfz",
    "https://medal.tv/clips/58572770/d1337NASCq4S",
    "https://medal.tv/clips/58572889/d1337UM1OBR1",
    "https://medal.tv/clips/58658547/d1337WLGyxgz",
    "https://medal.tv/clips/58762268/d1337M0zoYA8",
    "https://medal.tv/clips/58859429/d13373LAdEHe",
    "https://medal.tv/clips/58859517/d1337mIQ39Pf",
    "https://medal.tv/clips/58958942/d13379m1xyN6",
    "https://medal.tv/clips/58959100/d13374w9xcLF",
    "https://medal.tv/clips/58959175/d1337MAqWc7C",
    "https://medal.tv/clips/58959196/d1337Ioi1puc",
    "https://medal.tv/clips/58959860/d1337FADxAGH",
    "https://medal.tv/clips/58959492/d1337aUT4VKr",
    "https://medal.tv/clips/58960017/d13372Jnbx3H",
    "https://medal.tv/clips/58960343/d1337if3vbV0",
    "https://medal.tv/clips/58966693/d1337DoxpMPe",
    "https://medal.tv/clips/58975719/d1337Qa0jVya",
    "https://medal.tv/clips/58976006/d1337gbmS3aN",
    "https://medal.tv/clips/58976191/d1337cbb89iV",
    "https://medal.tv/clips/58976290/d1337KBIVCIn",
    "https://medal.tv/clips/58976369/d1337ASSNnf1",
    "https://medal.tv/clips/59062907/d1337LwVOZ4T",
    "https://medal.tv/clips/59063107/d1337ynvcNDN",
    "https://medal.tv/clips/59063132/d1337sP1i2Bs",
    "https://medal.tv/clips/59063338/d1337LFnWp89",
    "https://medal.tv/clips/59063409/d1337h5UiHGC", // 23. juli
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