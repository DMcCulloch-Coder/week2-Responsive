const contact = require('./script.js')
const fs = require('fs')

fs.appendFileSync('file.txt', contact.name)
fs.appendFileSync('file.txt', contact.email)
fs.appendFileSync('file.txt', contact.message)

console.log(contact.name)