exports.run = (client, message, args) => {
    var g = message.guild
    client.net.ensure(message.guild.id, {
        'alertchannel':'',
        'autosend': false,
        'prioritybound': 0
    })

    if(typeof client.net.get(g.id. args[0]) != 'undefined'){
        var prev = client.net.get(g.id. args[0])
        var n;
        if (typeof args[1] == undefined){message.channel.send({embed:{title:`Value of ${args[0]}`, description: prev}})}
        if(typeof prev == 'boolean'){
            switch(args[1].toLowerCase()){
                case 'true':
                    var n = true
                break;
                case 'false':
                    var n = false
                break;
                default:
                    var n = true
            }
            client.net.set(g.id, n, args[0])
        } else if(typeof prev == 'string'){
            
        } else if(typeof prev == 'number'){

        }
    }
}