// ./commands/admin.js
module.exports = {
    name: 'admin',
    description: 'Admin management commands',
    execute(msg, args) {
        const reply = `
⚙️ *ADMIN* ⚙️
- .kick
- .delete
- .antilink
- .antilink action
- .antism on/off
- .warn @mention [reason]
- .resetwarn
- .groupstats / .gs
- .welcome on/off
- .setwelcome
- .leave on/off
- .setleave
- .purge [code]
- .blacklist add [code]
- .blacklist remove [code]
- .blacklist list
- .promote
- .demote
- .mute
- .unmute
- .hidetag
- .tagall
- .activity
- .active
- .inactive
- .open
- .close
        `;
        msg.reply(reply);
    }
};