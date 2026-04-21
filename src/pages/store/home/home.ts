import { categorias, PRODUCTS } from "../../../data/data";

const main = document.getElementById("main");



for (const c of categorias) {

    const section = document.createElement("section");
    section.innerHTML = "<h3>" + c.nombre + "</h3>";
    main?.appendChild(section);
    section.className = "categoria"


    for (const p of PRODUCTS) {


        const div = document.createElement("div");
        if (c.nombre === p.categorias[0].nombre) {
            div.innerHTML = "<h4>" + p.nombre + "</h4>"+ "<p>Descripcion: "+ p.descripcion+"</p>" +"<p>Precio: "+ p.precio+"</p>"+"<p>Stock: "+ p.stock+"</p>";
            section.appendChild(div);
            div.className = "product-card";
        }
    }

}

cuando clickea en buscar nombre === nombre de producto




