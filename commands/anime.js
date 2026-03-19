// ./commands/anime.js
module.exports = {
    name: 'anime',
    description: 'Anime commands',
    execute(msg, args) {
        const reply = `
🎮 *ANIME SFW* 🎮
- .waifu
- .neko
- .maid
- .mori-calliope
- .raiden-shogun
- .oppai
- .selfies
- .uniform
- .kamisato-ayaka

🎮 *ANIME NSFW* 🎮
- .nsfw on/off
- .milf
- .ass
- .hentai
- .oral
- .ecchi
- .paizuri
- .ero
- .ehentai
- .nhentai
        `;
        msg.reply(reply);
    }
};