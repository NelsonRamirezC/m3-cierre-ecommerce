document.addEventListener("DOMContentLoaded", (event) => {

    const carrito = [
        {
            id: 1,
            cantidad: 2
        },
        {
            id: 3,
            cantidad: 4
        }
    ];

    function crearElementoListaHTML(productoCarrito){

        // BUSCAMOS EL PRODUCTO POR ID 

        let producto = productos.find(producto => producto.id == productoCarrito.id);

        let cantidad = productoCarrito.cantidad;

        let template = `
            <div class="product-card p-3 shadow-sm">
                                <div class="row align-items-center">
                                    <div class="col-md-2">
                                        <img src="${producto.urlImagen}" alt="Product" class="product-image">
                                    </div>
                                    <div class="col-md-4">
                                        <h6 class="mb-1">${producto.nombre}</h6>
                                        <p class="text-muted mb-0">Descripción...</p>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="d-flex align-items-center gap-2">
                                            <input type="number" class="quantity-input" value="${cantidad}" min="1" max="5">
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <span class="fw-bold">${formatoMoneda(producto.precio)}</span>
                                    </div>
                                    <div class="col-md-1">
                                        <i class="bi bi-trash remove-btn"></i>
                                    </div>
                                </div>
                            </div>
        
        `;

        return template;
    }

    function orderSumary(carrito){
        let subtotalPrice = 0;
        let descuentoPrice = 0;
        let envioPrice = 3990;
        let totalPrice = 0;

        const subtotalTag = document.getElementById("subtotal");
        const descuentoTag = document.getElementById("descuento");
        const envioTag = document.getElementById("envio");
        const totalTag = document.getElementById("total");


        

        carrito.forEach(productoCarrito => {
            let producto = productos.find(producto => producto.id == productoCarrito.id);

            subtotalPrice += producto.precio * productoCarrito.cantidad;
        })


        //ASIGNACIÓN DE MONTO
        subtotalTag.textContent = formatoMoneda(subtotalPrice);
        descuentoTag.textContent = formatoMoneda(descuentoPrice);
        envioTag.textContent = formatoMoneda(envioPrice);
        totalTag.textContent = formatoMoneda(totalPrice);


    }

    function cargarDetalleCarrito(carrito){



        //MOSTRAR LA CANTIDAD DE ELEMENTOS DEL CARRITO
        document.getElementById("text-cantidad-elementos").innerText = `${carrito.length} Items.`

        let contenedorDetalleCarrito = document.getElementById("contenedor-detalle-carrito");

        let elementosLista = "";
        carrito.forEach((producto)=> {
            elementosLista+= crearElementoListaHTML(producto);
        });

        contenedorDetalleCarrito.innerHTML = elementosLista;

        //MANIPULACIÓN ORDER SUMMARY
        orderSumary(carrito);
    };



    function main(){
        cargarDetalleCarrito(carrito)
    };

    main();


});