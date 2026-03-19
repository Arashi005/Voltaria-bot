module.exports = {
    name: 'slap',
    description: 'Slap someone!',
    async execute(client, message, args) {
        const gifs = [
            'https://media.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif',
            'https://media.tenor.com/images/fb74d5ebf9c7a03226a40bb748bd1920/tenor.gif',
            'https://media.giphy.com/media/RXGNsyRb1hDJm/giphy.gif',
            'https://i.pinimg.com/originals/4a/3c/fd/4a3cfd2a0cb70a0c5e9b133d0e2c4a91.gif',
            'https://media.giphy.com/media/jLeyZWgtwgr2U/giphy.gif'
        ];

        const target = args[0] || 'everyone';
        const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

        await client.sendMessage(
            message.chatId,
            { image: { url: randomGif }, caption: `👋 ${message.senderName} slaps ${target}!` }
        );
    }
};