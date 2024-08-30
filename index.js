const { Client, Collection } = require("discord.js");
const { Discord, Message, MessageActionRow, MessageButton, MessageEmbed, Formatters, MessageAttachment } = require('discord.js');
const fs = require('fs');
const db = require('quick.db')

const client = new Client({
    intents: 32767,
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.cooldowns = new Collection();

// // Initializing the project
fs.readdirSync('./handlers').forEach((handler) => {
    require(`./handlers/${handler}`)(client)
  });

client.login(process.env.token);
process.on("unhandledRejection", error => {
  return;
});
process.on("unhandledRejection", error => {
  return;
});
process.on("unhandledRejection", error => {
  return;
});