module.exports = {
    name: 'shrug',
    description: 'Shrug.',
    async execute(client, message) {
        await client.sendMessage(message.chatId, `🤷 ${message.senderName} shrugs...`);
    }
};