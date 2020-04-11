require('dotenv').config();

Array.prototype.last = function() {
  return this[this.length - 1]
}

var Discord = require('discord.js')
const db = require("enmap")
client = new Discord.Client()
apis = new db({name:"apis"})
client.net = new db({name:"net"})
const Canvas = require("canvas")
const fs = require('fs')

client.on('ready', () =>{
  console.log(`Logged on as ${client.user.tag}`)
  client.user.setActivity(`out for trolls. | try -help | v0.1.3`, {type: 'WATCHING'})
})


fs.readdir('./events/', (err, files) => {
  if(err) return console.log(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventname = file.split('.')[0]
    client.on(eventname, event.bind(null, client))
  })
})

client.commands = new db()

fs.readdir('./cmd/', (err, files) => {
  if(err) return console.log(err);
  files.forEach(file => {
    if(!file.endsWith('.js')) return;
    const props = require(`./cmd/${file}`);
    let cmdname = file.split('.')[0]
    console.log(`Attempting to load ${cmdname}`)
    client.commands.set(cmdname, props)
  })
})



client.login(process.env.TOKEN);
