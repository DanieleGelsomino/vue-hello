console.log("VUE JS OK!");

/*
    Descrizione:
    Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
    Bonus:
    Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

const app = new Vue({
  el: "#root",
  data: {
    message: "Zlatan Ibrahimovic",
    miaclasse: "container",
    image:
      "https://w0.peakpx.com/wallpaper/765/392/HD-wallpaper-zlatan-ibrahimovic-11-ac-milan-acmilan-ibra-iz-back-milan-rossoneri.jpg",
  },
});
