module.exports = {
    name: 'tickle',
    description: 'Tickle someone!',
    async execute(client, message, args) {
        const gifs = [
            'https://media.giphy.com/media/3o6ZtpxSZbQRRnwCKQ/giphy.gif',
            'https://media.tenor.com/images/8a6b5d7c6c9d4c3b4f3b4d3a2f5c6d7e/tenor.gif'
        ];

        const target = args[0] || 'someone';
        const gif = gifs[Math.floor(Math.random() * gifs.length)];

        await client.sendMessage(message.chatId, {
            image: { url: gif },
            caption: `😆 ${message.senderName} tickles ${target}!`
        });
    }
};