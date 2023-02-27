const USERS = [
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
]

type User = {
    id: string,
    name: string,
    mail: string,
    img?: string,
    role: string,
}

type Agent = {
    sector: string,
}

type Message = {
    from: (Agent & User) | User,
    msg: string
}

interface AssociativeArray {
    [key: string]: string
 }

class Chat{
    user: User;
    agent: User & Agent;
    msgHistory: Message[];

    constructor(user: User, agent: User & Agent){
        this.user = user;
        this.agent = agent;
        this.msgHistory = [];
    }

    newMessage(author: User | (User & Agent), mess: string) : void{
        let message = {
            "from": author,
            "msg": mess
        }
        this.msgHistory.push(message);
    }

    readAll(): void{
        let divChat = document.querySelector('.chatActive')

        for (const message of this.msgHistory) {
            let mensaje = document.createElement("div");
            mensaje.classList.add("message")
            message.from?.role === "Agent" ? mensaje.classList.add("agent") : mensaje.classList.add("user");
            mensaje.innerText = message.msg;
            divChat?.appendChild(mensaje);
        }
    }
}