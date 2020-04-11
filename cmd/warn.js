exports.run = (client, message, args) => {
    message.content.slice(6, message.content.length)
    client.guilds.forEach(g => {
        var ch = client.net.get(g.id, 'alertchannel')
        g.channels.get(ch).send({
            embed:{
                title:'Warning',
                description: ``
            }
        })
    });
}