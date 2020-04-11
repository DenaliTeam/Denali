exports.run = (client, message, args) => {

if(message.author.id != '298295889720770563') return

var v = args[0]
var pn = args[1]
var notes = message.content.slice(11 + v.length + pn.length + 2).split(', ')
var f = []
notes.forEach(arg => {
    var p = arg.split(';')
    f.push({
        name:`> ` + p[0],
        value:p[1]
    })
});

var e = {
    embed:{
        title: `v${v}-${pn}`,
        fields: f
    }
}
message.channel.send(e)

}