
//variables para mensajes
const gracias = "Muchas Gracias ";
const elPrecio = " Tu viaje tendra un costo de $ ";
const whatsapp = " Pesos. Por favor dale aceptar para ser redirecionado a nuestro Whatsapp y poder concretar tu solicitud.";

// REGISTRO DE USUARIOS NUEVOS Y ACCESO 

// Base de datos de usuarios
const usuario = [
    { username: 'user1', password: 'pass1' },    
];

// Función para validar si un usuario y contraseña son correctos
function validateUser(username, password) {
    // Buscar si existe un usuario con el username y password dados
    const user = usuario.find(user => user.username === username && user.password === password);

    // Si existe el usuario, se devuelve true
    if (user) {
        return true;
    }

    // Si no existe el usuario, se devuelve false
    return false;
}

// Función para registrar un nuevo usuario
function registerUser() {
    const username = prompt('Introduce un nombre de usuario:');
    const password = prompt('Crea una contraseña:');
    usuario.push({ username, password }); 
    alert(`Usuario ${username} ha sido registrado correctamente.`);
}

let option = 0;

while (option !== '3') {
    const welcomeMsg = 'Bienvenido! Seleccione una opción:\n1. Ingresar\n2. Registrarse\n3. Salir';
    option = prompt(welcomeMsg);

    switch (option) {
        case '1':
            // Pedir al usuario que introduzca su nombre de usuario
            const username = prompt('Introduce tu nombre de usuario:');

            // Pedir al usuario que introduzca su contraseña
            const password = prompt('Introduce tu contraseña:');

            // Validar si el usuario y contraseña son correctos
            if (validateUser(username, password)) {
                alert('Acceso concedido.');
                let salir = false;

                alert(username + "  ¡Hola!👋Gracias por contactar Wolves Logística y Mensajería. Nuestro horario de atención es de 9:00 am a 6:00 pm, de lunes a viernes🕑")
                
                while (!salir) {
                
                    //Mensaje de Bienvenida y opciones a elegir
                
                    const servicioSolicitado = prompt(
                        "🤓 ¡Haz tu Consulta! Ingresa el Número de la opción que deseas solicitar o presiona 'Cancelar' para salir! \n\n1) para más detalle sobre nuestros servicios📦. \n2) para ver nuestras tarifas💵. \n3) para ver horarios de búsqueda y entrega📅. \n4) solicitar viaje🛵. \n\n"
                    );
                
                    if (servicioSolicitado === null) { // Si el usuario presiona 'Cancelar', salimos del bucle.
                        salir = true;
                    }
                
                    //informaciones 
                
                    else if (servicioSolicitado === "1") {
                        alert("¡INFORMACIÓN! Ofrecemos una variedad de servicios para satisfacer sus necesidades de envío y logística incluyendo: \n\n📦 Envíos flex \n📫 envíos particulares \n🛍️ servicios de E-commerce \n🏢 almacenamiento y distribución \n💰 cobros contra entrega y \n🛵 moto mensajería empresarial. \n\nSi necesita enviar un viaje particular el mismo día, asegúrese de realizar su pedido antes de las 14:00 pm. \n\nPara cualquier otra consulta o pedido, nos estaremos comunicando para aclarar cualquier duda.");
                    }
                    else if (servicioSolicitado === "2") {
                        alert("Las tarifas para los viajes particulares se calculan por un valor de 100 pesos por kilometraje recorrido, mientras que los viajes programados o flex tienen una tarifa plana por cordón logístico. \n\n💰 CABA = 400$ \n💰 Cordón 1 = 550$ \n💰 Cordón 2 = 750$ \n💰 Cordón 3 = 800$. \n\nPara observar bien las zonas puede solicitar el mapa de los cordones en nuestro catálogo de WhatsApp o si bien desea podemos enviarle toda la información necesaria. \n\nSu cotización la puede realizar en la opcion 4 en la seccion -viajes a diferentes zonas-  Y si desea le estaremos respondiendo en la brevedad posible por whatsapp. ✅");
                    }
                    else if (servicioSolicitado === "3") {
                        alert("Horarios de Recolección y Búsqueda de paquetería: \n\n⏰ Desde las 2:00 pm a 18:00 pm. \n\nHorarios de repartos y Entregas: \n\n⏰ Desde las 8:00 am a 22:00pm. \n\nAsimismo, todos los paquetes recogidos después de las 2:00pm serán entregados a partir del día siguiente.");
                    }
                
                    //calculadora de viajes
                
                    else if (servicioSolicitado === "4") {
                        let resultadoSolicitud = prompt("¡Cotiza y solicita tu viaje! \n\n1) 📦 Para envíos particulares \n2) 🚛 Para envíos programados \n3) 🌎 Para envíos programados de diferentes zonas \n\n")
                        if (resultadoSolicitud === "1") {
                            let kilometraje = prompt("¿Cuantos Kilometros son el recorrido del paquete?")
                            if (kilometraje >= 0) {
                                alert(gracias + username + elPrecio + kilometraje * 100 + whatsapp);
                
                                // Mostrar prompt con opciones de volver o ir al WhatsApp
                                let opcion = 0
                                do {
                                    opcion = prompt('Elija una opción:\n1. Ver cotizacion\n2. Solicitar el servicio');
                
                                    // Mientras el usuario no elija una opción válida, mostrar el prompt de nuevo
                                    while (opcion !== '1' && opcion !== '2') {
                                        opcion = prompt('Elija una opción:\n1. Ver cotizacion\n2. Solicitar el servicio');
                                    }
                
                                    // Si el usuario eligió la opción de "Volver", mostrar el mensaje de nuevo y preguntar nuevamente
                                    if (opcion === '1') {
                                        alert(gracias + username + elPrecio + kilometraje * 100 + whatsapp);
                                        const opcion = prompt('Elija una opción:\n1. Ver cotizacion\n2. Solicitar el servicio');
                
                                    }
                                    // Si el usuario eligió la opción de "WhatsApp", abrir un enlace con la aplicación de WhatsApp
                                    if (opcion === '2') {
                                        window.location.href = "https://api.whatsapp.com/send/?phone=5491123318355&text=" + encodeURIComponent("Hola, me interesa solicitar el servicio de Wolves Logística y Mensajería. Mi nombre es " + username + " y quiero hacer una reserva para " + viajesProgramados + " paquetes en Zona Sur.")
                                    }
                                }
                                while (opcion !== '1' && opcion !== '2') {
                                    opcion = prompt('Por favor, elija una opción válida:\n1. Ver cotizacion\n2. Solicitar el servicio');
                                }
                            }
                        }
                        else if (resultadoSolicitud === "2") {
                            let viajesProgramados = prompt("¿Cuantos paquetes enviarás? ");
                            if (viajesProgramados > 9) {
                                let zonas = prompt("¡Perfecto! ¿Qué zona es?\n\n1) 🏘️ Zona SUR \n2) 🏙️ CABA \n0) ⬅️ Volver atrás \n\n");
                                if (zonas === "1") {
                                    alert(gracias + username + elPrecio + viajesProgramados * 400 + whatsapp);
                                    window.location.href = "https://api.whatsapp.com/send/?phone=5491123318355&text=" + encodeURIComponent("Hola, me interesa solicitar el servicio de Wolves Logística y Mensajería. Mi nombre es " + username + " y quiero hacer una reserva para " + viajesProgramados + " paquetes en CABA.");
                                    break;
                                } else if (zonas === "2") {
                                    alert(gracias + username + elPrecio + viajesProgramados * 500 + whatsapp);
                                    window.location.href = "https://api.whatsapp.com/send/?phone=5491123318355&text=" + encodeURIComponent("Hola, me interesa solicitar el servicio de Wolves Logística y Mensajería. Mi nombre es " + username + " y quiero hacer una reserva para " + viajesProgramados + " paquetes en CABA.");
                                    break;
                                } else if (zonas === "0") {
                
                                    // código para volver atrás
                                }
                            } else if (viajesProgramados <= 9) {
                                let kilometraje2 = prompt("Debes solicitar Viajes Particulares. ¿Cuantos Kilometros son el recorrido del paquete?");
                                if (kilometraje2 >= 0) {
                                    alert(gracias + username + elPrecio + kilometraje2 * 100 + whatsapp);
                                    window.location.href = "https://api.whatsapp.com/send/?phone=5491123318355&text=" + encodeURIComponent("Hola, me interesa solicitar el servicio de Wolves Logística y Mensajería. Mi nombre es " + username + " y quiero hacer una reserva para un viaje de " + kilometraje2 + " kilómetros.");
                                    break;
                                }
                            }
                        }
                        else if (resultadoSolicitud === "3") {
                            const carrito = [];
                            let total = 0;
                
                            while (true) {
                                const opcion = prompt("Seleccione una opción:\n\n1. Agregar Viaje ➕\n2. Eliminar Viaje ➖\n3. Cerrar Cotizacion y Solicitar Viaje 🤳\n\n" +
                                    "Viajes Solicitados:\n" +
                                    carrito.map((item, index) => index + ") " + item.nombre + " - $" + item.precio.toFixed(2)).join("\n") +
                                    "\nTotal: $" + total.toFixed(2));
                
                                if (opcion === "1") {
                                    const zona = prompt("Ingrese la zona de envío:\n1) 🏙️ CABA \n2) 🌇 Cordon 1 \n3) 🏘️ Cordon 2 \n4) 🏠 Cordon 3");
                                    let precio;
                                    switch (zona.toLowerCase()) {
                                        case "caba":
                                            precio = 400;
                                            break;
                                        case "cordon 1":
                                            precio = 600;
                                            break;
                                        case "cordon 2":
                                            precio = 780;
                                            break;
                                        case "cordon 3":
                                            precio = 920;
                                            break;
                                        default:
                                            alert("Zona de envío inválida. Por favor ingrese una zona válida.");
                                            continue;
                                    }
                                    carrito.push({ nombre: zona, precio: precio });
                                    total += precio;
                                } else if (opcion === "2") {
                                    const index = parseInt(prompt("Ingrese el índice del artículo que desea eliminar:"));
                                    if (isNaN(index) || index < 0 || index >= carrito.length) {
                                        alert("Índice inválido. Por favor ingrese un índice válido.");
                                    } else {
                                        total -= carrito[index].precio;
                                        carrito.splice(index, 1);
                                    }
                                } else if (opcion === "3") {
                
                                    // construir el mensaje de WhatsApp
                                    const mensaje = "Hola, me interesa solicitar el servicio de Wolves Logística y Mensajería. Mi nombre es " + username + " y quiero hacer una reserva para los siguientes viajes: " + carrito.map((item, index) => index + ") " + item.nombre + " - $" + item.precio.toFixed(2)).join("\n") +
                                        "\n por un total de: $" + total.toFixed(2) + " pesos";
                                    // construir la URL del mensaje de WhatsApp
                                    const whatsappURL = "https://api.whatsapp.com/send/?phone=5491123318355&text=" + encodeURIComponent(mensaje);
                
                                    // mostrar un mensaje de agradecimiento y redirigir a la página de WhatsApp
                
                                    alert(gracias + username + elPrecio + total.toFixed(2));
                                    window.location.href = whatsappURL;
                
                                } else {
                                    alert("Opción inválida. Por favor seleccione una opción válida.");
                                    break;
                                }
                            }
                        }
                    }
                }
            } else {
                alert('🔴 Acceso denegado 🔴');
            }
            break;
        case '2':
            registerUser();
            break;
        case '3':
            alert('¡Hasta Pronto! Esperamos Verte pronto.');
            break;
        default:
            alert('Opción no válida.');
            break;
    }
}