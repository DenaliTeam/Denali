exports.run = (client, message, args) => {
    var ch = message.channel
    switch(args[0]){
        case '1':
            var helpmenu = {
                embed: {
                    title: 'Help Menu, Page 1',
                    fields:[
                        {
                            name: '-setup',
                            value: 'Sets up the bot for use on this server'
                        },
                        {
                            name: '-ban [member] (reason)',
                            value: 'Bans a user and warns other servers in your team of them'
                        },
                        {
                            name: '-help (page)',
                            value: 'Bans a user and warns other servers in your team of them'
                        },
                        {
                            name: '**[X]** -createteam',
                            value: 'Starts the team creation setup\n**Not yet implimented**'
                        }
                    ]
                }
            }
            break;
        default:
            var helpmenu = {
                embed: {
                    title: 'Help Menu, Page 1',
                    fields:[
                        {
                            name: '-setup',
                            value: 'Sets up the bot for use on this server'
                        },
                        {
                            name: '-ban [member] (reason)',
                            value: 'Bans a user and warns other servers in your team of them'
                        },
                        {
                            name: '-help (page)',
                            value: 'Bans a user and warns other servers in your team of them'
                        },
                        {
                            name: '**[X]** -createteam',
                            value: 'Starts the team creation setup\n**Not yet implimented**'
                        }
                    ]
                }
            }
    }
    ch.send(helpmenu)
}