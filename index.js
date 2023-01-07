class cliente {
    nome; 
    cpf;
    agencia;
    saldo;
}

const cliente1 = new cliente(); //chamando a classe//
const cliente2 = new cliente();

// o cliente 1 e 2 são os obejtos enquanto a classe (class) é o molde//

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1, cliente2)