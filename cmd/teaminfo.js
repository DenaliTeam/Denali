exports.run = (client, message, args) => {
    if(typeof client.net.get(message.guild.id, 'team') == 'undefined') return console.log('Error')
    var teamname = client.net.get(message.guild.id, 'team')
    var tname = client.net.get(teamname, 'name')
    var tdesc = client.net.get(teamname, 'description')
    var townerid = client.net.get(teamname, 'owner')
    var ticon = client.net.get(teamname, 'iconurl')
    var tmems = client.net.get(teamname, 'memberlist')
    var owner = client.users.get(townerid)
    var check = ''
    if(client.net.get(teamname, 'verified') == true) {var check = '<:verified:697566913324253194> '}
    switch(client.net.get(teamname, 'status')){
        case 'verified':
            check = '<:verified:697566913324253194> '
            break;
        case 'vip':
            check = '<:vip:697600176486875136> '
            break;
        default:
            check = ''
    }
    
    var list = ''
    var totalcount = 0
    tmems.split(", ").forEach(gid => {
        if(gid.length < 2) return
        var g = client.guilds.find('id', gid)
        list = list + g.name + ` **(${g.memberCount} members)**\n`
        totalcount = totalcount + g.memberCount
    });

    var info = {
        embed:{
            title:'Team Information',
            thumbnail:{
                url: ticon,
                width: 500,
                height: 500
            },
            fields: [
                {
                    name:'Name:',
                    value: `${check}` + tname
                },
                {
                    name:'Description: ',
                    value: tdesc
                },
                {
                    name: 'Owner: ',
                    value: owner.tag
                },
                {
                    name: "Servers:",
                    value: `${tmems.split(", ").length - 1}`,
                    inline: true
                },
                {
                    name: 'Total member count',
                    value: `${totalcount}`,
                    inline: true
                },
                {
                    name: "Members:",
                    value: `${list}`
                }
            ]
        }
    }
    message.channel.send(info)
}