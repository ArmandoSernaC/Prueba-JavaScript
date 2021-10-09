
// Declaración de constantes que permiten la comunicación de JS Con el DOM

// Tabla donde se registra la información 
const Tregistro = document.getElementById("Tabla-registro");

// Paneles de formularios (registrar y editar)
const  Pregistro = document.getElementById("reg-form");
const  Peditar = document.getElementById("edit-form");

// Panel de info - no data
const  infodata = document.getElementById("Info-nodata");


// Formularios  registro
const  formFrutareg = document.getElementById("infofrutaFormReg");
const  formClientereg = document.getElementById("infoClientFormReg");

// Formularios  editar
const  formFrutaedit = document.getElementById("infofrutaFormEdit");
const  formClientedit = document.getElementById("infoClientFormEdit");


// panel Confirmaciones
 


const BtnBuscar = document.getElementById("buscarBtn1")
// Declaración de funciones  

// Funciones Agregar/Registrar Fruta -----------------------------------------------------------------
// Creación lista contenido

var lista_frutas = [];

// Función que permite crear un objeto fruta a partir de la información de los formularios
function crearFruta(form1,form2 ,type){
    let fruta = {};
    if(type == 1){
        fruta = {

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
    }else if(type == 2){
        fruta = {

            id: form1.get("idfrutEdit"),
            namefruit:form1.get("namefrutaEdit"),
            Unitcost:form1.get("unitCostEdit"),
            amount: form1.get("cantidadEdit"),
            totalCost:form1.get("totalCostEdit"),
            nameClient: form2.get("nameclientEdit"),
            idClient:form2.get("idclientEdit"),
            seller:form2.get("vendedorEdit"),
            fecha:agregarFecha()
        };
    }
	
     
    return fruta
}


//Permite agregar un objeto fruta a la lista
function agregarFruta(fruta){  
    lista_frutas.unshift(fruta);

}

function registrarFruta(Form1,Form2){
    let fruta = crearFruta(Form1,Form2,1)
    lista_frutas.unshift(fruta)
    insertarFruta(fruta)
    swal("Muy bien!", "El registro se guardó correctamente!", "success");
}


// Función que permite conocer la fecha en la que se registra una fruta
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

//Función que permite insetar un registro en la tabla, y mostrarla en el documento
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


        newlistaCell = newlistaRow.insertCell(5);
        newlistaCell.textContent = fruta.namefruit

        let optionsCell = newlistaRow.insertCell(6);
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

    // Captura el evento que permite ver la información addicional de las frutas
    let  botoneinfo = document.getElementById(`info-${fruta.id }`)



    // Captura el evento que permite editar la información frutas
    let  botoneditar = document.getElementById(`edit-${fruta.id }`)

    botoneditar.addEventListener("click", (event1) =>{
        showForm2()
        autocompletarForm(fruta.id)
        } 
    )


    // Captura el evento que permite eliminar una Fruta
    let  botoneborrar = document.getElementById(`delete-${fruta.id }`)

    botoneborrar.addEventListener("click", (event) =>{                
        eliminarFruta(fruta.id)
        } 
    )

    return fruta

}


// Captura el evento que permite registrar la fruta 
formClientereg.addEventListener("submit", function(event){

                event.preventDefault();
                
                let form1 = new FormData(formFrutareg);
                let form2 = new FormData(formClientereg);  
                
                registrarFruta(form1,form2);                
                
                
                
            }
        )

// Función que permite ver la confirmación del registro  o de la edicción de la fruta



// Funciones Editar info  -----------------------------------------------------------------------------------------------------------------------------------------

// Permite eliminar un elemento de la lista cuyo identificador
// corresponda al pasado por parámetro. 

function eliminarFruta(id){

    swal({
        title: "Estás seguro?",
        text: "Una vez eliminado, no podrás recuperar el registro!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            
    for (let fruta in lista_frutas){
        //console.log(fruta )
        if (lista_frutas[fruta].id == id){
            lista_frutas.splice(fruta, 1);
            if (lista_frutas.length==0){
                infodata.style.display="flex";
            }
        }
    }
    document.getElementById(`delete-${id }`).parentNode.parentNode.parentNode.parentNode.parentNode.remove()     

          swal("Poof! El registro ha sido eliminado!", {
            icon: "success",
          });
        } 
      });
     
}

 // Permite remplazar un elemento de la lista cuyo identificador
// corresponda al pasado por parámetro. 

function remplazarFruta(form3,form4){

    let fruta = crearFruta(form3,form4,2);

	for (let pfruta in lista_frutas){
        //console.log(fruta )
        if (lista_frutas[pfruta].id == fruta.id){
            lista_frutas.splice(pfruta, 1,fruta);
        }
    }

    
    document.getElementById(`delete-${fruta.id }`).parentNode.parentNode.parentNode.parentNode.parentNode.remove();
    insertarFruta(fruta);
    //swal("Muy bien!", "El registro se modificó correctamente!", "success");
    Peditar.style.display = "none";

} 

//Función que permite auto completar el formulario de editar

let autocompletarForm = (id)=>{

    let infofruta = [];
    for (let i in lista_frutas){
        if(lista_frutas[i].id == id){
            infofruta = lista_frutas[i]
        }
    }

    document.getElementById("idfrutEdit").value = infofruta.id; 
    document.getElementById("namefrutaEdit").value = infofruta.namefruit
    document.getElementById("unitCostEdit").value = infofruta.Unitcost
    document.getElementById("cantidadEdit").value = infofruta.amount
    document.getElementById("totalCostEdit").value = infofruta.totalCost

    document.getElementById("idclientEdit").value = infofruta.idClient;
    document.getElementById("nameclientEdit").value = infofruta.nameClient;
    document.getElementById("vendedorEdit").value = infofruta.seller;

}


// Funciones que permiten mostrar los paneles de registro y editar

// panel registro
let showForm = () => {
    Pregistro.style.display="block";
    infodata.style.display = "none";

}

// panel editar
let showForm2 = () => {
    Peditar.style.display="block";
    infodata.style.display = "none";

}

// Función que nos permite cerrar los paneles de registro y editar
function cancelar(){

    Pregistro.style.display="none";
    Peditar.style.display="none";

    if(lista_frutas.length>0){
        
    }
    else{
        infodata.style.display = "flex";
    }
    
    
} 


formClientedit.addEventListener("submit", function(event){

    event.preventDefault();

    swal({
        title: "Estás seguro?",
         
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willedit) => {
        if (willedit) {
        let form3 = new FormData(formFrutaedit);
        let form4 = new FormData(formClientedit);   
        remplazarFruta(form3,form4);
          swal("El registro ha sido modificado!", {
            icon: "success",
          });
        }  
      });
    
    
                    
    
    
    
}
)
// Funcion que nos permite limpiar la tabla
function limpiarTabla(){ 
    let numRow = document.getElementById("prueba").childElementCount
    for( let i = 1; i< numRow; i++){
        Tregistro.deleteRow(1)
        }
    
}

// Función que permite carga tabla completa 

function cargarFrutas(){

    limpiarTabla()
    if(lista_frutas.length>0){
        for(let i =lista_frutas.length-1; i>=0;i--) {
            insertarFruta(lista_frutas[i])
        }
    } else{
        infodata.style.display = "flex";
        
    }
    
}

// Función Buscar fruta 
//--------------------------------------------------------------------------------------
let busqueda = (keyWord)=>{
    for(let fruta in lista_frutas){
        if(lista_frutas[fruta].id == keyWord || lista_frutas[fruta].nameClient  == keyWord ){
            limpiarTabla()
            insertarFruta(lista_frutas[fruta] )
            }
        }
    }

let crearBtnLimpiar = ()=>{
    BtnBuscar.id = "limpiar";
    BtnBuscar.innerHTML = "limpiar busqueda"
}


if(BtnBuscar){

    BtnBuscar.addEventListener("click", (event)=>{
        if(BtnBuscar.id == "limpiar"){
            BtnBuscar.id = "buscarBtn1";
            BtnBuscar.innerHTML = `<div class="px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                            </div>
                            <span class="align-self-center px-1">
                            Buscar
                            </span>`;
            cargarFrutas()
        } else{
            let keyWord = document.getElementById("barrabusqueda").value
            busqueda(keyWord)
            crearBtnLimpiar()
        }
        
    })
}

 