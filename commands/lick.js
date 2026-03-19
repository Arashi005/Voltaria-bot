module.exports = {
    name: 'lick',
    description: 'Lick someone (weird but ok 💀)',
    async execute(client, message, args) {
        const gifs = [
            'https://media.tenor.com/images/9c5c8d7c4d3c4a5b4d6c3f2c4d5c7b8a/tenor.gif'
        ];

        const target = args[0] || 'someone';
        const gif = gifs[Math.floor(Math.random() * gifs.length)];

        await client.sendMessage(message.chatId, {
            image: { url: gif },
            caption: `👅 ${message.senderName} licks ${target}...`
        });
    }
};