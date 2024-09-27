
class Plato {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    toString() {
        return `${this.nombre}: $${this.precio.toFixed(2)}`;
    }
} 


class Menu {
    constructor() {
        this.platos = [];
        // Arreglo para platos
    }

    agregarPlato(plato) {
        this.platos.push(plato);
    }

    mostrarMenu() {
        this.platos.forEach(plato => {
            console.log(plato.toString());
        });
        // Se recorre el arreglo con forEach y lo escribimos con toString
    }
}


class Pedido {
    constructor(numeroMesa) {
        this.numeroMesa = numeroMesa;
        this.platos = [];
        // Arreglo para almacenar los platos dentro de pedido
    }

    agregarPlato(plato) {
        this.platos.push(plato);
    }

    calcularTotal() {
        return this.platos.reduce((total, plato) => total + plato.precio, 0);
        // Se utiliza reduce para que tome una función que suma el valor acumulado (total) con el precio del plato actual, comenzando en 0 como valor inicial.
    }

    mostrarPedido() {
        console.log(`Pedido Realizado Para la Mesa: ${this.numeroMesa}:`);
        this.platos.forEach(plato => {
            console.log(plato.toString());
        });
        console.log(`Total a pagar: $${this.calcularTotal().toFixed(2)}`);
    }
}


class Restaurante {
    constructor() {
        this.menus = {}; 
        // Se crea un objeto literal con {} para poder ejcutar luego los metodos en este caso para agregar un plato al menu por el nombre y luego mostrar todos los nombres registrdos en el menu
        this.pedidos = {};
    }

    crearMenu(nombreMenu) {
        this.menus[nombreMenu] = new Menu();
        // Almacenamos el nombre en la instancia Menu
    }

    agregarPlatoMenu(nombreMenu, plato) {
        if (this.menus[nombreMenu]) {
            this.menus[nombreMenu].agregarPlato(plato);
            // Almacenamos el nombre de los menus agregados previamente a la instacia menu
        } else {
            console.log(`El Menú Solicitado ${nombreMenu} no se Encuentra en la Lista`);
        }
    }

    mostrarMenu(nombreMenu) {
        if (this.menus[nombreMenu]) {
            console.log(`Menú: ${nombreMenu}`);
            this.menus[nombreMenu].mostrarMenu();
            // Mostrar todos los datos de le menu
        } else {
            console.log(`El Menu Solicitado ${nombreMenu} no se Encuntra en la Lista`);
        }
    }

    crearPedido(numeroMesa) {
        this.pedidos[numeroMesa] = new Pedido(numeroMesa);
        // Almacenmos todos los pedidos dentro de la instacia Pedido
    }

    agregarPlatoPedido(numeroMesa, plato) {
        if (this.pedidos[numeroMesa]) {
            this.pedidos[numeroMesa].agregarPlato(plato);
            // Se agrega un plato
        } else {
            console.log(`No se ha Realizado Ningun Pedido para la Mesa: ${numeroMesa}.`);
        }
    }

    mostrarPedido(numeroMesa) {
        if (this.pedidos[numeroMesa]) {
            this.pedidos[numeroMesa].mostrarPedido();
            // Mostramos el pedido por realizado por un determinado numero de mesa 
        } else {
            console.log(`No se ha Realizado Ningun Pedido para la Mesa: ${numeroMesa}.`);
        }
    }
}


const restaurante = new Restaurante();
// Instacia para almacenar todos los datos relacionados

restaurante.crearMenu("Desayuno"); // Se crea un menu Desayuno
restaurante.agregarPlatoMenu("Desayuno", new Plato("Sandwitch", 5.50)); // Agregamos estos platos tiendo en cuenta los campos nombre y precio
restaurante.agregarPlatoMenu("Desayuno", new Plato("Café Negro", 2.00));

restaurante.crearMenu("Almuerzo"); // Se crea un menu Almuerzo
restaurante.agregarPlatoMenu("Almuerzo", new Plato("Hamburguesa", 8.00));// Agregamos estos platos tiendo en cuenta los campos nombre y precio
restaurante.agregarPlatoMenu("Almuerzo", new Plato("Pizza Peperoni", 3.00));

restaurante.mostrarMenu("Desayuno");// Mostrar Ambos MEnus
restaurante.mostrarMenu("Almuerzo");

restaurante.crearPedido(1); // Creamos el pedido en este caso para la mesa 1 
restaurante.agregarPlatoPedido(1, new Plato("Sandwitch", 5.50)); // Agregamos ambos pedidos teniendo en cuenta el numero de la mesa creada anteriormente en este caso la 1
restaurante.agregarPlatoPedido(1, new Plato("Café Negro", 2.00));


restaurante.mostrarPedido(1);
