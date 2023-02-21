import createPrompt from './prompt-creator.js'
import {timetableCSV} from './main.js'
import {ellipsisLoader} from './dom.js'
import {show, hide, scrollToBottom} from './general-utils.js'

const userIconUrl = 'images/user.png'

const API_KEY =`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`

function newUserMessage() {
  let message = document.querySelector(".message-input input").value;
  if (message.trim() === '') {
    return false;
  }
  let newMessage = `<li class="sent"><img src="${userIconUrl}" alt="" /><p>${message}</p></li>`;
  document.querySelector('.messages ul').innerHTML += newMessage;
  document.querySelector('.message-input input').value = '';
  
  scrollToBottom(document.querySelector(".messages"))
  
  return message
}

function newAssistantMessage(assistantResponse) {
  let newMessage = `<li class="replies"><img src="${userIconUrl}" alt="" /><p>${assistantResponse}</p></li>`;
  document.querySelector('.messages ul').innerHTML += newMessage;
  
  scrollToBottom(document.querySelector(".messages"))
}


export default async function newMessage(){
  const userMessage = newUserMessage()
  
  if(!userMessage)return 
  show(ellipsisLoader)
  document.querySelector('.message-input input').disabled = true;
  
  const prompt = createPrompt({timetableCSV,studentPrompt:userMessage})
  const assistantResponse = await fetchAssistantResponse(prompt)
  console.log(assistantResponse)
  newAssistantMessage(assistantResponse)
  hide(ellipsisLoader)
    document.querySelector('.message-input input').disabled = false;
  
}

async function fetchAssistantResponse(prompt) {
  try{
  const response = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      prompt: prompt,
      max_tokens: 100,
      n: 1,
      stop: null,
      temperature: 0,
      model: "text-davinci-003"
    })
  });
  
  const json = await response.json();
  console.log(json)
  if(json.error) return json.error.message
  return json.choices[0].text
  }catch(error){
    console.error(error)
    
    return 'Sorry, please turn on the internet connection!'
  }
}


