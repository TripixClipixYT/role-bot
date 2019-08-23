const Discord = require('discord.js');
const token = 'process.env.token'

var BLUE_ROLE = '580767519489654784';
var RED_ROLE = '580767602415239170';
var GREEN_ROLE = '580767635298582530';
var BLACK_ROLE = '580780121280217109';
// var blackRole = member.roles.find("name", "Black");

const bot = new Discord.Client();

bot.on('message', (message) => {
    const parts = message.content.split(' ');

    if (parts[0] == '!role') {

        if(parts[1] == 'red') {
            message.member.addRole(RED_ROLE);
            message.author.send(`Role in ${message.guild} has been given!`)
        }
        else if(parts[1] == 'green') {
            message.member.addRole(GREEN_ROLE);
            message.author.send(`Role in ${message.guild} has been given!`)
        }
        else if(parts[1] == 'blue') {
            message.member.addRole(BLUE_ROLE);
            message.author.send(`Role in ${message.guild} has been given!`)
        }  
        else if(parts[1] == 'black') {
            message.member.addRole(BLACK_ROLE);
            message.author.send(`Role in ${message.guild} has been given!`)
        }
           /* if(parts[2] == '!remove'){
              if(parts[3] == 'red'){
                   message.guild.member.removeRole(RED_ROLE);
              }
              if(parts[3] == 'blue'){
                message.member.removeRole(BLUE_ROLE);
           }
           if(parts[3] == 'black'){
            message.member.removeRole(BLACK_ROLE).member.roles.find(BLACK_ROLE);
       }
       if(parts[3] == 'green'){
        message.member.removeRole(GREEN_ROLE)
   }
   // console.log(parts)
           } */
    }
    // Status
    let statuses =['!role <color in server> | Site Coming Soon', `${bot.users.size} Users and ${bot.guilds.size} Servers`]

    setInterval(function(){
      let status = statuses[Math.floor(Math.random()* statuses.length)];
      bot.user.setActivity(status, {type: 'Playing'});
    }, 5000)

});
console.log("Role Bot is online")
bot.login(process.env.CLIENT_TOKEN);
