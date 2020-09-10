<<<<<<< HEAD
module.exports = {
    name: 'delete',
    description: "Deletes messages",
execute(message, args) {

    const amount = args.join(' ');

//  Sjekker om det er meg, Trash, som skriver meldingen, og hvis ikkje går den videre til å sjekke tillatelser;  
    var trashID = '227520275132973056';
    if ( message.member != trashID) {
        //  Sjekker om den som ber om å slette meldinger har lov eller ikkje, og printer en feilkode om dei ikkje har lov;  
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
        message.channel.send("You don't have the necessary permissions in this guild, sorry!");
        return;
        }
    }

    var postyID = '132193704860450817';
    var team10ID = '612947002853949458'

    if (message.member == postyID && message.guild.id == team10ID) {
        message.reply("ikkje prøv deg posty");
        return;
    }

    if (message.member != trashID) {
        
        if (isNaN(amount) == true) {
            message.channel.send("Give me a number after **delete** so I know how many messages to delete!");
            return;
        } 
        else if (!amount) {
            message.channel.send("Give me a number after **delete** so I know how many messages to delete!");
            return;
        }
        else if (amount < 0) {
            return;
        }
        else if (amount == 0) {
            return;
        }
        else if (amount > 15) {
            message.channel.send("To limit user errors, I can't delete more than 15 messages at a time!");
            return;
        } 
        else if (amount < 2) {
            return;
        } 
        else if (amount > 1 && amount < 11) {
            message.channel.bulkDelete(amount).catch(err => {
                console.error(err);
                message.channel.send('There was an error trying to delete messages in this channel, some of the ones I tried to delete may have been over 2 weeks old!');
                })
            } 
        }
    else if (message.member == trashID) {
        
        if (amount > 1 && amount < 100) {
            message.channel.bulkDelete(amount).catch(err => {
                console.error(err);
                message.channel.send('There was an error trying to delete messages in this channel, some of the ones I tried to delete may have been over 2 weeks old!');
                })
            }
        }
    }
=======
module.exports = {
    name: 'delete',
    description: "Deletes messages",
    category: "Text",
execute(message, args) {

    const amount = args.join(' ');

//  Sjekker om det er meg, Trash, som skriver meldingen, og hvis ikkje går den videre til å sjekke tillatelser;  
    var trashID = '227520275132973056';
    if ( message.member != trashID) {
        //  Sjekker om den som ber om å slette meldinger har lov eller ikkje, og printer en feilkode om dei ikkje har lov;  
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
        message.channel.send("You don't have the necessary permissions in this guild, sorry!");
        return;
        }
    }

    var postyID = '132193704860450817';
    var team10ID = '612947002853949458'

    if (message.member == postyID && message.guild.id == team10ID) {
        message.reply("ikkje prøv deg posty");
        return;
    }

    if (message.member != trashID) {
        
        if (isNaN(amount) == true) {
            message.channel.send("Give me a number after **delete** so I know how many messages to delete!");
            return;
        } 
        else if (!amount) {
            message.channel.send("Give me a number after **delete** so I know how many messages to delete!");
            return;
        }
        else if (amount < 0) {
            return;
        }
        else if (amount == 0) {
            return;
        }
        else if (amount > 15) {
            message.channel.send("To limit user errors, I can't delete more than 15 messages at a time!");
            return;
        } 
        else if (amount < 2) {
            return;
        } 
        else if (amount > 1 && amount < 11) {
            message.channel.bulkDelete(amount).catch(err => {
                console.error(err);
                message.channel.send('There was an error trying to delete messages in this channel, some of the ones I tried to delete may have been over 2 weeks old!');
                })
            } 
        }
    else if (message.member == trashID) {
        
        if (amount > 1 && amount < 100) {
            message.channel.bulkDelete(amount).catch(err => {
                console.error(err);
                message.channel.send('There was an error trying to delete messages in this channel, some of the ones I tried to delete may have been over 2 weeks old!');
                })
            }
        }
    }
>>>>>>> 162081be50e93303004d213456a09e9250e98d2f
}