// ./commands/fun.js
module.exports = {
    name: 'fun',
    description: 'Fun and interaction commands',
    execute(msg, args) {
        const reply = `
👤 *INTERACTION* 👤
- .hug
- .kiss
- .slap
- .wave
- .pat
- .dance
- .sad
- .smile
- .laugh
- .lick
- .punch
- .jihad
- .crusade
- .kill
- .bonk
- .fuck
- .tickle
- .shrug
- .wank
- .kidnap

👤 *FUN* 👤
- .gay
- .lesbian
- .simp
- .ship
- .skill
- .duality
- .gen
- .pov
- .social
- .relation
- .pp
- .wouldyourather / .wyr
- .joke
- .truth
- .dare
- .td
- .uno
        `;
        msg.reply(reply);
    }
};