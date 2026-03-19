module.exports = {
    name: 'pat',
    description: 'Pat someone!',
    async execute(client, message, args) {
        const gifs = [
            'https://media.giphy.com/media/ARSp9T7wwxNcs/giphy.gif',
            'https://media.tenor.com/images/7c9c2d8b6c6f0c5f02c1b9a6fbc1c7b5/tenor.gif',
            'https://i.pinimg.com/originals/2e/4c/2b/2e4c2b3f92ff7e8b6cfa9a316bed36fb.gif'
        ];

        const target = args[0] || 'everyone';
        const gif = gifs[Math.floor(Math.random() * gifs.length)];

        await client.sendMessage(message.chatId, {
            image: { url: gif },
            caption: `🫳 ${message.senderName} pats ${target}!`
        });
    }
};