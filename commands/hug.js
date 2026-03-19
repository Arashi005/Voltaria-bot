module.exports = {
    name: 'hug',
    description: 'Hug someone!',
    async execute(client, message, args) {
        const gifs = [
            'https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif',
            'https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif',
            'https://media.giphy.com/media/wnsgren9NtITS/giphy.gif',
            'https://i.pinimg.com/originals/23/9f/65/239f65e82c912c3e312e7a143f07c5d3.gif',
            'https://media.tenor.com/images/2df217a1e6cd1c8f10f09b5a7f7bdb6d/tenor.gif'
        ];

        const target = args[0] || 'everyone';
        const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

        await client.sendMessage(
            message.chatId,
            { image: { url: randomGif }, caption: `🤗 ${message.senderName} hugs ${target}!` }
        );
    }
};