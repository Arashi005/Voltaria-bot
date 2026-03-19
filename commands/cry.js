module.exports = {
    name: 'sad',
    description: 'Express sadness.',
    async execute(client, message) {
        const gifs = [
            'https://media.giphy.com/media/ROF8OQvDmxytW/giphy.gif',
            'https://media.tenor.com/images/8f9c3b7d9f5f8e4d5a4d9e7b3a4b7c2e/tenor.gif'
        ];

        const gif = gifs[Math.floor(Math.random() * gifs.length)];

        await client.sendMessage(message.chatId, {
            image: { url: gif },
            caption: `😔 ${message.senderName} is feeling sad...`
        });
    }
};