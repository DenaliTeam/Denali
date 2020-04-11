module.exports = (client, guild, user) => {
    client.net.ensure('bans-' + user.id, {
        'name':'',
        'guilds':'',
        'reasons':''
    })

    var guilds = client.net.get('bans-' + user.id, 'guilds')
    client.net.set('bans-' + user.id, guilds + guild.id + ', ', 'guilds')
    client.net.set('bans-' + user.id, user.tag, 'name')


}