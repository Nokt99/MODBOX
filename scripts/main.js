const landingPage=document.getElementById("landing-page")
const getStartedBtn=document.getElementById("get-started-btn")
const signUpContainer=document.getElementById("sign-up-container")
const modboxTitle=document.getElementById("modbox-title")
const tagline=document.getElementById("tagline")
const landingButtons=document.getElementById("landing-buttons")
const canvas=document.getElementById("particle-canvas")
const ctx=canvas.getContext("2d")
canvas.width=window.innerWidth
canvas.height=window.innerHeight
modboxTitle.style.opacity=0
tagline.style.opacity=0
landingButtons.style.opacity=0
setTimeout(()=>{modboxTitle.style.transition="opacity 1s";modboxTitle.style.opacity=1},200)
setTimeout(()=>{tagline.style.transition="opacity 1s";tagline.style.opacity=1},800)
setTimeout(()=>{landingButtons.style.transition="opacity 1s";landingButtons.style.opacity=1},1400)
function landingBackgroundAnimation(){
modboxTitle.style.transform=`translateY(${Math.sin(Date.now()/500)*3}px)`
tagline.style.transform=`translateY(${Math.sin(Date.now()/600)*2}px)`
requestAnimationFrame(landingBackgroundAnimation)
}
landingBackgroundAnimation()
let particles=[]
for(let i=0;i<80;i++){particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*2+1,sx:(Math.random()-0.5)*0.5,sy:(Math.random()-0.5)*0.5})}
function drawParticles(){
ctx.clearRect(0,0,canvas.width,canvas.height)
for(let p of particles){
ctx.beginPath()
ctx.arc(p.x,p.y,p.r,0,2*Math.PI)
ctx.fillStyle="rgba(0,255,0,0.3)"
ctx.fill()
p.x+=p.sx
p.y+=p.sy
if(p.x<0)p.x=canvas.width
if(p.x>canvas.width)p.x=0
if(p.y<0)p.y=canvas.height
if(p.y>canvas.height)p.y=0
}
requestAnimationFrame(drawParticles)
}
drawParticles()
getStartedBtn.addEventListener("click",()=>{
landingPage.style.transition="opacity 0.8s, transform 0.8s"
landingPage.style.opacity="0"
landingPage.style.transform="translateY(-30px)"
setTimeout(()=>{
landingPage.style.display="none"
signUpContainer.classList.remove("hidden")
signUpContainer.style.opacity="0"
signUpContainer.style.transition="opacity 0.8s, transform 0.8s"
signUpContainer.style.transform="translateY(20px)"
requestAnimationFrame(()=>{
signUpContainer.style.opacity="1"
signUpContainer.style.transform="translateY(0)"
})
},800)
})
window.addEventListener("resize",()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight})
