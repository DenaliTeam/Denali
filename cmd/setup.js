exports.run = (client, message, args) => {
    //Ensure guild settings
    client.net.ensure(message.guild.id, {'alertchannel':'', 'logchannel': ''})
    var step = 0

    //checks for proper permissions
    if(!message.guild.members.get(message.author.id).hasPermission('MANAGE_GUILD')) return

    //start setup
    message.channel.send({embed:{title:'Setup (1/2)', description:'Welcome to the setup!\n\nTo start simply tag the channel where you want alerts to be sent to.'}}).then((msg)=>{
        const filter = m => m.author = msg.author
        msg.channel.awaitMessages(filter, {max: 1, time: 60000, errors: ['time']}).then((col) =>{
            
            switch(step){
                case 0:
                    //checks if there is a mentioned channel
                    if(typeof col.first() == 'undefined' || typeof col.first().mentions.channels.first() == 'undefined'){message.channel.send({embed:{title:'Error!', description: 'No channel was mentioned, canceling setup'}}); return}
                    client.net.set(message.guild.id, col.first().mentions.channels.first().id, 'alertchannel')
                    //Success
                    console.log('Success')
                    col.first().delete()
                    msg.edit({embed:{title:'Setup (2/2)', description:`Next, where would you like moderation logs to go?`}})
                    step = 1
                    break;
            }
            
            
            
        }).then(() => {

        msg.channel.awaitMessages(filter, {max: 1, time: 60000, errors: ['time']}).then((col) =>{
            if(typeof col.first() == 'undefined' || typeof col.first().mentions.channels.first() == 'undefined'){message.channel.send({embed:{title:'Error!', description: 'No channel was mentioned, canceling setup'}}); return}
            client.net.set(message.guild.id, col.first().mentions.channels.first().id, 'logchannel')
            //Success
            console.log('Success')
            col.first().delete()
            msg.edit({embed:{title:'Setup', description:`Thanks for setting up the bot, it should be ready to go now!`}})
            
        }
        )
    })
    })
}