document.addEventListener("DOMContentLoaded", (event) => {

    function crearTarjetaProducto(producto){
        let templateColCard = `
            <div class="col">
                        <div class="card w-100">
                            <img src="${producto.urlImagen}"
                                class="card-img-top" alt="Product Image">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">Descripción...</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="h5 mb-0">${formatoMoneda(producto.precio)}</span>
                                    <div>
                                        <i class="bi bi-star-fill text-warning"></i>
                                        <i class="bi bi-star-fill text-warning"></i>
                                        <i class="bi bi-star-fill text-warning"></i>
                                        <i class="bi bi-star-fill text-warning"></i>
                                        <i class="bi bi-star-half text-warning"></i>
                                        <small class="text-muted">(4.5)</small>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer d-flex justify-content-between bg-light">
                                <button class="btn btn-primary btn-sm">Agregar al carro</button>
                                <button class="btn btn-outline-secondary btn-sm"><i class="bi bi-heart"></i></button>
                            </div>
                        </div>
                </div>
        `;

        return templateColCard;

    }
    

    function cargarProductos(productos){

        let contenedorProductos = document.getElementById("contenedor-productos");

        let listaProductosHTML = "";

        productos.forEach(producto => {
            listaProductosHTML += crearTarjetaProducto(producto);
        });

        contenedorProductos.innerHTML = listaProductosHTML;

    }

    function main(){
        cargarProductos(productos);

    }

    main();


});