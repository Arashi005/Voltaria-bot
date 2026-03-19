module.exports = {
    name: 'punch',
    description: 'Punch someone!',
    async execute(client, message, args) {
        const gifs = [
            'https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif',
            'https://media.tenor.com/images/4f6e3d91bde9c0f3c89d63c9a9f6f9d7/tenor.gif'
        ];

        const target = args[0] || 'someone';
        const gif = gifs[Math.floor(Math.random() * gifs.length)];

        await client.sendMessage(message.chatId, {
            image: { url: gif },
            caption: `🥊 ${message.senderName} punches ${target}!`
        });
    }
};