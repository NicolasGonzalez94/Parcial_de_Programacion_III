import { categorias, PRODUCTS } from "../data/data";
import { agregarAlCarrito } from "./logicCart";

const main = document.getElementById("main");


export function cargarPag() {

    for (const c of categorias) {

        const section = document.createElement("section");
        section.innerHTML = "<h3>" + c.nombre + "</h3>";
        main?.appendChild(section);
        section.className = "categoria"


        for (const p of PRODUCTS) {


            const div = document.createElement("div");
            if (c.nombre === p.categorias[0].nombre) {
                div.innerHTML =
                    "<h4>" + p.nombre + "</h4>" +
                    "<p>Descripcion: " + p.descripcion + "</p>" +
                    "<p>Precio: " + p.precio + "</p>" +
                    "<p>Stock: " + p.stock + "</p>";
                const btn = document.createElement("button");
                btn.textContent = "Agregar al carrito";
                btn.addEventListener("click", () => {
                    agregarAlCarrito(p);
                });
                div.appendChild(btn);
                section.appendChild(div);
                div.className = "product-card";
            }
        }

    }
}

export function buscarProducto(s: string) {
    reload();
    let encontrado: boolean = false;
    for (const p of PRODUCTS) {
        const div = document.createElement("div");
        if (p.nombre.toLowerCase().includes(s.toLowerCase())) {
            encontrado = true;
            div.innerHTML =
                "<h4>" + p.nombre + "</h4>" +
                "<p>Descripcion: " + p.descripcion + "</p>" +
                "<p>Precio: " + p.precio + "</p>" +
                "<p>Stock: " + p.stock + "</p>";
            const btn = document.createElement("button");
            btn.textContent = "Agregar al carrito";
            btn.addEventListener("click", () => {
                agregarAlCarrito(p);
            });
            div.appendChild(btn);
            main?.appendChild(div);
            div.className = "product-card";
        } else {
            encontrado = false;
        }

    }
    if (encontrado === false) {
        alert("no se encontro el producto");
        reload();
        cargarPag();
    }


}

export function reload() {
    if (main != null) {
        main.innerHTML = "";
    }
}

export function cargarNav() {
    const nav = document.getElementById("nav");
    const todos = document.createElement("a");
    todos.textContent = "Todos";

    todos.addEventListener("click", () => {
        reload();
        cargarPag();
    });

    nav?.appendChild(todos);

    for (const c of categorias) {

        const link = document.createElement("a");
        link.textContent = c.nombre;

        link.className = "cargarNav"

        link?.addEventListener("click", () => {
            reload();
            for (const p of PRODUCTS) {


                if (p.categorias[0].nombre === c.nombre) {
                    const div = document.createElement("div");
                    div.innerHTML =
                        "<h4>" + p.nombre + "</h4>" +
                        "<p>Descripcion: " + p.descripcion + "</p>" +
                        "<p>Precio: " + p.precio + "</p>" +
                        "<p>Stock: " + p.stock + "</p>";
                    const btn = document.createElement("button");
                    btn.textContent = "Agregar al carrito";
                    btn.addEventListener("click", () => {
                        agregarAlCarrito(p);
                    });
                    div.appendChild(btn);


                    div.className = "product-card";
                    main?.appendChild(div);
                }
            }
        });

        nav?.appendChild(link);
    }
}