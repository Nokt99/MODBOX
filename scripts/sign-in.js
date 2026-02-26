const username=document.getElementById("username")
const email=document.getElementById("email")
const password=document.getElementById("password")
const dobYear=document.getElementById("dob-year")
const dobMonth=document.getElementById("dob-month")
const dobDate=document.getElementById("dob-date")
const nextBtn=document.getElementById("next-btn")
const suggestions=document.getElementById("username-suggestions")
const ageDisplay=document.getElementById("dob-age-display")
let takenUsernames=[]
const profanityList=["fuck","shit","bitch","asshole","damn","crap","hell","piss","poo","darn","jerk","tit","twat"]

function updateDobLimits(){
const today=new Date()
dobYear.max=today.getFullYear()
dobMonth.max=12
dobDate.max=today.getDate()
dobYear.min=1950
dobMonth.min=1
dobDate.min=1
}
updateDobLimits()
function showError(input,msg){
let error=input.nextElementSibling
if(!error||!error.classList.contains("error-message")){
error=document.createElement("div")
error.classList.add("error-message")
input.parentNode.insertBefore(error,input.nextSibling)
}
error.textContent=msg
error.style.display="block"
input.classList.add("invalid")
}
function hideError(input){
let error=input.nextElementSibling
if(error&&error.classList.contains("error-message")) error.style.display="none"
input.classList.remove("invalid")
}
function validateUsername(){
const val=username.value.trim()
if(!val)return false
for(let word of profanityList)if(val.toLowerCase().includes(word)){showError(username,"Username contains disallowed words");return false}
if(takenUsernames.includes(val)){showError(username,"Username already in use");return false}
hideError(username)
return true
}
function validateEmail(){
const val=email.value.trim()
const allowedDomains=["microsoft.com","google.com","apple.com","mailfence.com"]
const match=val.match(/@(.+)$/)
if(!val||!match||!allowedDomains.includes(match[1].toLowerCase())){showError(email,"Must be major domain email");return false}
hideError(email)
return true
}
function validatePassword(){return!!password.value}
function validateDOB(){
const y=parseInt(dobYear.value)
const m=parseInt(dobMonth.value)
const d=parseInt(dobDate.value)
const today=new Date()
if(isNaN(y)||isNaN(m)||isNaN(d))return false
const dob=new Date(y,m-1,d)
if(dob>today||y<1950)return false
const age=Math.floor((today-dob)/31557600000)
ageDisplay.textContent=`Age: ${age}`
return true
}
function updateUsernameSuggestions(){
const val=username.value.trim().toLowerCase()
if(!val){suggestions.textContent="";return}
let sug=[]
for(let i=1;i<=3;i++)sug.push(val+i)
suggestions.textContent="Suggestions: "+sug.join(", ")
}
function checkAll(){
validateDOB()
updateUsernameSuggestions()
if(validateUsername()&&validateEmail()&&validatePassword()&&validateDOB()){nextBtn.classList.add("enabled");nextBtn.disabled=false}else{nextBtn.classList.remove("enabled");nextBtn.disabled=true}}
username.addEventListener("input",checkAll)
email.addEventListener("input",checkAll)
password.addEventListener("input",checkAll)
dobYear.addEventListener("input",checkAll)
dobMonth.addEventListener("input",checkAll)
dobDate.addEventListener("input",checkAll)
