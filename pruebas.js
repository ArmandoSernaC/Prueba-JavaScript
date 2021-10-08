var Tregistro = document.getElementById("Tabla-registro");
var Eregistro = document.getElementById("liveAlertBtn");
var Pregistro = document.getElementById("reg-form");
var Pregistro2 = document.getElementById("reg-form2");
var infodata = document.getElementById("Info-nodata");

var lista_frutas = [];

let agregarFecha = () =>{

    let today = new Date()

    let day = today.getDay();
    let month = today.getMonth();
    let year = today.getFullYear();

    day = ('0' + day).slice(-2);
    month= ('0' + month).slice(-2);

    let date = `${day}/${month}/${year}` ;
    return date
} 


function crearFruta(id, nombre,costo){
	const fruta = {
        id: id,
	    nombre:nombre,  
	    costo:costo, 
        fecha:agregarFecha()
    };
    return fruta
}

//Permite crear y agregar un objeto a la lista
function agregarFruta(fruta){  
    lista_frutas.unshift(fruta);
}


// Permite eliminar un elemento de la lista cuyo identificador
// corresponda al pasado por parámetro. 

function eliminarFruta(id){
    for (let fruta in lista_frutas){
        //console.log(fruta )
        if (lista_frutas[fruta].id == id){
            lista_frutas.splice(fruta, 1);
        }
    }
}
 // Permite remplazar un elemento de la lista cuyo identificador
// corresponda al pasado por parámetro. 
function remplazarFruta(id, Fruta){
	for (let pfruta in lista_frutas){
        //console.log(fruta )
        if (lista_frutas[pfruta].id == id){
        lista_frutas.splice(pfruta, 1, Fruta);
        }
    }

} 


//Creación de las frutas 

//Método 1 
let fruta1 = crearFruta("ishsgdg566", "Manzana", 35347);
let fruta2 = crearFruta("rsfggtt56", "Uvas", 35347);

agregarFruta(fruta1);

//Método 2 
agregarFruta(crearFruta("7865y3k", "Pera", 58696));

let showForm = () => {
    Pregistro.style.display="block";
    infodata.style.display = "none";

}
function cancelar(){
    Pregistro.style.display="none";
    if(lista_frutas.length>0){
        cargarFrutas();
    }
    else{
        infodata.style.display = "flex";
    }
    
    
} 

function cargarFrutas(){
    
    if(lista_frutas.length>0){
        infodata.style.display = "none";
        for(let fruta in lista_frutas ){  
            let newlistaRow = Tregistro.insertRow(-1);
            let newlistaCell = newlistaRow.insertCell(0);
            newlistaCell.textContent = lista_frutas[fruta].id

            newlistaCell = newlistaRow.insertCell(1);
            newlistaCell.textContent = lista_frutas[fruta].nombre

            newlistaCell = newlistaRow.insertCell(2);
            newlistaCell.textContent = lista_frutas[fruta].costo

            newlistaCell = newlistaRow.insertCell(3);
            newlistaCell.textContent = lista_frutas[fruta].fecha

            let optionsCell = newlistaRow.insertCell(4);
            optionsCell.insertAdjacentHTML ("beforeend", `<div class="dropdown">
            <button class="btn  bg-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                </svg>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                    <button class="dropdown-item" id="info-${lista_frutas[fruta].id }">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                        </svg>
                        Información venta  
                    </button>
                </li> 
                <li>
                    <button class="dropdown-item" id="edit-${lista_frutas[fruta].id }">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                        </svg> 
                        Editar venta  
                    </button>
                </li>
                <li>
                    <button class="dropdown-item" id="delete-${lista_frutas[fruta].id }">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                        Eliminar venta 
                    </button>
                </li>             
            </ul>
        </div>` )

        }          
            
        
    } else{
        infodata.style.display = "block";
        
    }
    
}

//--------------------------------------------------------------------------------------
let eleminar1 = ()=>{
    if(lista_frutas.length>0){
       eliminarFruta(lista_frutas[0].id)
    }
 }