module.exports = function play(voiceChannel, name, client){
 
    voiceChannel.join().then(connection => {
        const link = client.intro.get(name).url;
        const dispatcher = connection.play(link, { volume: vol } );
        dispatcher.on('finish', () => voiceChannel.leave());
    }).catch(err => console.log(err));
}