module.exports = function play(message, args, voiceChannel, link, client){

    if(voiceChannel == undefined || voiceChannel == null) return;

    let vol = 0.5;
 
    voiceChannel.join().then(connection => {
        const dispatcher = connection.play(link, { volume: vol } );
        dispatcher.on('finish', () => voiceChannel.leave());
    }).catch(err => console.log(err));
}