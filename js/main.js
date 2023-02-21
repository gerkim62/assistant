import createPrompt from './prompt-creator.js'
import {displayTimetableUploadUI, displayStudentAssistantUI} from './ui.js'
import newMessage from './message-creator.js'

export const timetableCSV = localStorage.getItem('timetableCSV')||'EXAMPLE CSV FILE'

if(timetableCSV)displayStudentAssistantUI(timetableCSV)
else displayTimetableUploadUI()

document.querySelector('.submit').addEventListener('click', function() {
  newMessage();
});

window.addEventListener('keydown', function(e) {
  if (e.which === 13) {
    newMessage();
    return false;
  }
});
