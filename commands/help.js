// ./commands/Help.js
module.exports = {
    name: 'help',
    description: 'Displays all available commands',
    execute(msg, args) {
        const reply = `
╭━━★彡 𝚹𝚵𝚴 𝐕𝐨𝐥𝐭𝐚𝐫𝐢𝐚 彡★━━╮
┃  𖤓 Prefix: .
┃  𖤓 Name: Voltaria
┃  𖤓 Creator: Arashi
╰━━━━━━━━━━━━━━╯
Use *.support* for official group

*🎴 CARDS 🎴*  
┣ .cards [on/off]  
┣ .card [index]  
┣ .ci [name] [tier]  
┣ .cardinfo [name] [tier]  
┣ .si [name]  
┣ .ss [series_name]  
┣ .slb [series_name]  
┣ .clb  
┣ .deck  
┣ .col  
┣ .cardshop  
┣ .sellc [index] [price]  
┣ .rc [index]  
┣ .vs  
┣ .claim [id]  
┣ .sc [@] [index] [price]  
┣ .tc [@] [index] [index]  
┣ .lendcard / lc  
┣ .auction  
┣ .submit [index] [price]  
┣ .myauc  
┣ .remauc [index]  
┣ .listauc  
┣ .stardust  
┣ .anticamp  

*🎮 ECONOMY 🎮*  
┣ .balance / .bal  
┣ .orbs  
┣ .ebal  
┣ .daily  
┣ .withdraw / .wd  
┣ .deposit / .dep  
┣ .donate  
┣ .lottery  
┣ .rich  
┣ .richg  
┣ .profile / .p  
┣ .edit  
┣ .bio [bio]  
┣ .setage [age]  
┣ .inventory / .inv  
┣ .use [item name]  
┣ .sell [item_name]  
┣ .shop  
┣ .dig  
┣ .fish  
┣ .leaderboard / .lb  
┣ .roast  
┣ .gamble  
┣ .beg  

*🎮 GAMES 🎮*  
┣ .ttt  
┣ .startbattle  
┣ .akinator / .aki  
┣ .greekgod / .gg  
┣ .c4  
┣ .wcg  
┣ .chess  

*🏰 GUILDS 🏰*  
┣ .guild info  
┣ .guild create [name]  
┣ .guild accept  
┣ .guild decline  
┣ .guild emblem  

*🎰 GAMBLE 🎰*  
┣ .slots  
┣ .cf  
┣ .dice  
┣ .db  
┣ .dp  
┣ .roulette  
┣ .horse  

*🐾 PETS 🐾*  
┣ .pet  
┣ .pet feed  
┣ .pet play  
┣ .pet name  

*⚔️ RPG ⚔️*  
┣ (Coming soon)  

*👤 INTERACTION 👤*  
┣ .hug  
┣ .kiss  
┣ .slap  
┣ .wave  
┣ .pat  
┣ .dance  
┣ .sad  
┣ .smile  
┣ .laugh  
┣ .lick  
┣ .punch  
┣ .jihad  
┣ .crusade  
┣ .kill  
┣ .bonk  
┣ .fuck  
┣ .tickle  
┣ .shrug  
┣ .wank  
┣ .kidnap  

*👤 FUN 👤*  
┣ .gay  
┣ .lesbian  
┣ .simp  
┣ .ship  
┣ .skill  
┣ .duality  
┣ .gen  
┣ .pov  
┣ .social  
┣ .relation  
┣ .pp  
┣ .wouldyourather / .wyr  
┣ .joke  
┣ .truth  
┣ .dare  
┣ .td  
┣ .uno  

*📲 DOWNLOADERS 📲*  
┣ .ig  
┣ .ttk  
┣ .yt  
┣ .x  
┣ .fb  
┣ .play  

*🔍 SEARCH 🔍*  
┣ .pinterest / .pint  
┣ .sauce / .reverseimg  
┣ .wallpaper  
┣ .lyrics  

*🤖 AI 🤖*  
┣ .copilot  
┣ .gpt  
┣ .perplexity  
┣ .imagine  
┣ .upscale  
┣ .translate / .tt  
┣ .transcribe / .tb  

*👤 CONVERTER 👤*  
┣ .sticker / .s  
┣ .take  
┣ .toimg  
┣ .tovid  
┣ .rotate  

*🎮 ANIME SFW 🎮*  
┣ .waifu  
┣ .neko  
┣ .maid  
┣ .mori-calliope  
┣ .raiden-shogun  
┣ .oppai  
┣ .selfies  
┣ .uniform  
┣ .kamisato-ayaka  

*🎮 ANIME NSFW 🎮*  
┣ .nsfw on/off  
┣ .milf  
┣ .ass  
┣ .hentai  
┣ .oral  
┣ .ecchi  
┣ .paizuri  
┣ .ero  
┣ .ehentai  
┣ .nhentai  

*⚙️ ADMIN ⚙️*  
┣ .kick  
┣ .delete  
┣ .antilink  
┣ .antilink action  
┣ .antism on/off  
┣ .warn @mention [reason]  
┣ .resetwarn  
┣ .groupstats / .gs  
┣ .welcome on/off  
┣ .setwelcome  
┣ .leave on/off  
┣ .setleave  
┣ .purge [code]  
┣ .blacklist add [code]  
┣ .blacklist remove [code]  
┣ .blacklist list  
┣ .promote  
┣ .demote  
┣ .mute  
┣ .unmute  
┣ .hidetag  
┣ .tagall  
┣ .activity  
┣ .active  
┣ .inactive  
┣ .open  
┣ .close  

👤 *Profile for +254108720384*

⭐ *Level:* 4  
💰 *Wallet:* 30.4M  
🏦 *Bank:* 1.0M  
✨ *XP:* 197/2.8K

╭─⚡⚜️ Voltaria ⚜️⚡─╮
│ ✅ AFK Mode Deactivated ✅ │
│ 🌩️ Welcome back, Arashi! 🌩️ │
╰─────────────────────╯
        `;
        msg.reply(reply);
    }
};