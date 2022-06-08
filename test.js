
const fs = require('fs');
const login = require("facebook-chat-api");
const credential = {
appState: JSON.parse(fs.readFileSync('aaa.json', 'utf-8')).cookies
}
login(
  credential,
  (error, api) => {
    if(error) return console.error(error);
   api.listenMqtt((error, message) => {
     var testString = message.body;
     if(testString != undefined){
       testString =testString.toLowerCase();
     if(testString.includes("graczol")){
       api.sendMessage("cza XD", message.threadID);}
      else if(testString.endsWith("ol"))
        api.sendMessage(testString.substring(0, 3)+"XD", message.threadID);
     }
    });
}
);