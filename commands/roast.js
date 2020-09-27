var insults = [
    "du får Sid til å sjå ut som han e på samme nivå som Stephen Hawking",
    "du e den personen som trekke ut visdomstenner for å lage plass til fleire kuka",
    "du e den personen som memorisera den seksuelle lavalderen i alle land øst for Afghanistan",
    "å måtte høre på deg snakke e som å drikke appelsinjuice og pusse tenna rett etterpå",
    "hjerna di e så liten at den sprette rundt inni skallen din på samme måte som en DVD-screensaver",
    "du e den personen som går på byn med 2 kondoma, og kjeme heim med 5",
    "du ser ut som du ikkje kunne talt til 11 uten å ta av deg sokkane, men når du gjør det kan du telle til 23",
    "du ser ut som den personen som jobba som lærer på barneskulen bare for å sjekke opp single mødre",
    "den dagen eg skal ha meg unga, skal eg spørre foreldra dine ka posisjon dei knulla i før dei fikk deg, så eg kan unngå den",
    "det e over 300 000 ord i det norske språket, og likevel kunne eg aldri satt sammen nok ord til å forklare kor mykje eg har lyst til å slå deg med et balltre",
    "du e akkurat som en avløpspumpe, du drar bare fram gammal drit",
    "du kunne ikkje organisert en sultestreik på et moteshow",
    "hvis du va trofèet for seieren i løpet mitt, ville eg gått baklengs",
    "du ser ut som første halvparten av en reklame for antidepresjons-piller",
    "du får honey boo boo til å sjå bra ut",
    "du skuffa foreldrene dine bare ved å eksistere",
    "du e den personen klassa på ungdomsskulen tenkte mest sannsynlig kom til å mislykkes i livet, og dei fikk rett",
    "et klesmerke ville betalt deg for å ikkje bruke kledene deira",
    "du får mora di til å sjå slank ut",
    "du e den personen foreldre bruka som et dårlig eksempel for ungane sine",
    "du e den personen som får damer til å vere redd for å dra på byn, i frykt for å møte deg",
    "eg hadde ikkje rørt deg med en fjernstyrt spiker engang",
    "faren din burde heilt ærlig runka deg utfor et stup",
    ]

module.exports = {
    name: 'roast',
    description: "Skjønna du virkelig ikkje ka dinna gjør?",
    category: "Text",
    execute(message, args) {
    // Returnerer tidlig om meldingen er sendt av en bot;
    if (message.author.bot) return;

    //Endrer alle meldinger til lowercase for å hindre case-sensitive commands;
    const msg = message.content.toLowerCase();

    // Finner ut ken som er nevnt i meldinga og tagger dei;
    var bruker = args[0];

    var antallInsults = insults.length;
    var insult = Math.floor(Math.random() * antallInsults - 1) + 1;
    var spy =  insults[insult];

      // Kommentert ut enn så lenge;
//      message.channel.bulkDelete(1);
      
    // Spyr ut en tilfeldig insult fra insults[];      
      message.channel.send(bruker + ", " + spy);


    },
};