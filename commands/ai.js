// ./commands/ai.js
module.exports = {
    name: 'ai',
    description: 'AI commands',
    execute(msg, args) {
        const reply = `
🤖 *AI* 🤖
- .copilot
- .gpt
- .perplexity
- .imagine
- .upscale
- .translate / .tt
- .transcribe / .tb
        `;
        msg.reply(reply);
    }
};