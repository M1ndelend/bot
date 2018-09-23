const Discord = require('discord.js');
const robot = new Discord.Client();

robot.login("NDU2ODE0NDM4ODI2MTE1MDky.DgQBIw.KdFQjbqwkItcs6B6xXGr68GXaTc");

robot.on('message', (message)=>{
if(message.content == "MiniGames") {
    message.reply("MiniGames — это отличный сервер, где вы сможете поиграть со своими друзьями и полностью расслабиться. Лучшего сервера вы больше не найдёте, приятной игры!")
}
if(message.content == "SpaceCraft") {
    message.reply("SpaceCraft — космический сервер, который способен заинтересовать буквально каждого игрока своей сложностью и нереально красивым внешним видом!")
}
if(message.content == "Classic") {
    message.reply("Classic — довольно-таки качественный ванильный сервер с присутствием интересных модификаций и плагинов.")
}
if(message.content == "SandBox") {
    message.reply("SandBox — декоративный сервер, где вы можете построить всё что угодно. Главное - умение творить и иметь большую фантазию.")
}
if(message.content == "GalaxyCraft") {
    message.reply("GalaxyCraft — тот самый SpaceCraft, но с другими игроками и приятной атмосферой.")  
}  
if(message.content == "HungerGames") {
    message.reply("HungerGames — PvP-сервер, где вы можете показать свои умения в сражениях между другими игроками.")
}
if(message.content == "TechnoMagic") {
    message.reply("TechnoMagic — удивительный сервер, где магия связана с механизмами. Теперь вы сможете создать что угодно!")
}
if(message.content == "CivCraft") {
    message.reply("CivCraft — место, где игроки развивают свои цивилизации, а затем сражаются, отстаивая свои места.")
}
if(message.content == "Divine") {
    message.reply("Divine — RPG-сервер, где игроки учатся магии и, постепенно развиваясь, достигают вершин сервера.")
}
if(message.content == "RPG") {
    message.reply("RPG — тот самый Divine, только с другими игроками и приятной атмосферой.")
}
if(message.content == "HiTech") {
    message.reply("HiTech — 4 современных сервера, где правит техника. Скучно точно не будет, стоит попробовать сделать что-нибудь своё и прославиться на весь сервер!")
}
if(message.content == "TeraWars") {
    message.reply("TeraWars — место, где бои идут 24/7. Постепенно улучшая классы и обновляя свои вещи, можно стать топ1 сервера!")
}
if(message.content == "Pixelmon") {
    message.reply("Pixelmon — легендарный сервер, где обитают такие существа, как покемоны. Ловите их, наслаждайтесь игрой и не покидайте сервер!")
}
if(message.content == "топ") {
    message.reply("о да, ты самый лучший из всех, кто есть в этом жалком мире <3")
}
if(message.content == "мазака") {
    message.reply("Мазака - это существо, которое однажды поимели негры в небольшой комфортной будке!")
}
});
