import checkComplete from "./components/checkComplete.js";  /* importa el archivo de la ubicacion */
import deleteIcon from "./components/deleteIcon.js";

(   ()  =>  {
    const btn = document.querySelector('[data-form-btn]');   /*  etiqueta cosntante - aunque cambie la clase, esta fijado al data atribute*/

    const createTask = (evento) =>{                                     /*  "=>": Funcion anonima que captura el ingreso de datos en el input*/
        evento.preventDefault();                                        /*  Previene el comportamiento predeterminado de los formularios */
        const input = document.querySelector('[data-form-input]');
        const value = input.value;
        const list = document.querySelector("[data-list]");
        const task = document.createElement("li");
        task.classList.add("card")
        input.value = "";                       /*  De esta manera al ingresar el dato al input, se ejecuta la accion y se borra lo ingresado*/
    
        const taskContent = document.createElement("div");
        taskContent.appendChild(checkComplete());
        const titleTask = document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerText = value;
        taskContent.appendChild(titleTask);

        task.appendChild(taskContent);   
        task.appendChild(deleteIcon());
        list.appendChild(task);                 /*  Agrega un elemento a la lista*/
    }
    btn.addEventListener("click", createTask);  /*  Captura la accion click en el boton agregar y ejecuta la funcion createTask*/
})  (); /*  OCULTA EL CODIGO PARA QUE NO ESTE AL ALCANCE DEL USUARIO. LAS FUNCIONES DE DECLARAN INMEDIATAMENTE DESPUES DE SER INVOCADAS*/