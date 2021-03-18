const messageRemove = async msg => {
  if (msg.author.username === 'Victor Radael') {
    const fetched = await msg.channel.messages.fetch({ limit: 2 })
    await msg.channel.bulkDelete(fetched).catch(error => console.log(error))
  } else {
    msg.reply('Acho melhor você fazer 100 abdominais, 100 flexões e correr 10km todos os dias!')
  }
}

module.exports = { messageRemove }