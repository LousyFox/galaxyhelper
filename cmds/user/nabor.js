const Discord = module.require("discord.js");
const fs = require("fs");
exports.run = async (bot, message, args) => { 
    message.reply('**актуальные ссылки на набор администрации серверов:**\nDarkRP - https://svyanov.com/redirect?s=2\n`SCP-RP` - https://svyanov.com/redirect?s=7\n`MilitaryRP` - https://forms.gle/cdFXNYKZsht3Qrnx6\n\n`Набор на пост ивентера` - https://forms.gle/aMRvQW99LA8dUpFK9');
};
module.exports.command = {
    name: 'nabor',
    aliases: ["набор", "заявки", "наборбл"],
    description: "Показывает пинг, чо доебался?",
    usage: "usercommand", 
    category: "user",
    enabled: true
};  