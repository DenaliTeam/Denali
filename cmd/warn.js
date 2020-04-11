exports.run = (client, message, args) => {
    if(!message.guild.members.get(message.author.id).hasPermission('BAN_MEMBERS', false, true, true)) return
    var warning = message.content.slice(6, message.content.length)
    client.guilds.forEach(g => {
        var ch = client.net.get(g.id, 'alertchannel')
        g.channels.get(ch).send({
            embed:{
                title:'Warning:',
                description: '```' + warning + '```'
            },
            footer:{
                'text': `Warning from ${message.guild.name}`,
                'icon_url': message.guild.iconURL
            }
        })
    });
}