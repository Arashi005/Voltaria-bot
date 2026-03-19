module.exports = {
    name: 'kill',
    description: 'Dramatically "kill" someone (fun command!)',
    async execute(client, message, args) {
        const gifs = [
            'https://media.giphy.com/media/3og0IPxMM0erATueVW/giphy.gif',
            'https://media.giphy.com/media/1zSZnB6Rb31JY/giphy.gif',
            'https://media.tenor.com/images/19d8b64f1e3ce6509f50461d4b0edacb/tenor.gif',
            'https://i.pinimg.com/originals/2f/6f/f2/2f6ff2f7b5d87cd2ec7873a8e91a7b7e.gif',
            'https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif'
        ];

        const target = args[0] || 'everyone';
        const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

        await client.sendMessage(
            message.chatId,
            { image: { url: randomGif }, caption: `☠️ ${message.senderName} "kills" ${target}!` }
        );
    }
};