import readlineSync from 'readline-sync';
import chalk from 'chalk';

let lista = [];
let resp = '';

const adicionarNaLista = (prop) => {
    lista.push(prop)
};

const excluirDaLista = (prop) => {
    if (prop.length == 1) {
        lista.pop()
    }
    else {
        lista = lista.filter(elemento => elemento !== prop.substr(1, prop.length - 1))
    }
}

const ordenar = () => {
    lista.sort();
};

const listar = () => {
    lista.forEach((elemento, i)=> {console.log(chalk.greenBright(`${i+1}- ${elemento}`)); });
};

while (true) {
    resp = readlineSync.question(chalk.redBright("Digite a propriedade CSS, 'SAIR' para exibir a listagem e encerrar, '!' para excluir o ultimo item da lista ou '!nome_do_item' para excluir um item especifico: "))

    if (resp.toLowerCase() == "sair") {
        ordenar();
        listar();
            break;
    }
    else if (resp.toLowerCase() !== "sair" && resp !== "") {
        if (resp[0] !== '!') {
            adicionarNaLista(resp);
        }
        else if (resp[0] == '!') {
            excluirDaLista(resp);
        }
    }
} 
