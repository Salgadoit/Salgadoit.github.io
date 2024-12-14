var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

//Comentarios
typewriter.typeString('Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Si lo puede imaginar, lo puedes crear!')
    .pauseFor(2500)
    //Nun de caracteres que se van a borrar
    .deleteChars(6)
    .typeString('<strong>programar!</strong>')
    .pauseFor(2500)
    .start();