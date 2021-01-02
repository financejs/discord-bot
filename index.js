
// Declare Everything
const Discord = require('discord.js');
const client = new Discord.Client();
const stock = require('finance.io')
require('dotenv').config()
// When The Bot Is Ready
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
//Get Stock Info
client.on('message', message => {
  const prefix = "!"
if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();

if (command === 'get') {
	if (!args.length) {
		return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
	}

stock.getInfo(`${args}`).then( (data) => { // Process 1
const output = JSON.stringify(data, null, 4); // Process 2
const symbol = data.symbol; // Process 3 : Declare Symbol
const dataType = data.data; // Process 3 : Declare Data Type
const exampleEmbed = { // Make It Stylish By Using Embeds
	color: "RANDOM", // Color : Could Be Hex Code Or Anything
	title: `${symbol} | ${dataType}`, // It Would Be Something Like GOOGL | Stock Data
	description: "```js\n"+ output+ "```", // Data Would Be Inside : Default is Json Format
	timestamp: new Date(), // Data, What Else ?
};

message.channel.send({ embed: exampleEmbed }); // Process 4 : Send The Embed

});
}
});






// Do One More Time, But Getting Diffrent Data

//Get Company Data
client.on('message', message => {
  const prefix = "!"
if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();

if (command === 'getcompany') {
	if (!args.length) {
		return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
	}

stock.getCompany(`${args}`).then( (data) => { // Process 1
const output = JSON.stringify(data, null, 4); // Process 2
const symbol = data.symbol; // Process 3 : Declare Symbol
const dataType = data.data; // Process 3 : Declare Data Type
const address = data.address1;
const city = data.city;
const state = data.state;
const zip = data.zipCode;
const country = data.country;
const contact = data.contactNumber;
const website = data.website;
const industry = data.industry;
const sector = data.sector;
const employees = data.fullTimeEmployees;
const headCompanyOfficers = data.headCompanyOfficers;

const firstEmbed = `Symbol : ${symbol}\nData Type : ${dataType}\nAddress : ${address}\nCity : ${city}\nState : ${state}\nZip Code :${zip}\nCountry : ${country}\nContact Number : ${contact}\nWebsite : ${website}\nIndustry : ${industry}\nSector : ${sector}\nFull Time Employees : ${employees}\nHead Company Officers : ${headCompanyOfficers}`;

const exampleEmbed = { // Make It Stylish By Using Embeds
	color: "RANDOM", // Color : Could Be Hex Code Or Anything
	title: `${symbol} | ${dataType}`, 
	description: "```fix\n"+ firstEmbed+ "```", 
	timestamp: new Date(), 
};
const exampleEmbed2 = { // Make It Stylish By Using Embeds
	color: "RANDOM", // Color : Could Be Hex Code Or Anything
	title: `Business Summary`, 
	description: "```js\n{ \n 'businessSummary' :\n" + " " + "'"  + data.businessSummary + "'" + "\n }```", 
	timestamp: new Date(), 
};
message.channel.send({ embed: exampleEmbed }); 
message.channel.send({ embed: exampleEmbed2 }); 


});
}
});



//Get Filtered Financial Data
client.on('message', message => {
  const prefix = "!"
if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();

if (command === 'getfinancial') {
	if (!args.length) {
		return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
	}

stock.getFinancial(`${args}`).then( (data) => { // Process 1
const output = JSON.stringify(data, null, 4); // Process 2
const symbol = data.symbol; // Process 3 : Declare Symbol
const dataType = data.data; // Process 3 : Declare Data Type
const exampleEmbed = { // Make It Stylish By Using Embeds
	color: "RANDOM", // Color : Could Be Hex Code Or Anything
	title: `${symbol} | ${dataType}`, 
	description: "```js\n"+ output+ "```", 
	timestamp: new Date(), 
};

message.channel.send({ embed: exampleEmbed }); 

});
}
});


//Get Get netSharePurchaseActivity
client.on('message', message => {
  const prefix = "!"
if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();

if (command === 'getnspa') {
	if (!args.length) {
		return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
	}

stock.getNspa(`${args}`).then( (data) => { // Process 1
const output = JSON.stringify(data, null, 4); // Process 2
const symbol = data.symbol; // Process 3 : Declare Symbol
const dataType = data.data; // Process 3 : Declare Data Type
const exampleEmbed = { // Make It Stylish By Using Embeds
	color: "RANDOM", // Color : Could Be Hex Code Or Anything
	title: `${symbol} | ${dataType}`, 
	description: "```js\n"+ output+ "```", 
	timestamp: new Date(), 
};

message.channel.send({ embed: exampleEmbed }); 

});
}
});


client.login(process.env.TOKEN); // Process 5 : Login The Bot
