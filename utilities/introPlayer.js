module.exports = function play(voiceChannel, link, client){

    console.log(voiceChannel);
    console.log(typeof voiceChannel);

    if(voiceChannel == undefined || voiceChannel == null) return;

    console.log(voiceChannel);
    console.log(typeof voiceChannel);

    let vol = 0.5;
 
    voiceChannel.join().then(connection => {
        const dispatcher = connection.play(link, { volume: vol } );
        dispatcher.on('finish', () => voiceChannel.leave());
    }).catch(err => console.log(err));
}