const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

const girismesaj = [
  '**Programmer sunucuya geldi!**',
  '**Programmer** discord botu,herhangi bir güvensizlik içeremez.',
  'Programmer (C|Programmer tarafından editlendi)',
  'Botumun özelliklerini öğrenmek için !yardım komutunu kullanmalısın!.',
  '**ÖNEMLİ:** Botun kullanması için mod-log (giris-cikis) kanalı açın ve deneme için',
  '!uyarı komutunu kullanın.',
  '',
  `**Programmer Discord Sunucusu** https://discord.gg/XtacUkf`,
  `**Programmer** https://discord.gg/XtacUkf`
]

client.on('guildCreate', guild => {
    const generalChannel = guild.defaultChannel
    generalChannel.sendMessage(girismesaj)
	client.user.setGame(| Programmer | prefix + 'yardım komutu | ' + client.guilds.size + ' SUNUCU | ' + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ' kisi');
})