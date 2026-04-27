import { cargarNav, cargarPag } from "../../../utils/logicHome";
import { buscarProducto } from "../../../utils/logicHome";

cargarNav ();
cargarPag();




const form = document.getElementById("search") as HTMLFormElement;

form?.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    
    const formData= new FormData(form);

    const input= formData.get("producto") as string;
    
    if (input!=null) {
        buscarProducto(input);
        
        

    }
}
);