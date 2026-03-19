const fs = require("fs")
const dbPath = "./db.json"

// Initialize DB if not exists
if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify({ users: {} }, null, 2))
}

// Helper functions
function readDB() {
    return JSON.parse(fs.readFileSync(dbPath))
}

function writeDB(data) {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2))
}

function getBalance(userId) {
    const db = readDB()
    if (!db.users[userId]) db.users[userId] = { wallet: 0, bank: 152565, max: 3700000 }
    const u = db.users[userId]
    return u
}

function addBalance(userId, amount, type = "wallet") {
    const db = readDB()
    if (!db.users[userId]) db.users[userId] = { wallet: 0, bank: 152565, max: 3700000 }
    db.users[userId][type] += amount
    writeDB(db)
}

module.exports = { getBalance, addBalance }
