const checkComplete = ()=>{
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);

    return i;
};

const completeTask = (event) =>{                /*  Cambia el estado de las tareas  */
    const element = event.target;
    element.classList.toggle("fas");            /*  toggle: Verifica si exite o no la clase, si exite la borro, si no existe la agrega*/
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
}


export default checkComplete;   /* Exporta el archivo para su utilizacion */