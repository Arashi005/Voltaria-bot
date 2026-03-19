module.exports = {
    name: 'image',
    description: 'Send an image from a URL.',
    alias: ['img', 'pic'],
    run: async (client, message, args) => {
        if (!args[0]) return client.sendMessage(message.chatId, '❌ Please provide an image URL.', { quoted: message });
        try {
            await client.sendMessage(message.chatId, { image: { url: args[0] }, caption: '✨ Here’s your image!' }, { quoted: message });
        } catch (err) {
            client.sendMessage(message.chatId, '⚠️ Failed to send image.', { quoted: message });
        }
    }
};