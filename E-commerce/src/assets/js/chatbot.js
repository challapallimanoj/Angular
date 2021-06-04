var messages = [], 
  lastUserMessage = "", 
  botMessage = "", 
  botName = 'Chatbot', 
  talking = true; 

function chatbotResponse() {
  talking = true;
  botMessage = "I'm confused"; 

  if (lastUserMessage === 'hi' || lastUserMessage =='hello') {

    const hi = ['hi','howdy','hello']
    botMessage = hi[Math.floor(Math.random()*(hi.length))];

  }

  if (lastUserMessage === 'name') {

    botMessage = 'My name is ' + botName;

  }

  if(lastUserMessage === 'bharathi' || lastUserMessage == 'manoj.challapalli'|| lastUserMessage == 'i am manoj'){
    const manoj = ['Welcome boss ! Waiting for your order...','Good to see you boss','Ready Sir! How can i help you ?']
    botMessage = manoj[Math.floor(Math.random()*(manoj.length))];

  }

  if(lastUserMessage =='How I can login to your site?' || lastUserMessage == 'can you help me in your site login?'|| lastUserMessage == 'login')
{
const manoj = ['You can login with your google,other medias','you can see sign in and sign up option over there and proceed with your details','use sign in and sign up option']
botMessage = manoj[Math.floor(Math.random()*(manoj.length))];
}

if(lastUserMessage =='what is sign in?' || lastUserMessage == 'sign in')
{
const manoj = ['sign in is for login purpose']
botMessage = manoj[Math.floor(Math.random()*(manoj.length))];

}

if(lastUserMessage =='what is sign up?' || lastUserMessage == 'sign up')
{
const manoj = ['sign up is for login purpose if you dont have an account in our site']
botMessage = manoj[Math.floor(Math.random()*(manoj.length))];

}

if(lastUserMessage =='what is cart?' || lastUserMessage == 'cart')
{
const manoj = ['In cart,you can add your selected items at one place']
botMessage = manoj[Math.floor(Math.random()*(manoj.length))];

}

if(lastUserMessage =='what is the purpose of cart?' || lastUserMessage == 'purpose of cart')
{
const manoj = ['you can add your selected items at one place']
botMessage = manoj[Math.floor(Math.random()*(manoj.length))];

}

if(lastUserMessage =='how can I search for products?')
{
const manoj = ['In search bar, you can type your desired product name and get your searches']
botMessage = manoj[Math.floor(Math.random()*(manoj.length))];

}

if(lastUserMessage =='How can I know offers?')
{
const manoj = ['In homepage only we are providing you the information about offers']
botMessage = manoj[Math.floor(Math.random()*(manoj.length))];

}

if(lastUserMessage =='how can I order products?' || lastUserMessage == 'order products')
{
const manoj = ['you can order your product through buy option ']
botMessage = manoj[Math.floor(Math.random()*(manoj.length))];

}


}

function newEntry() {
  
  if (document.getElementById("chatbox").value != "") {
    
    lastUserMessage = document.getElementById("chatbox").value;
   
    document.getElementById("chatbox").value = "";
  
    messages.push(lastUserMessage);
   
    chatbotResponse();
    
    messages.push("<b>" + botName + ":</b> " + botMessage);
   
    Speech(botMessage);

    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
  }
}


function Speech(say) {
  if ('speechSynthesis' in window && talking) {
    var utterance = new SpeechSynthesisUtterance(say);
  
    speechSynthesis.speak(utterance);
  }
}


document.onkeypress = keyPress;

function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
 
    newEntry();
  }
  if (key == 38) {
    console.log('hi')

  }
}

function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}