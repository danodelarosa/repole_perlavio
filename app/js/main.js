function cargarInicio(){
    /*Vuelve a cargar la página de inicio*/
    window.location.href = "index.html";
}

function cargarQuienesSomos(){
    let titulo = "¿QUIÉNES SOMOS?";
    let sub_titulo = "INFORMACIÓN DEL REPOSITORIO"
    let contenido = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo con Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo conLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo con Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo con"
    document.querySelector("#titulo h1").textContent = titulo;
    dom_contenido = document.querySelector("#contenido");
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

function main(){
    console.log("Hola mundo");
}

main();