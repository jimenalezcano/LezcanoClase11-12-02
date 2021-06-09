
//Creo constructor para objeto usuario
class User {
    constructor(nombre, apellido, nombreUser, documento, email, barrio, direccion, pago) {
        this.nombre = nombre; 
        this.apellido = apellido;
        this.nombreUser = nombreUser;
        this.documento = documento;
        this.email = email;
        this.barrio = barrio;
        this.direccion = direccion;
        this.pago = pago;

}};


//Creo funcion para cargar datos de Usuario en el LocalStorage
function registrarUser() {
      let nombre = $("#nombres").val();
      let apellido = $("#apellido").val();
      let nombreUser = $("#nombreUser").val();
      let documento = $("#dni").val();
      let email = $("#email").val();
      let barrio = $("#barrio").val();
      let pago = $("#pago").val();
       console.log(nombres,apellido);
     const nuevoUser = new User(nombre, apellido, nombreUser, documento, email, barrio, pago)

    var etiquetasDom = [];

    etiquetasDom.push(nuevoUser);

    document.querySelector("#datosDom").innerHTML =
        `Bienvenido a FarmaWeb ${nuevoUser.nombre} ${nuevoUser.apellido} ,su usuario ${nuevoUser.nombreUser} se registro con exito!`;

    var regUser = JSON.stringify(nuevoUser);
    localStorage.setItem("Usuario", regUser);
    console.log("Se guardo el cliente en LocalStorage")
    console.log("Se registraron los siguientes datos del cliente  " + nuevoUser.nombre + nuevoUser.apellido + nuevoUser.nombreUser)

}
