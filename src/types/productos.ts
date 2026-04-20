export interface productos {
    id: string;
    eliminado: boolean;
    nombre: string;
    precio: number;
    descripcion: string;
    stock: number;
    categorias: ICategory[];
}

export interface CartItem {
    product: productos;   
    cantidad: number;   
}