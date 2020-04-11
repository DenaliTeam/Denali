exports.run = (client, message, args) => {
    var list = ''
    var u = message.mentions.users.first() || args[0]
        if(typeof u == 'undefined') return
    
       var bans = client.net.get(`bans-${u.id || args[0]}`, 'guilds').split(', ')
       var name = client.net.get(`bans-${u.id || args[0]}`, 'name')
        bans.forEach(b => {
            if(b.length < 2) return
            g = client.guilds.get(b)
            list = list + `**${g.name}**\n`
        });
    
    if(list.length < 1) return
    message.channel.send({
        embed:{
            title: `${name}'s bans`,
            description: list
        }
    })
}