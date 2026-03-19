module.exports = {
    name: 'time',
    description: 'Show current server time.',
    run: async (client, message, args) => {
        const now = new Date();
        const timeStr = now.toLocaleString('en-US', { timeZone: 'Africa/Nairobi', hour12: true });
        client.sendMessage(message.chatId, `⏰ Current Voltaria Time: ${timeStr}`, { quoted: message });
    }
};