module.exports = function play(voiceChannel, name, client){
 
    voiceChannel.join().then(connection => {
        const link = intro.get(name).url;
        console.log(link);
        const dispatcher = connection.play(link, { volume: vol } );
        dispatcher.on('finish', () => voiceChannel.leave());
    }).catch(err => console.log(err));
}