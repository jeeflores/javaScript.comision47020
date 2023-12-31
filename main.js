const contenedorProductos = document.getElementById("contenedorProductos")
const carritoProductos = document.getElementById("mostrarCarrito")
const imgCarrito = document.getElementById("imgCarrito")

class producto {
    constructor(id, nombre, precio, img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
}

const calzado1 = new producto(1,"47 Street Blanco", 58000, "img/1-streetblanco.jpg");
const calzado2 = new producto(2, "47 Street Lila", 58000, "img/2-streetlila.jfif");
const calzado3 = new producto(3, "47 Street Negro", 58000, "img/3-streetnegro.JPG");
const calzado4 = new producto(4, "kevinstons Rosa",48500,"img/4-kevinston-rosa.jpg");
const calzado5 = new producto(5,"Kevinstons Negro",48500, "img/5-kevinston-negro.jpg");
const calzado6 = new producto(6, "Kevinstons Gris",48500, "img/6-kevinston-gris.jpg");
const calzado7 = new producto(7, "Fila Rojo", 62000, "img/7-fila-rojo.jpg");
const calzado8 = new producto(8, "Fila Rosa", 62000, "img/8-fila-rosa.jpg");
const calzado9 = new producto(9, "Fila Celeste", 62000, "img/9-fila-celeste.jpg");
const calzado10 = new producto(10, "Fila Blanco", 62000, "img/10-fila-blanco.jpg");
const calzado11 = new producto(11, "Fila Negro", 62000, "img/11-fila-negro.jfif");
const calzado12 = new producto(12, "Fila Amarillo", 62000, "img/12-fila-amarillo.JPG");
const calzado13 = new producto(13, "Gummi Dorado", 50800, "img/13-gummi-dorado.JPG");
const calzado14 = new producto(14, "Gummi Negro", 50800, "img/14-gummi-negro.jpg");
const calzado15 = new producto(15, "Gummi Multicolor", 50500, "img/15-gummi-colores.jpg");
const calzado16 = new producto(16,"Gummi rosa",50800,"img/16-gummi-rosa.JPG");


const productoTienda = [calzado1,calzado2,calzado3,calzado4,calzado5,calzado6,calzado7,calzado8,
calzado9, calzado10, calzado11, calzado12, calzado13, calzado14, calzado15, calzado16];

console.log(productoTienda)








//continuar con el mostrar productos



function mostrarProductos() {
    productoTienda.forEach((producto) => {
            const card = document.createElement("div");
            card.innerHTML = `<div class = "card">
                            <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
                            <div>
                                <h5>${producto.nombre}</h5>
                                <p> $ ${producto.precio}</p>
                                <button class="Btn1" id= "boton ${producto.id}"> Agregar </button>
                            </div>
                        </div>`
                        
            contenedorProductos.appendChild(card);


            const botonCompra = document.getElementById(`boton ${producto.id}`);
            botonCompra.addEventListener("click", () => {
                mostrarCarrito(producto.id),
                    Toastify({
                        text: "Producto agregado al carrito",
                        duration: 1000,
                        gravity: "top",
                        position: "right"
                    }).showToast();
            });

        });
}
    mostrarProductos()


    
let carrito = [];



    const mostrarCarrito = (id) =>{
        const seleccionado = productoTienda.find(producto => producto.id === id)
        carrito.push(seleccionado)
        
        carrito.forEach((producto)=>{
        const cardCarrito = document.createElement("div");
        cardCarrito.innerHTML = `<div class = "cardCarrito">
                        <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
                        <div>
                            <h5>${producto.nombre}</h5>
                            <p> $ ${producto.precio}</p>
                            <button class="Btn1" id= "boton ${producto.id}"> Eliminar </button>
                        </div>
                    </div>`
        carritoProductos.appendChild(cardCarrito)
        console.log(carrito);

        localStorage.setItem("carritoGuardado",JSON.stringify(carrito))
        carrito = JSON.parse(localStorage.getItem("carritoGuardado"))
        
    })}

    imgCarrito.addEventListener("click",()=>{mostrarCarrito();})
