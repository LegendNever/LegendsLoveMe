const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`I love Its3moree And Epic Moody`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});



client.on('message', message => {
  const prefix = "!!";
    if (message.author.kick) return;
    if (!message.content.startsWith(prefix)) return;
  
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
  
    let args = message.content.split(" ").slice(1);
  
    if (command == "kick") {
                 if(!message.channel.guild) return;
           
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
    let user = message.mentions.users.first();
    let reason = message.content.split(" ").slice(2).join(" ");
  
    if (message.mentions.users.size < 1) return message.reply("منشن شخص");
    if(!reason) return message.reply ("اكتب سبب الطرد");
    if (!message.guild.member(user)
    .bannable) return message.reply("لايمكنني طرد شخص اعلى من رتبتي");
  
    message.guild.member(user).kick(7, user);
  
    const banembed = new Discord.RichEmbed()
    .setAuthor('Kicked !', user.displayAvatarURL)
    .setColor("RANDOM")
    .setTimestamp()
    .addField("User:",  `[ + ${user.tag} + ]`)
    .addField("By:", `[  + ${message.author.tag} +  ]`)
    .addField("Reason:", `[ + ${reason} +  ]`)
    client.channels.get("آي دي روم اللوق").send({embed : banembed})
  }
  });


  client.on('message' , message => {
    var prefix = "!!";
    let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
    if(message.content.startsWith(prefix + 'unban')) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');
        if(!user) return  message.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
        message.guild.unban(user);
        message.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${message.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURl)
        .setColor("RANDOM")
        .setTitle('**●Unban** !')
        .addField('**●User Unban :** ', `${user}` , true)
        .addField('**●By :**' ,       ` <@${message.author.id}> ` , true)
        .setAuthor(message.guild.name)
        message.channel.sendEmbed(embed)
    }
});


client.on('message', message => {
  if(message.content === 'هلا'){
      message.channel.send('***هلا ولله منور***')
  }
});


client.on('message', message => {
  if(message.content === 'السلام عليكم'){
      message.channel.send('***وعليكم السلام***')
  }
});


client.on('message', message => {
  if(message.content === 'كيفكم؟'){
      message.channel.send('***بخير انت؟***')
  }
});


client.on('message', message => {
  if(message.content === 'شلونكم شباب؟'){
      message.channel.send('***بخير وانت؟***')
  }
});


client.on('message', message => {
  if(message.content === 'بخير'){
      message.channel.send('***دوم يارب***')
  }
});


client.on('message', message => {
  if(message.content === 'علوم؟'){
      message.channel.send('***بخير وانت؟***')
  }
});


client.on('message', message => {
  if(message.content === '@Its3moree#8677'){
      message.channel.send('***شتبغا منو مشغول***')
  }
});


client.on('message', message => {
  var args = message.content.split(/[ ]+/)
  if(message.content.includes('كل زق' ,'تفو عليك' ,'يا معفن' ,'يابن الكلب ')){
      message.delete()
  return message.reply(`** عيب عليك لا تسب ! **`)
  }
});


client.on('guildMemberAdd', member => {
  let channel = member.guild.channels.find('name','_new-members_');
  let memberavatar = member.user.avatarURL
    if (!channel) return;
  let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(memberavatar)
      .addField('🎽 | name :  ',`${member}`)
      .addField('📢 | نورت السيرفر يا قلبي' , `Welcome to the server, ${member}`)
      .addField('🆔 | user :', "**[" + `${member.id}` + "]**" )
              .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
             
                .addField("Name:",`<@` + `${member.id}` + `>`, true)
                   
                                   .addField(' الـسيرفر', `${member.guild.name}`,true)
                                     
   .setFooter("**Legends**")
      .setTimestamp()
 
    channel.sendEmbed(embed);
  });


  client.on('message', message => {
    if(message.content === 'شكرا'){
        message.channel.send('***العفو :heart:***')
    }
  });
  

  client.on('message', message => {
    if(message.content === 'عموري'){
        message.channel.send('***ايش في احد توفي***')
    }
  });


  client.on('message', message => {
    if(message.content === '.'){
        message.channel.send('حط نقطتين')
    }
  });


  client.on('message', message => {
    if(message.content === '..'){
        message.channel.send('حط ثلاث نقاط')
    }
  });



  client.on('message', message => {
    if(message.content === '...'){
        message.channel.send('حط اربع نقاط')
    }
  });
  

  client.on('message', message => {
    if(message.content === '....'){
        message.channel.send('حط خمس نقاط وبعطيك رانك')
    }
  });
 

  client.on('message', message => {
    if(message.content === '.....'){
        message.channel.send('حط 6 نقاط بعطيك حساب فول اكسس')
    }
  });


  client.on('message', message => {
    if(message.content === '......'){
        message.channel.send('حط 7 نقاط بعطيك اونر ولله')
    }
  });


  client.on('message', message => {
    if(message.content === '.......'){
        message.channel.send('مصدق حالك روح امشي ')
    }
  });


  client.on('message', message => {
    if(message.content === 'لا تروح'){
        message.channel.send('لا تروح و تخلينه لحالنا :heart:')
    }
  });


  client.on('message', message => {
    if (message.content === "!!serooms") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);

        
     message.guild.createChannel('「 O W N E R 」', 'voice')
     message.guild.createChannel('「 C O - L E A D E R 」', 'voice')
     message.guild.createChannel('「ADMINSTRATOR」', 'voice')
     message.guild.createChannel('𖦲₁PARTY | بارتي𖦲', 'voice')
     message.guild.createChannel('𖦲₂PARTY | بارتي𖦲', 'voice')
     message.guild.createChannel('𖦲₂PARTY | بارتي𖦲', 'voice')
     message.guild.createChannel('✬ʝuşτ-1✬', 'voice')
 message.guild.createChannel('✬ʝuşτ-2✬', 'voice')
     message.guild.createChannel('✬ʝuşτ-3✬', 'voice')
     message.guild.createChannel('✬ʝuşτ-4✬', 'voice')
     message.guild.createChannel('✬ʝuşτ-5✬', 'voice')
     message.guild.createChannel('😴sleep', 'voice')
          message.guild.createChannel('༆كَبّـآرَ آلَشّـخٌـصِـيّآتُ༆', 'voice')
     message.guild.createChannel('welcome', 'text')
     message.guild.createChannel('info', 'text')
     message.guild.createChannel('bot', 'text')
     message.guild.createChannel('chat', 'text')
     message.guild.createChannel('Youtube', 'text')
     message.guild.createChannel('bo7', 'text')
     message.guild.createChannel('party', 'text')
     message.guild.createChannel('pic', 'text')


message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم صناعة السيرفر**')
}
});


client.on('message', message => {
  if(message.content === 'كيفك؟'){
      message.channel.send('***بخير وانت؟***')
  }
});


client.on('message', message => {
  if (message.author.bot) return;
          if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('rbcall')){
if(!message.author.id === '473855426790686750') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


client.on('message', message => {
  const prefix = "!";
    if (message.author.kick) return;
    if (!message.content.startsWith(prefix)) return;
  
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
  
    let args = message.content.split(" ").slice(1);
  
    if (command == "kick") {
                 if(!message.channel.guild) return;
           
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
    let user = message.mentions.users.first();
    let reason = message.content.split(" ").slice(2).join(" ");
  
    if (message.mentions.users.size < 1) return message.reply("منشن شخص");
    if(!reason) return message.reply ("اكتب سبب الطرد");
    if (!message.guild.member(user)
    .bannable) return message.reply("لايمكنني طرد شخص اعلى من رتبتي");
  
    message.guild.member(user).kick(7, user);
  
    const banembed = new Discord.RichEmbed()
    .setAuthor('Kicked !', user.displayAvatarURL)
    .setColor("RANDOM")
    .setTimestamp()
    .addField("User:",  `[ + ${user.tag} + ]`)
    .addField("By:", `[  + ${message.author.tag} +  ]`)
    .addField("Reason:", `[ + ${reason} +  ]`)
    client.channels.get("476019349652504582").send({embed : banembed})
  }
  });

  client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(`** يمنع نشر الروابط بهذا السيرفر  :angry: ! **`)
    }
});


client.on('message', message => { 
  let PREFIX = '!!'
      if (message.content.startsWith(PREFIX + 'emojilist')) {
  
          const List = message.guild.emojis.map(e => e.toString()).join(" ");
  
          const EmojiList = new Discord.RichEmbed()
              .setTitle('➠ Emojis') 
              .setAuthor(message.guild.name, message.guild.iconURL) 
              .setColor('RANDOM') 
              .setDescription(List) 
              .setFooter(message.guild.name) 
          message.channel.send(EmojiList) 
      }
  });


  client.on('message', message => {
    if(message.content === 'باك'){
        message.channel.send('***ولكم باك يا عمري***')
    }
  });


  client.on('message', message => {
    if(message.content === 'باك'){
        message.channel.send('***ولكم باك يا عمري***')
    }
  });


  client.on('message', message => {
    if(message.content === 'برب'){
        message.channel.send('***تيت***')
    }
  });


  client.on('message', message => {
    if(message.content === 'زق'){
        message.channel.send('https://cdn.discordapp.com/attachments/474716762252771332/477471839652675603/Poop_Emoji_7b204f05-eec6-4496-91b1-351acc03d2c7_large.png')
    }
  });


  client.on('message', message => {
    if(message.content === 'الزق'){
        message.channel.send('https://cdn.discordapp.com/attachments/474716762252771332/477471839652675603/Poop_Emoji_7b204f05-eec6-4496-91b1-351acc03d2c7_large.png')
    }
  });


  client.on('message', message => {
    if(message.content.startsWith ("!!marry")) {
    if(!message.channel.guild) return message.reply('** This command only for servers **')
    var proposed = message.mentions.members.first()
   
    if(!message.mentions.members.first()) return message.reply(' 😏 **لازم تطلب ايد وحدة**').catch(console.error);
    if(message.mentions.users.size > 1) return message.reply(' 😳 **ولد ما يصحلك الا حرمة وحدة كل مرة**').catch(console.error);
     if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
      if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
            message.channel.send(`**${proposed} 
بدك تقبلي عرض الزواج من ${message.author} 
العرض لمدة 15 ثانية  
اكتبي موافقة او لا**`)

const filter = m => m.content.startsWith("موافقة");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
  message.channel.send(` **${message.author} و ${proposed} الف الف مبروك الله , يرزقكم الذرية الصالحة** `);
})

 const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
 message.channel.send(`  **${message.author} تم رفض عرضك** `);
})
      
}
});


client.on('message', async message => {
  if(message.content.includes('discord.gg')){ 
      if(message.member.hasPermission("MANAGE_GUILD")) return;
if(!message.channel.guild) return;
message.delete()
var command = message.content.split(" ")[0];
let muterole = message.guild.roles.find(`name`, "Muted");
if(!muterole){
try{
muterole = await message.guild.createRole({
name: "Muted",
color: "#000000",
permissions:[]
})
message.guild.channels.forEach(async (channel, id) => {
await channel.overwritePermissions(muterole, {
  SEND_MESSAGES: false,
  ADD_REACTIONS: false
});
});
}catch(e){
console.log(e.stack);
}
}
 if(!message.channel.guild) return message.reply('** This command only for servers**');
message.member.addRole(muterole);
const embed500 = new Discord.RichEmbed()
.setTitle("Muted Ads")
  .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
  .setColor("c91616")
  .setThumbnail(`${message.author.avatarURL}`)
  .setAuthor(message.author.username, message.author.avatarURL)
.setFooter(`${message.guild.name} `)
message.channel.send(embed500)
message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');


}
})


client.on('message', msg => {//msg
  if (msg.content === 'السلام عليكم') {
    msg.channel.send({file : "https://cdn.discordapp.com/attachments/474716762252771332/477471839652675603/Poop_Emoji_7b204f05-eec6-4496-91b1-351acc03d2c7_large.png"})
  }
});;


client.on('message', message => {
  var  user = message.mentions.users.first() || message.author;
if (message.content.startsWith("!!avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});


client.on("message", message => {
  var prefix = "!!"; // غير هنا حط البرفكس

          var args = message.content.substring(prefix.length).split(" ");
          if (message.content.startsWith(prefix + "clear")) {
 if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
      var msg;
      msg = parseInt();
    
    message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
    message.channel.sendMessage("", {embed: {
      title: "Done | تــم",
      color: 0x06DF00,
      description: "تم مسح الرسائل بنجاح",
      footer: {
        text: "legend Bot" // غير هنا حط اسم البوت
      }
    }}).then(msg => {msg.delete(3000)});
                        }

   
});


client.on('message', async message => {
  let date = moment().format('Do MMMM YYYY , hh:mm');
  let User = message.mentions.users.first();
  let Reason = message.content.split(" ").slice(3).join(" ");
  let messageArray = message.content.split(" ");
  let time = messageArray[2];
  if(message.content.startsWith(prefix + "tempban")) {
     if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("**- You don't have the needed permissions!**");
     if(!User) message.channel.send("**- Mention someone!**");
     if(User.id === client.user.id) return message.channel.send("**- You cannot ban me!**");
     if(User.id === message.guild.owner.id) return message.channel.send("**- You cannot ban the owner of the server!**");
     if(!time) return message.channel.send("**- Supply a duration!**");
     if(!time.match(/[1-7][s,m,h,d,w]/g)) return message.channel.send('**- Supply a real time!**');
     if(!Reason) message.channel.send("**- Supply a reason!**");
     let banEmbed = new Discord.RichEmbed()
     .setAuthor(`You have been banned from ${message.guild.name} !`)
     .setThumbnail(message.guild.iconURL || message.guild.avatarURL)
     .addField('- Banned By: ',message.author.tag,true)
     .addField('- Reason:',Reason,true)
     .addField('- Banned At:',date,true)
     .addField('- Duration:',time,true)
     .setFooter(message.author.tag,message.author.avatarURL);
     User.sendMessage({embed: banEmbed}).then(() => message.guild.member(User).ban({reason: Reason}))
     .then(() => message.channel.send(`**# Done! I banned: ${User}**`)).then(() => { setTimeout(() => {
         message.guild.unban(User);
     }, mmss(time));
  });
 } 
});


client.on('message', message => {
  if(message.content === 'موافق'){
      message.channel.send('موافقة')
  }
});



client.login(process.env.BOT_TOKEN);
