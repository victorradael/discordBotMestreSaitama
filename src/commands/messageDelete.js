const messageRemove = async (msg) => {
  msg.member._roles.map(async (memberRole) => {
    msg.guild.roles.cache.find(async (role) => {
      if (Number(memberRole) === Number(role)) {
        if (role.name === "@King") {
          const fetched = await msg.channel.messages.fetch({ limit: 2 });
          await msg.channel
            .bulkDelete(fetched)
            .catch((error) => console.log(error));
        } else {
          msg.reply(
            "Acho melhor você fazer 100 abdominais, 100 flexões e correr 10km todos os dias!"
          );
        }
      }
    });
  });
};

module.exports = { messageRemove };
