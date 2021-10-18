let Discord = require("discord.js");
let client = new Discord.Client();

client.on("message", message => {
  if (message.content === "Jazzy") {
    message.channel.send("what");
  }
  if (message.content === "jazzy") {
    message.channel.send("what");
  }
  if (message.content === "jdph") {
    message.channel.send("https://cdn.glitch.com/b3334a91-953a-4d14-8871-eb44bcf1a513%2F86720417-aad6-4b53-8923-ab631ac93c86.image.png?v=1615953020569");
  }
  if (message.content === "sasageyo") {
    message.channel.send(
      "sasageyo :stuck_out_tongue_winking_eye: sasageyo :pleading_face: shinzo wo :anguished:sasageyo:confounded: subete :frowning2: no :x: gisei :grimacing: wa :eyes: ima :nail_care: kono toki :smirk: no :kissing_heart: tame :mag_right: ni :chains: sasageyo! :knife: sasageyo! :flushed:"
    );
  }
  if (message.content === "daftpunk status") {
    message.channel.send(
      "https://cdn.discordapp.com/attachments/669736160263798796/814284131122544701/shitpost_status.mp4"
    );
  }
  if (message.content === "jhelp") {
    message.channel.send(
      "need help? https://cseriestechhero.github.io/about.lctapps-1994-STUDIOS/"
    );
  }

  if (message.content === "connor") {
    message.channel.send(
      "Message from <@454055506089082901>, https://cdn.glitch.com/b3334a91-953a-4d14-8871-eb44bcf1a513%2Fchromakey%20experiment%20(5).mp4?v=1614903852643"
    );
  }
  const thisWord = "connor";
  if (message.content.includes(thisWord)) {
    message.channel.send("<@454055506089082901>");
  }
  const thisWord3 = "TorD";
  if (message.content.includes(thisWord3)) {
    message.channel.send("+truth");
  }
  var groceries = [
    "image1 placeholder",
    "image2 placeholder",
    "image3 placeholder",
    "image4 placeholder"
  ];
  if (message.content === "jthigh") {
    let mygroceries = groceries[Math.floor(Math.random() * groceries.length)];
    message.channel.send(mygroceries);
    console.log(mygroceries); //This gives you any string from groceries
  }

  var Img = [
    "https://cdn60.picsart.com/184925822000202.gif",
    "https://media.discordapp.net/attachments/811660791563419759/811662831760965693/2Q.png?width=195&height=210",
    "image3 placeholder",
    "image4 placeholder"
  ];
  if (message.content === "jyaoi") {
    let yaoiimg = Img[Math.floor(Math.random() * Img.length)];
    message.channel.send(yaoiimg);
    console.log(yaoiimg);
  }


  const oJ = "orange juice";
  if (message.content.includes(oJ)) {
    message.channel.send(
      "https://cdn.glitch.com/b3334a91-953a-4d14-8871-eb44bcf1a513%2FpVf8Yt-SRd9bm--A.mp4?v=1614900802537"
    );
  }
  const urMom = "ya mom";
  if (message.content.includes(urMom)) {
    message.channel.send("DOIN YA MOM ");
    message.channel.send("DOIN DOIN YA MOM");
    message.channel.send("MY DICK GOT BLOWN UP BY A BOMB");
    message.channel.send("WHILE BROWSING ON PORNHUB.COM");
    message.channel.send("SUCH A SHAME THAT MY DICK IS GONE");
    message.channel.send("DOIN YA DAD");
    message.channel.send("DOIN DOIN YA DAD");
    message.channel.send("wait...");
    message.channel.send("that's gay");
    message.channel.send("`i am gonna stop singing the song`");
    message.channel.send("**The song was funny tho.**");
  }

  const thisWordMWA = "MWA";
  if (message.content.includes(thisWordMWA)) {
    message.channel.send(":heart:");
  }
  const thisWordmwa = "mwa";
  if (message.content.includes(thisWordmwa)) {
    message.channel.send(":heart:");
  }
  const thisWordSus = "amogus";
  if (message.content.includes(thisWordSus)) {
    message.channel.send(
      "https://cdn.glitch.com/b3334a91-953a-4d14-8871-eb44bcf1a513%2FBhZ-NSn_CRqc1Hs3.mp4?v=1614895729149"
    );
  }
  const thisWordOkay = "Okay";
  if (message.content.includes(thisWordOkay)) {
    message.channel.send(
      "I think charlie is like the only person who says okay with the O capitalized"
    );
  }
  const thisJoin = "server";
  if (message.content.includes(thisJoin)) {
    message.channel.send("Did someone join?");
  }

  const thisWord2 = "mistake";
  if (message.content.includes(thisWord2)) {
    message.channel.send("I AM NOT A MISTAKE");
    message.author.send("I AM NOT A MISTAKE YOU ARE");
  }
  const levelU = "you just advanced to level";
  if (message.content.includes(levelU)) {
    message.channel.send("Wow nice job!");
    message.author.send(":crown: this goes to you for leveling up :clap:");
  }
  const thisWordJazzy = "jazzy";

  if (message.content.includes(thisWordJazzy)) {
    message.channel.send("WHO MENTIONED ME");
    message.author.send(
      "YOU PINGED ME AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    );
  }
  const peePee = "damn";

  if (message.content.includes(peePee)) {
    message.channel.send("I've got something special to tell you.");
    message.author.send(
      "https://cdn.glitch.com/b3334a91-953a-4d14-8871-eb44bcf1a513%2Fa8dRJJPktwbLplZ7.mp4?v=1614900227362"
    );
  }
  //thx ky for typing the n word fro me i could never do it
  let blacklisted = ["nigga", "fag", "faggot", "test", "nigger"];
  let foundInText = false;
  for (var i in blacklisted) {
    if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase()))
      foundInText = true;
  }
  if (foundInText) {
    message.delete();
    message.channel.send();
    message.author.send("Mia Moment");
  }
});

client.login("ODE0NTU0MjkwODgyMzQ3MDY4.YDfizA.q3_oyZJniEpqWG6tryZN_VYKeo0");
