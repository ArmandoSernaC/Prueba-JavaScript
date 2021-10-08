const Tregistro = document.getElementById("Tabla-registro");
const  Eregistro = document.getElementById("liveAlertBtn");
const  Pregistro = document.getElementById("reg-form");
const  Pregistro2 = document.getElementById("reg-form2");
const  infodata = document.getElementById("Info-nodata");
const  formFrutareg = document.getElementById("infofrutaFormReg");
const  formClientereg = document.getElementById("infoClientFormReg");
const  AlertPlaceholder = document.getElementById("liveAlertPlaceholder");

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


function crearFruta(form1,form2){
	const fruta = {

        id: form1.get("idfrutreg"),
	    namefruit:form1.get("namefrutareg"),
	    Unitcost:form1.get("unitCostreg"),
        amount: form1.get("cantidadreg"),
        totalCost:form1.get("totalCostreg"),
        nameClient: form2.get("nameclientreg"),
        idClient:form2.get("idclientreg"),
        seller:form2.get("vendedorreg"),
        fecha:agregarFecha()
    };
    return fruta
}

//Permite crear y agregar un objeto a la lista
function agregarFruta(fruta){  
    lista_frutas.unshift(fruta);

}

function registrarFruta(form1, form2){

    let fruta = crearFruta(form1,form2);
    agregarFruta(fruta)
    insertarFruta(fruta)
}

formClientereg.addEventListener("submit", function(event){
                event.preventDefault();
                let form1 = new FormData(formFrutareg);
                let form2 = new FormData(formClientereg);
                registrarFruta(form1,form2);                
                
                
                
            }
        )


function alert(message, type) {
    var wrapper = document.createElement('div')
        wrapper.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </symbol>
        <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
        </symbol>
        <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </symbol>
      </svg>
      <div class="alert alert-${type} d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
        <div>
          ${message}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </div>`
        
        //AlertPlaceholder.append(wrapper)
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
// let fruta1 = crearFruta("ishsgdg566", "Manzana", 35347);
// let fruta2 = crearFruta("rsfggtt56", "Uvas", 35347);

// agregarFruta(fruta1);

//Método 2 
// agregarFruta(crearFruta("7865y3k", "Pera", 58696));

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
function limpiarTabla(){

    Tregistro.getElementById("Tablebody").innerHTML=""
}

function insertarFruta(fruta){

        infodata.style.display = "none"; 
        Pregistro.style.display= "none"; 
        formClientereg.reset();
        formFrutareg.reset();           
            let newlistaRow = Tregistro.insertRow(1);
            let newlistaCell = newlistaRow.insertCell(0);
            newlistaCell.textContent = fruta.id

            newlistaCell = newlistaRow.insertCell(1);
            newlistaCell.textContent = fruta.nameClient

            newlistaCell = newlistaRow.insertCell(2);
            newlistaCell.textContent = fruta.seller

            newlistaCell = newlistaRow.insertCell(3);
            newlistaCell.textContent = fruta.totalCost

            newlistaCell = newlistaRow.insertCell(4);
            newlistaCell.textContent = fruta.fecha

            let optionsCell = newlistaRow.insertCell(5);
            optionsCell.insertAdjacentHTML ("beforeend", `<div class="dropdown">
            <button class="btn  bg-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                </svg>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                    <button class="dropdown-item" id="info-${fruta.id }">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                        </svg>
                        Información venta  
                    </button>
                </li> 
                <li>
                    <button class="dropdown-item" id="edit-${fruta.id }">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                        </svg> 
                        Editar venta  
                    </button>
                </li>
                <li>
                    <button class="dropdown-item" id="delete-${fruta.id }">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                        Eliminar venta 
                    </button>
                </li>             
            </ul>
        </div>` )


        //Eventos
        let  botoneinfo = document.getElementById(`info-${fruta.id }`)
        let  botoneditar = document.getElementById(`edit-${fruta.id }`)

        botoneditar.addEventListener("click", (event1) =>{
            showForm()
            } 
        )

        let  botoneborrar = document.getElementById(`delete-${fruta.id }`)

        botoneborrar.addEventListener("click", (event) =>{
            event.target.parentNode.parentNode.parentNode.parentNode.parentNode.remove()             
            eliminarFruta(fruta.id)
            } 
        )

    }

function cargarFrutas(){
   // limpiarTabla();
    if(lista_frutas.length>0){
        lista_frutas.forEach(insertarFruta(fruta))          
        
    } else{
        infodata.style.display = "flex";
        
    }
    
}

//--------------------------------------------------------------------------------------
 
