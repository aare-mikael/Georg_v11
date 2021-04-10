var sounds = [
    'https://www.myinstants.com/media/sounds/pornhub-community-intro.mp3',
    'https://www.myinstants.com/media/sounds/what-are-you-doing-step-bro-tik-tok-meme.mp3',
    'https://www.myinstants.com/media/sounds/mlg-airhorn.mp3',
    'https://www.myinstants.com/media/sounds/discord-call-sound.mp3',
    'https://www.myinstants.com/media/sounds/roblox-death-sound_1.mp3',
    'https://www.myinstants.com/media/sounds/fbi-open-up-sfx.mp3',
]

    const lydplass = Math.random(sounds.length - 1);

    const lyd = sounds[lydplass];

module.exports = async function randomVoiceJoin(newState) {

    var voiceChannel = newState.channel;

    if (voiceChannel == (undefined || null) ) return;

    // Returnerer error-message om brukeren ikkje er i en voice-kanal
    if (!voiceChannel) {
        console.log('!voiceChannel??');
        return;
    }

    voiceChannel.join().then(connection => {
        const dispatcher = connection.play(lyd);
        dispatcher.on('finish', () => voiceChannel.leave());
    }).catch(err => console.log(err));
    
};