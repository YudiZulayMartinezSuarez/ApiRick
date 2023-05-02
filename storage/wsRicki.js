let wsSpaceX ={
    async mostrarPersonaje(pagina){
        let peticion = await fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`);
        let data = await peticion.json();
        console.log(data);
        let html = ``;  

        data.results.forEach(element => {    
            html += `
            <div class="col-3 py-2">
            <div class="card" style="width: 18rem;">
                <img src="${element.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${element.name}</h5>      
                  <a href="#" class="btn btn-secondary">Mas info</a>
                </div>
              </div>       
        </div>
            `
        });

        return html;

    }
}

self.addEventListener("message", async (e) => {
    postMessage(await wsSpaceX[`${e.data.module}`](e.data.data));
  });