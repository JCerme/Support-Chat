"use strict";
var USERS = [
    {
        "id": "AG-001",
        "name": "Cristopher Stand",
        "mail": "cristopher_stand@gmail.com",
        "sector": "IT Support",
        "img": "/img/",
        "role": "Agent"
    },
    {
        "id": "AG-002",
        "name": "Samantha Nicolas",
        "mail": "samantha_nicolas@gmail.com",
        "sector": "Marketing Manager",
        "img": "/img/",
        "role": "Agent"
    },
    {
        "id": "AG-003",
        "name": "Richard Smith",
        "mail": "richard_smith@gmail.com",
        "sector": "Software Development",
        "img": "/img/",
        "role": "Agent"
    },
    {
        "id": "CU-001",
        "name": "Edwart Hoskinson",
        "mail": "edwart_hoskinson@gmail.com",
        "img": "/img/",
        "role": "Customer"
    },
    {
        "id": "CU-002",
        "name": "Tony Darwin",
        "mail": "tony_darwin@gmail.com",
        "img": "/img/",
        "role": "Customer"
    },
    {
        "id": "CU-003",
        "name": "Joseph Karen",
        "mail": "joseph_karen@gmail.com",
        "img": "/img/",
        "role": "Customer"
    }
];
var Chat = /** @class */ (function () {
    function Chat(user, agent) {
        this.user = user;
        this.agent = agent;
        this.msgHistory = [];
    }
    Chat.prototype.newMessage = function (author, mess) {
        var message = {
            "from": author,
            "msg": mess
        };
        this.msgHistory.push(message);
    };
    Chat.prototype.readAll = function () {
        var _a;
        var divChat = document.querySelector('.chatActive');
        for (var _i = 0, _b = this.msgHistory; _i < _b.length; _i++) {
            var message = _b[_i];
            var mensaje = document.createElement("div");
            mensaje.classList.add("message");
            ((_a = message.from) === null || _a === void 0 ? void 0 : _a.role) === "Agent" ? mensaje.classList.add("agent") : mensaje.classList.add("user");
            mensaje.innerText = message.msg;
            divChat === null || divChat === void 0 ? void 0 : divChat.appendChild(mensaje);
        }
    };
    return Chat;
}());
