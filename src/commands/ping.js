const ping = async msg => {
  const ms = await msg.channel.send("Ping!");
  const clientms = ms.createdTimestamp - msg.createdTimestamp;
  return ms.edit(
    "Pong! Client " +
    clientms +
    "ms"
  );
}

module.exports = { ping }