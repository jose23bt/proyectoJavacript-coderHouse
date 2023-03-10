
const gracias = "Muchas Gracias! ";
const elPrecio = " Tu viaje tendra un costo de $ ";
const whatsapp = " Pesos. Por favor dale aceptar para ser redirecionado a nuestro Whatsapp y poder concretar tu solicitud.";
const nombreUsuario = prompt("¡Hola! Estamos contentos de que te comuniques con nosotros, ¿Cual es tu nombre?")


let salir = false;

alert(`¡Hola!👋 ${nombreUsuario} Gracias por contactar Wolves Logística y Mensajería. Nuestro horario de atención es de 9:00 am a 6:00 pm, de lunes a viernes🕑`)

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
            let kilometraje = parseInt(prompt("¿Cuantos Kilometros son el recorrido del paquete?"))
            if (kilometraje >= 0) {
                alert(gracias + nombreUsuario + elPrecio + kilometraje * 100 + whatsapp);

                // Mostrar prompt con opciones de volver o ir al WhatsApp, volvera a pedir si ingresa una opcion no valida
                let opcion = 0
                do {opcion = prompt('Elija una opción:\n1. Ver cotizacion\n2. Solicitar el servicio')
               
                    if(opcion === '1') {
                    alert(gracias + nombreUsuario + elPrecio + kilometraje * 100 + whatsapp);
                    opcion = prompt('Elija una opción:\n1. Ver cotizacion\n2. Solicitar el servicio');
                    
                    }
                    else if (opcion === '2') {
                        window.location.href = "https://api.whatsapp.com/send/?phone=5491123318355&text=" + encodeURIComponent("Hola, me interesa solicitar el servicio de Wolves Logística y Mensajería. Mi nombre es " + nombreUsuario + " y quiero hacer una reserva para " + viajesProgramados + " paquetes en Zona Sur.")
                    }
                }
                while (opcion !== '1' || opcion !== '2')
            }
        }
        else if (resultadoSolicitud === "2") {
            let viajesProgramados = prompt("¿Cuantos paquetes enviarás? ");
            if (viajesProgramados > 9) {
                let zonas = prompt("¡Perfecto! ¿Qué zona es?\n\n1) 🏘️ Zona SUR \n2) 🏙️ CABA \n0) ⬅️ Volver atrás \n\n");
                if (zonas === "1") {
                    alert(gracias + nombreUsuario + elPrecio + viajesProgramados * 400 + whatsapp);
                    window.location.href = "https://api.whatsapp.com/send/?phone=5491123318355&text=" + encodeURIComponent("Hola, me interesa solicitar el servicio de Wolves Logística y Mensajería. Mi nombre es " + nombreUsuario + " y quiero hacer una reserva para " + viajesProgramados + " paquetes en CABA.");
                    break;
                } else if (zonas === "2") {
                    alert(gracias + nombreUsuario + elPrecio + viajesProgramados * 500 + whatsapp);
                    window.location.href = "https://api.whatsapp.com/send/?phone=5491123318355&text=" + encodeURIComponent("Hola, me interesa solicitar el servicio de Wolves Logística y Mensajería. Mi nombre es " + nombreUsuario + " y quiero hacer una reserva para " + viajesProgramados + " paquetes en CABA.");
                    break;
                } else if (zonas === "0") {
                    // código para volver atrás
                }
            } else if (viajesProgramados <= 9) {
                let kilometraje2 = prompt("Debes solicitar Viajes Particulares. ¿Cuantos Kilometros son el recorrido del paquete?");
                if (kilometraje2 >= 0) {
                    alert(gracias + nombreUsuario + elPrecio + kilometraje2 * 100 + whatsapp);
                    window.location.href = "https://api.whatsapp.com/send/?phone=5491123318355&text=" + encodeURIComponent("Hola, me interesa solicitar el servicio de Wolves Logística y Mensajería. Mi nombre es " + nombreUsuario + " y quiero hacer una reserva para un viaje de " + kilometraje2 + " kilómetros.");
                    break;
                }
            }
        }
        else if (resultadoSolicitud === "3") {
            const carrito = [];
            let total = 0;

            while (true) {
                const opcion = prompt("Seleccione una opción:\n1. Agregar Viaje\n2. Eliminar Viaje\n3. Cerrar Cotización\n\n" +
                    "Carrito:\n" +
                    carrito.map((item, index) => index + ") " + item.nombre + " - $" + item.precio.toFixed(2)).join("\n") +
                    "\nTotal: $" + total.toFixed(2));

                if (opcion === "1") {
                    const zona = prompt("Ingrese la zona de envío: \n1) 🏙️ CABA \n2) 🌇 Cordon 1 \n3) 🏘️ Cordon 2 \n4) 🏠 Cordon 3");
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
                    const mensaje = "Hola, me interesa solicitar el servicio de Wolves Logística y Mensajería. Mi nombre es " + nombreUsuario + " y quiero hacer una reserva para los siguientes viajes: "+carrito.map((item, index) => index + ") " + item.nombre + " - $" + item.precio.toFixed(2)).join("\n") +
                    "\n por un total de: $" + total.toFixed(2)+" pesos";
                    // construir la URL del mensaje de WhatsApp
                    const whatsappURL = "https://api.whatsapp.com/send/?phone=5491123318355&text=" + encodeURIComponent(mensaje);

                    // mostrar un mensaje de agradecimiento y redirigir a la página de WhatsApp

                    alert(gracias + nombreUsuario + elPrecio + total.toFixed(2));
                    window.location.href = whatsappURL;

                } else {
                    alert("Opción inválida. Por favor seleccione una opción válida.");
                    break;
                }
            }
        }
    }
}


