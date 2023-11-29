export function hor() {
    let temps = new Date();
    let heures = temps.getHours();
    let minutes = temps.getMinutes();
    let secondes = temps.getSeconds();
    if (heures < 10) {
        heures = "0" + heures;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (secondes < 10) {
       secondes = "0" + secondes;
      }
    let heureA = heures + ":" + minutes + ":" + secondes;
    document.getElementById('horloge').textContent = heureA;
 }

 

 export function affichageDate(){
  let d = new Date();
  let e = d.toLocaleDateString();
  document.getElementById('date').textContent = e;
 } 

