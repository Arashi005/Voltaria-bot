module.exports = {
    name: 'hi',
    description: 'Greet the user with a Voltaria-style message.',
    alias: ['hello', 'hey'],
    run: async (client, message, args) => {
        const user = message.senderName || 'there';
        client.sendMessage(message.chatId, 
            `⚡ Hello ${user}! I am Voltaria ⚡\nType .help to see what I can do.`, 
            { quoted: message }
        );
    }
};