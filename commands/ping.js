module.exports = {
    name: 'ping',
    description: 'Check bot latency.',
    run: async (client, message, args) => {
        const start = Date.now();
        const sentMsg = await client.sendMessage(message.chatId, '🏓 Pinging...', { quoted: message });
        const latency = Date.now() - start;
        client.sendMessage(message.chatId, `🏓 Pong! Latency: ${latency}ms`, { quoted: sentMsg });
    }
};