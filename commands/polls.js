module.exports = {
    name: 'poll',
    description: 'Create a poll with multiple options.',
    run: async (client, message, args) => {
        if (!args.length) return client.sendMessage(message.chatId, '❌ Usage: .poll Question | Option1 | Option2 | Option3', { quoted: message });
        const [question, ...options] = args.join(' ').split('|').map(x => x.trim());
        if (options.length < 2) return client.sendMessage(message.chatId, '❌ Add at least 2 options.', { quoted: message });
        const pollMsg = `📊 *${question}*\n\n` + options.map((opt, i) => `\`${i+1}.\` ${opt}`).join('\n');
        await client.sendMessage(message.chatId, pollMsg, { quoted: message });
    }
};