const boton = document.querySelector("#buscar")
const caja = document.querySelector("#caja")
const buscador = document.querySelector("#buscador")

const showQueryPokemon= async ()=>{

    let peticion = await fetch("https://rickandmortyapi.com/api/character/?name");
    let data = await peticion.json();
    console.log(data);
    return data;    
}

boton.addEventListener("click", async ()=>{
    const cajarick = await showQueryPokemon(caja.vaule);
    console.log(cajarick);
    cajarick.results.forEach(element => {    
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML =`
        <div class="col-3">
            <div class="card" style="width: 18rem;">
            <img src="${element.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <p class="card-text">${element.name}</p>
            </div>
            </div>            
        </div>
        `;
        caja.appendChild(card)    
        
    })