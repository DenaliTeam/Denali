exports.run = (client, message, args) => {
    //checks for proper permissions

    if(!message.guild.members.get(message.author.id).hasPermission('BAN_MEMBERS', false, true, true)) return
        var target = message.mentions.members.first() || message.guild.members.get(args[0])
        if(typeof target == 'undefined') return
        try{
        if(typeof args[1] == 'undefined'){
            if(typeof client.net.get(message.guild.id, 'alertchannel') == 'undefined') {message.channel.send({embed:{title:'Error', description: 'The bot has not been set up yet, please run the `setup` command.'}}); return}
            target.ban('Banned using NetWarn')
            var ac = client.net.get(message.guild.id, 'logchannel')

            message.guild.channels.get(ac).send({
                embed:{
                    title:'Member banned',
                    footer:'This user has been warned on other servers.',
                    fields:[
                        {
                            name:'User:',
                            value:`<@${message.mentions.members.first().id}> (${message.mentions.members.first().user.tag} / ${message.mentions.members.first().id})`
                        },
                        {
                            name:'Reason:',
                            value:`None provided`
                        }
                    ],
                    thumbnail:{
                        url:message.mentions.members.first().user.avatarURL
                    },
                    color: 15997492
                }
            })

            message.channel.send({embed:{description:`*${message.mentions.users.first().tag} has been banned*`}})

            client.guilds.forEach(g => {
                var ch = client.net.get(g.id, 'alertchannel')
                g.channels.get(ch).send({
                    embed:{
                        title:'Warning',
                        description: `${message.mentions.members.user.first().username}#${message.mentions.members.first().user.discriminator} / ${message.mentions.members.first().id} has been banned from **${message.guild.name}**`
                    }
                })
            });
        } else {
            var ras = message.content.slice(5 + args[0].length + 1, message.content.length)
            if(typeof client.net.get(message.guild.id, 'alertchannel') == 'undefined') {message.channel.send({embed:{title:'Error', description: 'The bot has not been set up yet, please run the `setup` command.'}}); return}
            var ac = client.net.get(message.guild.id, 'logchannel')
            target.ban(ras)

            message.guild.channels.get(ac).send({
                embed:{
                    title:'Member banned',
                    footer:'This user has been warned on other servers.',
                    fields:[
                        {
                            name:'User:',
                            value:`<@${message.mentions.members.first().id}> (${message.mentions.members.first().user.tag} / ${message.mentions.members.first().id})`
                        },
                        {
                            name:'Reason:',
                            value:`${ras}`
                        }
                    ],
                    thumbnail:{
                        url:message.mentions.members.first().user.avatarURL
                    },
                    color: 15997492
                }
            })

            message.channel.send({embed:{description:`*${message.mentions.users.first().tag} has been banned* | ${ras}`}})

            client.guilds.forEach(g => {
                var ch = client.net.get(g.id, 'alertchannel')
                g.channels.get(ch).send({
                    embed:{
                        title:'Warning',
                        description: `${message.mentions.members.first().user.username}#${message.mentions.members.first().user.discriminator} / ${message.mentions.members.first().id} has been banned from **${message.guild.name}** with reason:\n` + '```' + ras + '```'
                    }
                })
            });
        }
    } catch(e){
        console.log(e)
    }
        
        
}