module.exports = {
    name: 'wave',
    description: 'Wave at someone!',
    async execute(client, message, args) {
        const gifs = [
            'https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif',
            'https://media.tenor.com/images/0d2f3c7a4a7a48ffb9a1d59f0e0e6c36/tenor.gif',
            'https://i.pinimg.com/originals/39/5b/f2/395bf2dbe2f6b2dbe893475c2c7781b6.gif'
        ];

        const target = args[0] || 'everyone';
        const gif = gifs[Math.floor(Math.random() * gifs.length)];

        await client.sendMessage(message.chatId, {
            image: { url: gif },
            caption: `👋 ${message.senderName} waves at ${target}!`
        });
    }
};