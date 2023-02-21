import {csvUploadUI, studentAssistantUI, spinner} from './dom.js'
import {show, hide} from './general-utils.js'

export function displayStudentAssistantUI(){
  show(studentAssistantUI)
  hide(csvUploadUI)
  hide(spinner)
}

export function displayTimetableUploadUI() {
  show(csvUploadUI)
  hide(studentAssistantUI)
  hide(spinner)
}

hide(spinner)