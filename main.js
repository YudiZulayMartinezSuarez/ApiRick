const boton = document.querySelector("#buscar")
const caja = document.querySelector("#caja")
const buscador = document.querySelector("#buscador")

const showQueryPokemon= async ()=>{

    let peticion = await fetch(`https://rickandmortyapi.com/api/character/?name`);
    let data = await peticion.json();
    console.log(data);
    return data;    
}
const showQueryPokemonid= async (id)=>{

    let peticionid = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    let dataid = await peticionid.json();
    console.log(dataid);
    return dataid;    
}

(async () => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name`);
      const data = await response.json();
      console.log(data);
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
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  })();
  

boton.addEventListener("click", async ()=>{
    const cajarickid = await showQueryPokemonid(buscador.vaule);
    /* cajarick.results.forEach(element => {     */
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML =`
        <div class="col-3">
            <div class="card" style="width: 18rem;">
            <img src="${cajarickid.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <p class="card-text">${cajarickid.name}</p>
            </div>
            </div>            
        </div>
        `;
        caja.appendChild(card)    
        
    })