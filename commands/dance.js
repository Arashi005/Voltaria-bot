module.exports = {
    name: 'dance',
    description: 'Dance command!',
    async execute(client, message, args) {
        const gifs = [
            'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif',
            'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif',
            'https://media.tenor.com/images/7f5e52a7e3e5f0ecb8f9e734c7c7e377/tenor.gif',
            'https://i.pinimg.com/originals/5e/7b/15/5e7b1547f1e4c6a2b5f84d07f0f98192.gif',
            'https://media.giphy.com/media/12NUbkX6p4xOO4/giphy.gif'
        ];

        const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

        await client.sendMessage(
            message.chatId,
            { image: { url: randomGif }, caption: `💃 ${message.senderName} is dancing!` }
        );
    }
};