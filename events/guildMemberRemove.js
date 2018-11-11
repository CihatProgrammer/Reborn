module.exports = member => {
  let guild = member.guild;
  member.send('neden gitmiştin ki?');
  guild.defaultChannel.send(`${member.user.username} gitti.`);
};
