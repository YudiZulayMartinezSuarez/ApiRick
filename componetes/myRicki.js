export default {
    mostrarComponente() {
        const ws = new Worker("storage/wsRick.js", { type: "module" });
        
        ws.postMessage({
            module: "mostrarPersonaje",
            data: "1"
        });

        ws.addEventListener("message", (e) => {
            document.querySelector("#acavanlastarjetas").innerHTML = e.data;
            ws.terminate();
        });


    }


}