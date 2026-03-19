// ./commands/downloaders.js
module.exports = {
    name: 'downloaders',
    description: 'Downloader commands',
    execute(msg, args) {
        const reply = `
📲 *DOWNLOADERS* 📲
- .ig
- .ttk
- .yt
- .x
- .fb
- .play
        `;
        msg.reply(reply);
    }
};