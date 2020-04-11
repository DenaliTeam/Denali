exports.run = (client, message, args) => {
if(message.author.id != '298295889720770563') return
client.net.ensure('hqGlr', {
    'memberlist':'',
    'name': 'smpteam',
    'iconurl':'https://cdn.discordapp.com/attachments/696509179145486456/697558979169091665/0c8.png',
    'description':'None provided',
    'owner':'298295889720770563'
})
client.net.set('hqGlr', '', 'memberlist')
client.guilds.forEach(g => {
    var members = client.net.get('hqGlr', 'memberlist')
    var newlist = members + g.id +', '
    client.net.set('hqGlr', newlist, 'memberlist')
    client.net.set(g.id, 'hqGlr', 'team')
    client.net.set('hqGlr', 'verified', 'status')
});
}