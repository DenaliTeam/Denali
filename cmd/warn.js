exports.run = (client, message, args) => {
    var warning = message.content.slice(6, message.content.length)
    client.guilds.forEach(g => {
        var ch = client.net.get(g.id, 'alertchannel')
        g.channels.get(ch).send({
            embed:{
                title:'Warning:',
                description: '```' + warning + '```'
            },
            'footer':{
                'text': `From ${message.guild.name}`,
                'iconURL': message.guild.iconURL
            }
        })
    });
}