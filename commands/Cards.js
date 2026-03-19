// ./commands/cards.js
module.exports = {
    name: 'cards',
    description: 'Card management commands',
    execute(msg, args) {
        const reply = `
🎴 *CARDS* 🎴
- .cards [on/off]
- .card [index]
- .ci [name] [tier]
- .cardinfo [name] [tier]
- .si [name]
- .ss [series_name]
- .slb [series_name]
- .clb
- .deck
- .col
- .cardshop
- .sellc [index] [price]
- .rc [index]
- .vs
- .claim [id]
- .sc [@] [index] [price]
- .tc [@] [index] [index]
- .lendcard / lc
- .auction
- .submit [index] [price]
- .myauc
- .remauc [index]
- .listauc
- .stardust
- .anticamp
        `;
        msg.reply(reply);
    }
};