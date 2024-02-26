let hr = document.getElementById("hand-wrapper")
let min = document.getElementById("hand-wrapper2")
let sec = document.getElementById("hand-wrapper3")
let date= new Date()

function Displaytime(){
 date = new Date();
  let hh=date.getHours();
  if( hh > 12 ) {
      hh -= 12;
      
  }
  let mr=date.getMinutes();
  let sr=date.getSeconds();
  
  hr.style.transform=`rotate(${hh*30+(mr/2)}deg)`;
  min.style.transform=`rotate(${mr*6}deg)`;
  sec.style.transform=`rotate(${sr*6}deg)`;
  

}
setInterval(Displaytime,1000)