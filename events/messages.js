const { getBalance, addBalance } = require("../utils")

module.exports = async (sock, m) => {
    if (!m.messages) return
    const msg = m.messages[0]
    if (!msg.message || msg.key.fromMe) return

    const text = msg.message.conversation || msg.message.extendedTextMessage?.text
    const sender = msg.key.remoteJid

    if (!text) return

    // -----------------------------
    // Greetings
    // -----------------------------
    if (text.toLowerCase() === "hi") {
        await sock.sendMessage(sender, { text: "⚡ Voltaria: Hello. I am observing." })
        return
    }

    if (text.toLowerCase() === "hello") {
        await sock.sendMessage(sender, { text: "⚡ Voltaria: Greetings. Stay attentive." })
        return
    }

    // -----------------------------
    // Economy commands
    // -----------------------------
    if (text.toLowerCase() === "!balance") {
        const u = getBalance(sender)
        await sock.sendMessage(sender, {
            text: `🎴 ACCOUNT BALANCE\n━━━━━━━━━\n💰 Wallet: $${u.wallet}\n🏦 Bank: $${u.bank}\n🌌 Max: $${u.max}\n━━━━━━━━━\n💠 Total: $${u.wallet + u.bank}`
        })
        return
    }

    if (text.toLowerCase() === "!daily") {
        const amount = Math.floor(Math.random() * 500) + 100
        addBalance(sender, amount, "wallet")
        await sock.sendMessage(sender, { text: `💸 You received $${amount} today!` })
        return
    }

    // -----------------------------
    // Voltaria AI modes
    // -----------------------------
    if (text.toLowerCase().startsWith("!mode ")) {
        const mode = text.split(" ")[1]
        const modes = ["default","savage","boss","corrupted","soft","playful"]
        if (!modes.includes(mode)) {
            await sock.sendMessage(sender, { text: "❌ Invalid mode. Use: default, savage, boss, corrupted, soft, playful" })
        } else {
            await sock.sendMessage(sender, { text: `⚡ Voltaria mode set to ${mode}` })
        }
        return
    }

    // -----------------------------
    // Custom AI responses (example)
    // -----------------------------
    if (text.toLowerCase() === "who are you") {
        await sock.sendMessage(sender, { text: "⚡ I am Voltaria — an elegant, intelligent, and observing entity." })
        return
    }

    if (text.toLowerCase() === "your wallet") {
        const u = getBalance(sender)
        await sock.sendMessage(sender, { text: `💰 Your wallet contains $${u.wallet}` })
        return
    }
}
