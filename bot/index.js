// Discord bot that listens for webhook and opens ticket
const { Client, GatewayIntentBits, ChannelType, PermissionsBitField } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
  console.log(`✅ Bot logged in as ${client.user.tag}`);
});

client.createTicket = async ({ username, userId, product, method, proof }) => {
  try {
    const guild = await client.guilds.fetch(process.env.GUILD_ID);
    const member = await guild.members.fetch(userId);

    const channel = await guild.channels.create({
      name: `ticket-${username.split("#")[0]}`,
      type: ChannelType.GuildText,
      parent: process.env.TICKET_CATEGORY_ID,
      permissionOverwrites: [
        {
          id: guild.roles.everyone,
          deny: [PermissionsBitField.Flags.ViewChannel]
        },
        {
          id: userId,
          allow: [
            PermissionsBitField.Flags.ViewChannel,
            PermissionsBitField.Flags.SendMessages,
            PermissionsBitField.Flags.ReadMessageHistory
          ]
        },
        {
          id: process.env.STAFF_ROLE_ID,
          allow: [
            PermissionsBitField.Flags.ViewChannel,
            PermissionsBitField.Flags.SendMessages
          ]
        }
      ]
    });

    await channel.send({
      content: `<@${userId}>`,
      embeds: [{
        title: "New Order Received",
        color: 0xff4d4d,
        fields: [
          { name: "Buyer", value: username },
          { name: "Product", value: product },
          { name: "Payment Method", value: method },
          { name: "Proof", value: proof || "Not Provided" }
        ],
        timestamp: new Date().toISOString(),
        footer: { text: "Auto Ticket | GrandX $tore" }
      }]
    });

    console.log(`✅ Ticket created for ${username}`);
  } catch (error) {
    console.error("❌ Failed to create ticket:", error);
  }
};

client.login(process.env.DISCORD_TOKEN);
module.exports = client;
