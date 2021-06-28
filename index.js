const Discord = require("discord.js");
require('discord-reply')
const client = new Discord.Client();

const TempChannels = require("discord-temp-channels");
const tempChannels = new TempChannels(client);



tempChannels.registerChannel("856506901263810595", { // setto il temp chanll 
    childCategory: "856506901263810593",
    childAutoDeleteIfEmpty: true,
    childMaxUsers: 5,
    childFormat: (member, count) => `#${count} | circo di ${member.user.username}'`
});






client.on('message', async message => {
    if (message.content.startsWith('!ruolo')) {



        const membro = message.mentions.members.first();
        let ruolobot = message.guild.roles.cache.find(role => role.id == '856507153346592778');
        membro.roles.add(ruolobot);

        message.lineReply('ruolo aggiunto'); // ruolo add
    }
    if (message.content.startsWith('!rimuovi')) {



        const membro = message.mentions.members.first();
        let ruolobot = message.guild.roles.cache.find(role => role.id == '856507153346592778');
        membro.roles.remove(ruolobot);

        message.lineReply('ruolo rimosso'); // ruolo remove
    }
    if (message.content.startsWith('!lista')) { // ruolo cont
        let roleID = "856507153346592778";
        let membro = message.guild.roles.cache.get(roleID).members;
        message.lineReply(`hai ${membro.size} membri con quel ruolo.`);
    }



});
client.login("token");
