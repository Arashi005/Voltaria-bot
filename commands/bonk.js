module.exports = {
    name: 'bonk',
    description: 'Bonk someone!',
    async execute(client, message, args) {
        const gifs = [
            'https://media.giphy.com/media/qs4ll1FSxKnNHeSmom/giphy.gif',
            'https://media.tenor.com/images/7db4f3f44c95a4a7b2a8d9c9c7f9c8a1/tenor.gif'
        ];

        const target = args[0] || 'someone';
        const gif = gifs[Math.floor(Math.random() * gifs.length)];

        await client.sendMessage(message.chatId, {
            image: { url: gif },
            caption: `🔨 ${message.senderName} bonks ${target}!`
        });
    }
};