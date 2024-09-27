
class Habitacion {
    constructor(numero, tipo, disponible = true) {
        this.numero = numero;
        this.tipo = tipo;
        this.disponible = disponible;
    }

    alquilar() {
        if (this.disponible) {
            this.disponible = false; // Cambia el estado de la habitacion no disponible en este caso un boolean False
            console.log(`Esta Habitacion con el ${this.numero} ha sido alquilada.`);
        } else {
            console.log(`Esta Habitacion con el ${this.numero} ya está alquilada.`);
        }
    }

    liberar() {
        if (!this.disponible) {
            this.disponible = true; // Cambia el estado de la habitacion disponible a liberada en este caso un boolean True
            console.log(`Esta Habitacion con el  ${this.numero} ha sido liberada.`);
        } else {
            console.log(`Esta Habitacion con el ${this.numero} ya está disponible.`);
        }
    }

    toString() {
        const estado = this.disponible ? "disponible" : "ocupada"; // Escribe el estado de la habitacion si esta disponible o ocupada 
        return `Habitación ${this.numero} - Tipo: ${this.tipo} - Estado: ${estado}`;
    }
}


class Hotel {
    constructor() {
        this.habitaciones = []; // Array para almacenar las habitaciones del hotel
    }

    agregarHabitacion(habitacion) {
        this.habitaciones.push(habitacion);
    }

    mostrarHabitacionesDisponibles() {
        console.log("Habitaciones disponibles:");
        this.habitaciones.forEach(habitacion => {
            if (habitacion.disponible) {
                console.log(habitacion.toString()); // Muestra las habitaciones disponibles
            }
        });
    }

    alquilarHabitacion(numero) {
        const habitacion = this.habitaciones.find(hab => hab.numero === numero); // Se encarga de buscar la habitación por número para alquilar
        if (habitacion) {
            habitacion.alquilar();
        } else {
            console.log(`No se encontró la habitación con número ${numero}.`);
        }
    }

    liberarHabitacion(numero) {
        const habitacion = this.habitaciones.find(hab => hab.numero === numero); // Se hace el mismo proceso la habitación por número para liberar
        if (habitacion) {
            habitacion.liberar();
        } else {
            console.log(`No se encontró la habitación con número ${numero}.`);
        }
    }
}


const hotel = new Hotel(); // Creamos la instancia Hotel para almacenar todos los datos


hotel.agregarHabitacion(new Habitacion(101, "simple")); // Agregamos 4 habitaciones con su numero y tipo 
hotel.agregarHabitacion(new Habitacion(102, "doble"));
hotel.agregarHabitacion(new Habitacion(103, "suite"));
hotel.agregarHabitacion(new Habitacion(104, "doble"));


hotel.mostrarHabitacionesDisponibles(); // Lista de las habitaciones disponibles


hotel.alquilarHabitacion(101); // Alquilamos las dos habitaciones 101 y 103
hotel.alquilarHabitacion(103);


hotel.mostrarHabitacionesDisponibles(); // Volvemos a listar para ver los cambios anteriores


hotel.liberarHabitacion(101); // Libremos la habitacion 101


hotel.mostrarHabitacionesDisponibles(); // Listamos para ver los ultimos cambios
