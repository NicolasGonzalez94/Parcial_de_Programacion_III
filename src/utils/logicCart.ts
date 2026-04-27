import type { Product } from "../types/productos";

const CART_KEY = "cart";

export type CartItem = {
    producto: Product;
    cantidad: number;
}

export function getCart(): CartItem[] {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as CartItem[];
}

function saveCart(cart: CartItem[]): void {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function agregarAlCarrito(producto: Product): void {
    const cart = getCart();
    const existente = cart.find((item) => item.producto.id === producto.id);
    if (existente) {
        existente.cantidad += 1;
    } else {
        cart.push({ producto, cantidad: 1 });
    }
    saveCart(cart);
}

export function calcularTotal(cart: CartItem[]): number {
    return cart.reduce((acc, item) => acc + item.producto.precio * item.cantidad, 0);
}

export function vaciarCarrito(): void {
    localStorage.removeItem(CART_KEY);
}