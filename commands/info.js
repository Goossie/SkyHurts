const Discord = require('discord.js');

module.exports = {
    name: 'info',
    description: "this is a info command!",
    execute(message, args){
        const exampleEmbed = new Discord.MessageEmbed()
            .setTitle ("SkyHurts")
            .setDescription ("It's a minecraft server with the owner: EaglesCanFly!!")
            .setColor ("#ff0000")
            .addFields(
                {name: 'Minecraft IP:', value: 'skuhurts.minehut.gg', inline: false},
                {name: 'Bot maker:', value: 'Goossie#5487', inline: false}
            );

        message.channel.send(exampleEmbed);
            
    }
}