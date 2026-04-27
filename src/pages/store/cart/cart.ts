import { getCart, calcularTotal, vaciarCarrito } from "../../../utils/logicCart"; 


const container = document.getElementById("cart-container");

function renderCart(): void {
    if (!container) return;

    const cart = getCart();
    container.innerHTML = "";

    if (cart.length === 0) {
        container.innerHTML = `<p class="cart-vacio">Tu carrito está vacío. <a href="../home/home.html">Volver al catálogo</a></p>`;
        return;
    }

    const table = document.createElement("table");
    table.className = "cart-table";
    table.innerHTML = `
        <thead>
            <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
            </tr>
        </thead>
    `;

    const tbody = document.createElement("tbody");

    for (const item of cart) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${item.producto.nombre}</td>
            <td>$${item.producto.precio}</td>
            <td>${item.cantidad}</td>
            <td>$${item.producto.precio * item.cantidad}</td>
        `;
        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    container.appendChild(table);

    const total = document.createElement("p");
    total.className = "cart-total";
    total.textContent = `Total: $${calcularTotal(cart)}`;
    container.appendChild(total);

    const btnVaciar = document.createElement("button");
    btnVaciar.className = "btn-vaciar";
    btnVaciar.textContent = "Vaciar carrito";
    btnVaciar.addEventListener("click", () => {
        vaciarCarrito();
        renderCart();
    });
    container.appendChild(btnVaciar);
}

renderCart();