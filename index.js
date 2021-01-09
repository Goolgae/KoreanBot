const Discord = require("discord.js");
const client = new Discord.Client();

require('dotenv').config()


client.on("ready", () => {
    console.log(`${client.user.tag} 봇에 로그인 하였습니다!`);
});
client.on("message", msg => {
    if (msg.content === "핑") {
        msg.reply("퐁!");
    }
});

client.login(process.env.TOKEN);