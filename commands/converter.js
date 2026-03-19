// ./commands/converter.js
module.exports = {
    name: 'converter',
    description: 'Conversion commands',
    execute(msg, args) {
        const reply = `
👤 *CONVERTER* 👤
- .sticker / .s
- .take
- .toimg
- .tovid
- .rotate
        `;
        msg.reply(reply);
    }
};