const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys")
const pino = require("pino")
const qrcode = require("qrcode-terminal")
const messageHandler = require("./events/messages")
const fs = require("fs")
const path = require("path")

async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState("auth")

    const sock = makeWASocket({
        logger: pino({ level: "info" }),
        auth: state,
        browser: ["Voltaria-Bot", "Chrome", "1.0.0"]
    })

    sock.ev.on("creds.update", saveCreds)

    sock.ev.on("connection.update", (update) => {
        const { connection, lastDisconnect, qr } = update

        if (qr) {
            console.log("📲 Scan this QR code with your secondary WhatsApp:")
            qrcode.generate(qr, { small: true })
        }

        if (connection === "open") {
            console.log("✅ Voltaria is online!")
        }

        if (connection === "close") {
            const reason = lastDisconnect?.error?.output?.statusCode
            console.log("❌ Connection closed, reason:", reason)

            if (reason === 401 || reason === 405) {
                console.log("⚠️ Auth failed, deleting old auth files...")
                const authPath = path.join(__dirname, "auth")
                if (fs.existsSync(authPath)) fs.rmSync(authPath, { recursive: true, force: true })
                console.log("✅ Old auth deleted. Restart bot to scan QR again.")
            }
        }
    })

    sock.ev.on("messages.upsert", async (m) => {
        await messageHandler(sock, m)
    })
}

startBot()
