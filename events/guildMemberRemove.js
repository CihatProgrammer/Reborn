module.exports = member => {
  let guild = member.guild;
  member.send('neden gitmi�tin ki?');
  guild.defaultChannel.send(`${member.user.username} gitti.`);
};
