const clear = async msg => {
  if (msg.channel.name === 'bot_test') {
    const fetched = await msg.channel.messages.fetch({ limit: 100 })
    msg.channel.bulkDelete(fetched)
    msg.channel.send('100 mensagens foram apagadas da conversa!')
      .catch(error => console.log(error))
  } else {
    msg.reply('Tá achando o quê?? Que pode sair apagando tudo? Nananinanão!')
  }
}

module.exports = { clear }