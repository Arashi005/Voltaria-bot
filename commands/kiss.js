module.exports = {
    name: 'kiss',
    description: 'Send a kiss to someone!',
    async execute(client, message, args) {
        const gifs = [
            'https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif',
            'https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif',
            'https://media.tenor.com/images/3df2f1fefc56b4e4221ed6fcf67d0f6c/tenor.gif',
            'https://i.pinimg.com/originals/fb/0e/95/fb0e95719e4f6fc26a233c5393c1965e.gif',
            'https://media.giphy.com/media/FqBTvSNjNzeZG/giphy.gif'
        ];

        const target = args[0] || 'everyone';
        const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

        await client.sendMessage(
            message.chatId,
            { image: { url: randomGif }, caption: `💋 ${message.senderName} kisses ${target}!` }
        );
    }
};