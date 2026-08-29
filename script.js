const weddingDate = new Date("2026-12-12T11:00:00+05:30").getTime();

function updateCountdown(){
  const now = Date.now();
  let distance = weddingDate - now;
  if(distance < 0) distance = 0;
  const d = Math.floor(distance / 86400000);
  const h = Math.floor((distance % 86400000) / 3600000);
  const m = Math.floor((distance % 3600000) / 60000);
  const s = Math.floor((distance % 60000) / 1000);
  document.getElementById("days").textContent = d;
  document.getElementById("hours").textContent = String(h).padStart(2,"0");
  document.getElementById("minutes").textContent = String(m).padStart(2,"0");
  document.getElementById("seconds").textContent = String(s).padStart(2,"0");
}
updateCountdown();
setInterval(updateCountdown,1000);

const music = document.getElementById("weddingMusic");
const musicBtn = document.getElementById("musicBtn");
musicBtn.addEventListener("click", async () => {
  try{
    if(music.paused){ await music.play(); musicBtn.textContent="Ⅱ"; }
    else { music.pause(); musicBtn.textContent="♪"; }
  }catch(e){
    alert("Add a file named music.mp3 to the project folder first.");
  }
});
