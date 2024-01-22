import { violencias } from "./data.js";
function cargarInicio(){
    /*Vuelve a cargar la página de inicio*/
    window.location.href = "./index.html";
}

function cargarQuienesSomos(){
    const titulo = "¿QUIÉNES SOMOS?";
    const sub_titulo = "INFORMACIÓN DEL REPOSITORIO"
    const contenido = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo con Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo conLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo con Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo con"
    document.querySelector("#titulo h1").textContent = titulo;
    let dom_contenido = document.querySelector("#contenido");
    dom_contenido.innerHTML = "";
    dom_contenido.style.justifyContent = "center";
    dom_contenido.style.alignItems= "center";
    let div = document.createElement("div");
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.alignItems = "center";
    div.style.justifyContent = "flex-start";
    div.style.textAlign = "Center";
    div.style.padding = "3vw";
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    h2.textContent = sub_titulo;
    p.textContent = contenido;
    div.appendChild(h2);
    div.appendChild(p);
    /*append the div to the dom_contenido*/
    dom_contenido.appendChild(div);
    
    
}

function cargarViolencias(){
    let contenido_der = document.querySelector("#contenido_der");
    violencias.forEach( (elemento, indice) => {
        let boton = document.createElement("button");
        boton.id = "boton_violencia_" + (indice+1);
        if((indice+1)%2 == 0){
            boton.classList.add("par");
        }else{
            boton.classList.add("impar");
        }
        boton.textContent = elemento["titulo"].toUpperCase();
        boton.addEventListener("click", () =>{
            console.log(elemento);
            /*Limpiamos la pantalla */
            let contenido = document.querySelector("#contenido");
            contenido.innerHTML = "";
            contenido.style.justifyContent = "center";
            contenido.style.alignItems= "center";

            /*Se llena el contenido izquierdo */
            let contenido_izq = document.createElement("div");
            contenido_izq.id = "contenido_izq";
            contenido_izq.style.padding = "3vw";
            contenido_izq.style.fontSize = "medium";
            contenido_izq.style.width = "30vw"


            let titulo = document.createElement("h2");
            titulo.textContent = elemento["titulo"];
            contenido_izq.appendChild(titulo);

            let preambulo = document.createElement("p");
            preambulo.textContent = elemento["preambulo"];
            contenido_izq.appendChild(preambulo);

            contenido.appendChild(contenido_izq);

            /*Se llena el contenido derecho */
            let contenido_der = document.createElement("div");
            contenido_der.id = "contenido_der";
            contenido_der.style.flexDirection = "column";

            
            const leyes = elemento["leyes"];
            leyes.forEach( (ley) => {
                let detail = document.createElement("details");
                detail.innerHTML = "<summary>" + ley["titulo"] + "</summary>" + ley["contenido"];
                contenido_der.appendChild(detail);
            });
            contenido.appendChild(contenido_der);
        });
        contenido_der.appendChild(boton);
    });

}

function main(){
    /*Agregar las funcionalidades a los botones con el estilo ES6 */
    document.querySelector("#boton_inicio").addEventListener("click", cargarInicio);
    document.querySelector("#boton_quienes_somos").addEventListener("click", cargarQuienesSomos);
    cargarViolencias();
    /*Evita el bug de agregar multiples elementos cuando se da click en atras*/
    window.onbeforeunload = cargarInicio;
}

main();