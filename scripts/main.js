"use strict";
var agente1 = {
    "id": "AG-001",
    "name": "Cristopher Stand",
    "mail": "cristopher_stand@gmail.com",
    "sector": "IT Support",
    "img": "/img/",
    "role": "Agent"
};
var usuario1 = {
    "id": "CU-002",
    "name": "Tony Darwin",
    "mail": "tony_darwin@gmail.com",
    "img": "/img/",
    "role": "Customer"
};
var chat1 = new Chat(usuario1, agente1);
chat1.newMessage(usuario1, "Hola, me gustaría pedir ayuda para mi servicio.");
chat1.newMessage(agente1, "Hola! Mi nombre es Cristopher, en que puedo ayudarte?");
chat1.newMessage(usuario1, "Encantado, soy Tony.");
chat1.newMessage(usuario1, "Quiero trasladar mi dominio, pero no se muy bien como...");
chat1.newMessage(agente1, "Genial, primero debes de conseguir la información del dominio registrado y pegar el AuthID y en la casilla.");
chat1.newMessage(usuario1, "Funciono!! Muchas gracias");
document.addEventListener("DOMContentLoaded", function () {
    chat1.readAll();
});
