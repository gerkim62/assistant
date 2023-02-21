const timetableCSV = `"Start","End","Mo","Tu","We","Th","Fr","Su","Lab","Lab","Course Code","Course Title","Instructor","Option","Venue","Location","Building"
08:00:00,09:00:00,true,false,true,false,true,false,false,false,"STAT150","Probability Theory & Statistics","MERARY KIPKOGEI","Group B","Room16","Annex",Annex
09:00:00,10:00:00,true,false,true,false,true,false,false,false,"MGMT130","Fundamentals of Management","Abunda Joshua ","Group A","HCR","Second Floor",Humanities
09:30:00,11:00:00,false,true,false,true,false,false,false,false,"COSC161","Fundamentals of Programming","Omari Dickson Mogaka ","Group A","Humanities Lab",,Humanities
11:00:00,12:00:00,true,false,true,false,true,false,false,false,"MATH121","Discrete Mathematics ","Esther O.","Group A","SC347","Second Floor",Science
11:00:00,12:00:00,true,false,true,false,true,false,false,false,"COSC220"," Fundamentals of Software Engineering ","Dennis Gichuki","Main","L109","School of Education",Library
17:00:00,18:00:00,true,false,true,false,true,false,false,false,"RELT207","Christian Beliefs","Bundi Andrew","Group C","H206A","First Floor",Humanities`

const timetableJSON = `[{"start_time":"06:00:00","end_time":"07:00:00","days_of_week":["Monday","Wednesday","Friday"],"is_lab":false,"course_code":"ENGL105","course_title":"Writing Skills","instructor":"Mungengo Baongoli  ","group":"Group B","venue":"Amphitheater","location":"Amphitheater","building":"Library"},{"start_time":"08:00:00","end_time":"09:30:00","days_of_week":["Tuesday","Thursday"],"is_lab":false,"course_code":"INSY119","course_title":"Business Information Processing and Applications","instructor":"Njoroge Roseline Nyamwamu ","group":"Group B","venue":"L105A (Computer Lab A)","location":"Information Systems and Computing ","building":"Library"},{"start_time":"08:00:00","end_time":"09:00:00","days_of_week":["Friday"],"is_lab":false,"course_code":"PEAC107","course_title":"Physical and Recreational Activities","instructor":"Dr. Kinuthia Benson Ngigi ","group":"Group C","venue":"Field","location":"On or Off Campus","building":"Open Field"},{"start_time":"08:00:00","end_time":"09:00:00","days_of_week":["Monday","Wednesday"],"is_lab":false,"course_code":"SOCI121","course_title":"Introduction to Sociology","instructor":"Dr. Odek Salome","group":"Group B","venue":"Amphitheater","location":"Amphitheater","building":"Library"},{"start_time":"12:00:00","end_time":"13:00:00","days_of_week":["Monday","Wednesday"],"is_lab":false,"course_code":"RELH155","course_title":"Adventist Heritage","instructor":"Laurent Bisogho Kasay","group":"Group B","venue":"H207A","location":"First Floor","building":"Humanities"},{"start_time":"12:00:00","end_time":"13:00:00","days_of_week":["Tuesday","Thursday"],"is_lab":false,"course_code":"LITE151","course_title":"Introduction to Literary Appreciation","instructor":"Dr. Mooka Edward Erwin ","group":"Group B","venue":"H207A","location":"First Floor","building":"Humanities"},{"start_time":"14:00:00","end_time":"16:00:00","days_of_week":["Monday","Wednesday"],"is_lab":false,"course_code":"ACCT111","course_title":"Fundamentals Of Accounting I","instructor":"Sharon Waley","group":"Group C","venue":"H102","location":"Ground Floor","building":"Humanities"}]`
const studentPrompt = 'Hello?'

export default function createPrompt({timetableCSV='not available',studentPrompt='Hello'}={}){
  
  const fullPrompt =`Your role is to provide response about the student's timetable using the given JSON timetable. your response must be less than 20 words. Don't say:'Here is your timetable for the week.' :[${timetableJSON}]. 
.You should address the student directly. Don't give partial response.You may(10%) Refer to the Timetable as 'your timetable' .Here is the student's prompt:  [${studentPrompt}]`

  return fullPrompt
}