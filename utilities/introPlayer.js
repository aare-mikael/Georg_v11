module.exports = function play(newState, link, client){

    var voiceChannel = newState.channel;

    if(voiceChannel == undefined || voiceChannel == null) return;

    let vol = 0.5;
 
    voiceChannel.join().then(connection => {
        const dispatcher = connection.play(link, { volume: vol } );
        dispatcher.on('finish', () => voiceChannel.leave());
    }).catch(err => console.log(err));
}