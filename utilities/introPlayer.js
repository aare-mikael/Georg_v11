module.exports = function play(newState, link, client){

    console.log(newState);
    console.log(typeof newState);

//    if(voiceChannel == undefined || voiceChannel == null) return;

    var voiceChannel = newState.channel;

    let vol = 0.5;
 
    voiceChannel.join().then(connection => {
        const dispatcher = connection.play(link, { volume: vol } );
        dispatcher.on('finish', () => voiceChannel.leave());
    }).catch(err => console.log(err));
}