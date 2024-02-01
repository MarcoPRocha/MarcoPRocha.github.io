const saludo = document.querySelector("#saludo");
saludo.addEventListener("click", mostrarAlerta);

function mostrarAlerta(){
    Swal.fire({
        title: "Bienvenid@",
        text: "A JUGAAAAARRRR!!!",
        imageUrl: "champagne.jpg",
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: "Custom image"
      });
}


const juego = document.querySelector("#juego");
juego.addEventListener("click", () => {
    Swal.fire("SweetAlert2 is working!");
    let numero =
        Math.floor(Math.random()* 10 +1);
        if(numero === 1){
            alert(" Elige dos compañeros mas y tome cada quien un shot");
        } else if (numero == 2){
            alert( " Verdad o reto");
        } else if (numero == 3){
            alert( " Yo nunca nunca");
        } else if(numero == 4){
            alert(" Toma 4 segundos de la botella");
        } else if (numero == 5){
            alert( " Puedes poner una regla que todos deben cumplir Ej. Nadie puede ir al baño, el castigo se puede anular hasta que alguien mas saque de nuevo este castigo");
        } else if (numero == 6){
            alert(" Te casas con alguien. Los castigos que te toquen de igual manera los tendrá que hacer la otra persona y vicerversa con los castigos que el tenga.");
        } else if (numero == 7){
            alert(" Elige un esclavo. A quien escojas debe hacer todo lo que tu le ordenes.");
        } else if (numero == 8){
            alert (" Tira de nuevo");
        } else if (numero == 9){
            alert (" Toma un trago de cada bebida de tus compañeros.");
        } else {
            alert (" Te has salvado, pasa tu turno.");
        }
    
})



