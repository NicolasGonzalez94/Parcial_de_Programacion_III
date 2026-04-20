import { PRODUCTOS, getCategories } from "../../../data/data";
import { Producto } from "../../../types/product";
import type { CartItem } from "../../../types/product";

function filterByName (products: Producto[], query: string): Producto[] {
    return products.filter (p => p.nombre.toLowerCase().includes(query.toLowerCase()));
}

function filterByCategoria (products: Producto[], query: string): Producto[] {
    if (categoryId === null) return products;
    return products.filter (p => p.categorias.some(c=> c.id === categoryId));
}

function mostrarProducts (product: Producto[]):void {
    const contenedor =document.getElementById("productos")!;

    if (product.length === 0) {
    contenedor.innerHTML = "<p>No se encontraron productos.</p>";
    return;
    }
    contenedor.innerHTML = Producto.map(p => `
        <div class="product-card">
            <h3>${p.nombre}</h3>
            <p>${p.descripcion}</p>
            <p>$${p.precio}</p>
            ${p.disponible
            ? `<button data-id="${p.id}">Agregar al carrito</button>`
            : `<span>No disponible</span>`
            }
        </div>
    `).join("");

    contenedor.querySelectorAll("button[data-id]").forEach(btn => {
        btn.addEventListener("click", () => {
        const id = String((btn as HTMLButtonElement).dataset.id);
        const product = PRODUCTOS.find(p => p.id === id)!;
        addToCart(product);
        });
    });
}

function mostrarCategorias():void {
    const contenedor = document.getElementById("categorias")!;
    const categorias = getCategorias();
}