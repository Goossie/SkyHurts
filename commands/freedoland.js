const Discord = require('discord.js');

module.exports = {
    name: 'freedoland',
    description: "this is a freedoland command!",
    execute(message, args){
        const exampleEmbed = new Discord.MessageEmbed()
            .setTitle ("FreeDoLand!!")
            .setDescription ("It's a minecraft server with the owners: !Max and Goossie!!")
            .setColor ("#ff0000")
            .addFields(
                {name: 'Discord link:', value: 'https://discord.gg/wBT47YN', inline: false},
                {name: 'Minecraft IP:', value: 'freedoland.minehut.gg', inline: false}
            );

        message.channel.send(exampleEmbed);
            
    }
}