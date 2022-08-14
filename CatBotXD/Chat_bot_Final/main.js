function start() {
    if (annyang) {
        annyang.setLanguage("es-CO")
        annyang.start({ autoRestart: true, continuous: false }); 
        console.log("Listening...")
        annyang.addCommands(comandos);
        annyang.debug()
        document.getElementById("btn").style.display = "none"   
}
}

let bandera = false;
annyang.addCallback('soundstart', function () {
    if (!bandera){
        document.getElementById("all2").style.display="block"
        setTimeout(() => {
            voz('Bienvenido de nuevo, viajero')
            bandera = true;
        }, 1000);
    }
    console.log("sound detected")
});

annyang.addCallback('result', function () {
    console.log('sound stopped');
});


const comandos = {
    // INFORMACION

    "información": () => {
        voz("comandos de voz: qué hora es, quién te creo, qué eres, qué fecha es hoy, qué día es hoy, biodiversidad Antisana, biodiversidad Manglar Churute, biodiversidad yasuní, video Antisana, video Manglar Churute, video yasuní, Ubicación Antisana, Ubicación Manglar Churute, Ubicación yasuní, atractivos antisana, atractivos Manglar Churute, atractivos yasuní  ");
    },

    // SALUDO
    "okey pacha": () => {
        voz("Bienvenido de nuevo, viajero ");
    },

    "hey pacha": () => {
        voz("Bienvenido de nuevo, viajero");
    },

    "Buenos días pacha": () => {
        voz("Bienvenido de nuevo, viajero");
    },

    "Buenas tardes pacha": () => {
        voz("Bienvenido de nuevo, viajero");
    },

    "Buenas noches pacha": () => {
        voz("Bienvenido de nuevo, viajero");
    },
    

    // DESPEDIDA

    "Hasta mañana pacha": () => {
        voz("Hasta mañana, viajero");
        annyang.abort()
    },

    "Hasta luego pacha": () => {
        voz("Hasta luego, viajero");
        annyang.abort()
    },

    "Adios pacha": () => {
        voz("Hasta luego, viajero");
        annyang.abort()
    },

    "apágate": () => {
        voz('ok, hasta luego, viajero')
        annyang.abort();
    },

    "silencio *tiempo": tiempo => {
        voz('ok, vuelvo en' + tiempo + 'minutos');
        annyang.abort();
        setTimeout(() => {
            annyang.start();
            voz('Hola, he vuelto, ¿me extrañaste?')
        }, tiempo * 60000);
    },


    // PREGUNTAS

    "qué hora es": () => {
        var date = new Date;
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;

        voz('viajero, son las ' + strTime)
    },

    "quién te creo": () => {
        voz("Diego Hidalgo, Brayan Flores, Jhon Chasi, Brayan Gualpa ");
    },

    "qué eres": () => {
        voz("Soy tu asistente virtual de zonas protegidas, me llamo Pacha");
    },

    "qué fecha es hoy": () => {
        var date = new Date;
        var mes = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
        voz("hoy es " + date.getDate() + " de "+ mes[date.getMonth()] + "del" + date.getFullYear());
    },

    "qué día es hoy": () => {
        var date = new Date;
        var dia = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
        voz("hoy es "+ dia[date.getDay()-1]);
    },

    // ORDENES

    "cuéntame un chiste": () => {
        var chistes = ["¿Por qué las focas del circo miran siempre hacia arriba?, Porque es donde están los focos",
            "¡Estás obsesionado con la comida!, No sé a que te refieres croquetamente",
            "¿Por qué estás hablando con esas zapatillas?, Porque pone converse",
            "¿Sabes cómo se queda un mago después de comer?, magordito",
            "Me da un café con leche corto, Se me ha roto la máquina, cambio",
            "¡Camarero! Este filete tiene muchos nervios, Normal, es la primera vez que se lo comen",
            "Hola, ¿está Agustín?, No, estoy incomodín",
            "¿Cuál es la fruta más divertida?, la naranja ja ja"];

        var ran = Math.floor(Math.random() * chistes.length);
        voz(chistes[ran])
    },

    "biodiversidad Antisana": () => {
        voz("Las cifras de biodiversidad de la Reserva son notables: 418 especies de aves, 73 de mamíferos y 61 de anfibios y reptiles. La reserva cuenta con su propia especie de anfibio, el osornosapo de Antisana, miniatura de color café que habita entre las rocas del páramo, muy raro de encontrar y en peligro de extinción. En el páramo también hay osos de anteojos, cervicabras, venado de cola blanca, ciervos enanos, tapires de montaña, pumas, gatos andinos, lobos, cóndores, curiquingues, gaviotas andinas, lagartijas y guagsas.");
    }, 
    "biodiversidad Manglar Churute": () => {
        voz("En la reserva existen cinco de las siete especies de manglar reportadas en el país: mangle rojo, mangle blanco, mangle negro, mangle jelí, y mangle colorado o gateado,Es además uno de los pocos lugares del golfo donde se encuentran animales más grandes y amenazados como jaguares, tigrillos, monos aulladores, puercos saínos, cocodrilos y caimanes. ");
    },
    "biodiversidad yasuní": () => {
        voz("En el parque existen cinco más de 2.000 especies de árboles y arbustos, 204 especies de mamíferos, 610 especies de aves, 121 de reptiles, 150 de anfibios y más de 250 especies de peces. ");
    },

    "iniciate": () => {
        voz("entendido");
        location.reload();
    },

    "limpia la consola": () => {
        voz("entendido");
        console.clear();
    },

    "busca *busqueda": busqueda => {
        voz("ok, buscando " + busqueda +" para ti");
        window.open("https://www.google.com/search?q=" + busqueda)
    },
    
    "quiero escuchar *busqueda": busqueda => {
        voz("ok, buscando " + busqueda + "para ti");
        window.open("https://www.youtube.com/results?search_query=" + busqueda)
    },

    
    "video Antisana": busqueda => {
        voz("ok, buscando el video del parque nacional Antisana" + "para ti");
        window.open("https://www.youtube.com/watch?v=KiggCmLaGzg")
    },

    "video Manglar Churute": busqueda => {
        voz("ok, buscando el video de la Reserva Ecológica Manglar Churute" + "para ti");
        window.open("https://www.youtube.com/watch?v=vk7ObtRrljQ")
    },

    "video yasuní": busqueda => {
        voz("ok, buscando el video del parque nacional yasuní  " + "para ti");
        window.open("https://www.youtube.com/watch?v=19zxoOOijS4")
    },
 // Ubicacion 
    "Ubicación Antisana": busqueda => {
        voz("ok, buscando su ubicación "+" para ti");
        window.open("https://goo.gl/maps/wLBaTzgyS372ZLo16")
    },
    "Ubicación Manglar Churute": busqueda => {
        voz("ok, buscando su ubicación "+" para ti");
        window.open("https://goo.gl/maps/qvTQkCAs5w5F3zSFA")
    },
    "Ubicación yasuní": busqueda => {
        voz("ok, buscando su ubicación "+" para ti");
        window.open("https://goo.gl/maps/UT6xFR7irXDVWpuBA")
    },

    //Atractivos 
    "atractivos antisana": () => {
        voz("sus prinsipales atractivos son: Volcán Antisana (a 5.758 metros), Páramo de almohadillas, Laguna La Mica  ");
    },

    "atractivos Manglar Churute": () => {
        voz("sus prinsipales atractivos son: Laguna El Canclón ,Los bosques secos y de garúa, Flora y fauna de manglar, El estuario   ");
    },

    "atractivos yasuní": () => {
        voz("sus prinsipales atractivos son: Laguna y comunidad de Añangu, El bosque de tierra firme, Nueva Providencia   ");
    },


    "llama al *telefono": telefono => {
        voz("ok, con gusto llamando al" + telefono);
        window.open("tel:" + telefono)
    },

    "di *frase": frase => {
        voz(frase);
    },
    "escribe *dicto": dicto =>{
        document.getElementById("text").innerHTML = dicto;
    },

    // AMABILIDAD

    "gracias": () => {
        voz("Para servirte");
    },

    "ulala": () => {
        voz('Me hace sonrojar, viajero')
    },

    "Cómo estás": () => {
        voz('mejor que ayer, espero que usted tambien lo esté, viajero')
    },

    "Te presento a *nombre": nombre => {
        voz("Hola" + nombre +", mi nombre es pacha, es un placer conocerte");
    },

    // LLAMADA A LA ACCIÓN
    
    "pacha": () => {
        voz("aquí estoy, viajer");
    },

    "Hey": () => {
        voz("aquí estoy, viajero");
    },

    "Hola": () => {
        voz("aquí estoy, viajero");
    },

    "Me puedes ayudar": () => {
        voz("claro que sí");
    },

    "Oye": () => {
        voz("aquí estoy, viajero");
    },

    "Estás ahí": () => {
        voz("aquí estoy, viajero");
    }

}

function voz(texto) {
    document.getElementById("all2").style.visibility = "hidden";
    var textoAEscuchar = texto;
    var mensaje = new SpeechSynthesisUtterance();
    mensaje.text = textoAEscuchar;
    mensaje.volume = 1;
    mensaje.rate = 0.9;
    mensaje.pitch = 1;
    // ¡Parla!
    document.getElementById("all").style.visibility = "visible";
    setTimeout(() => {
        document.getElementById("all").style.visibility = "hidden";  
        document.getElementById("all2").style.visibility = "visible";      
    }, 4000);
    speechSynthesis.speak(mensaje);
}