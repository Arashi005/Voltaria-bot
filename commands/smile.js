module.exports = {
    name: 'smile',
    description: 'Smile!',
    async execute(client, message) {
        const gifs = [
            'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif',
            'https://media.tenor.com/images/5d7c4bfcac2f5b2e3f0f6b6a8e1f5f36/tenor.gif'
        ];

        const gif = gifs[Math.floor(Math.random() * gifs.length)];

        await client.sendMessage(message.chatId, {
            image: { url: gif },
            caption: `😊 ${message.senderName} is smiling!`
        });
    }
};