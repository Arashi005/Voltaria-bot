module.exports = {
    name: 'laugh',
    description: 'Laugh!',
    async execute(client, message) {
        const gifs = [
            'https://media.giphy.com/media/10dU7AN7xsi1I4/giphy.gif',
            'https://media.tenor.com/images/6d5f6f8a33b5c0b5dcd4c6f65c8dbe12/tenor.gif'
        ];

        const gif = gifs[Math.floor(Math.random() * gifs.length)];

        await client.sendMessage(message.chatId, {
            image: { url: gif },
            caption: `😂 ${message.senderName} is laughing!`
        });
    }
};