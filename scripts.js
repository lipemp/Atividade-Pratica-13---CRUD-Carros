let veiculos = [];

let idAtual = 1;

function cadastrarVeiculo() {
    let veiculo = {};
    veiculo.id = idAtual++; 
    veiculo.modelo = prompt("Digite o modelo do veículo");
    veiculo.marca = prompt("Digite a marca do veículo");
    veiculo.cor = prompt("Digite a cor do veículo");
    veiculo.ano = prompt("Digite o ano do veículo");
    veiculo.preco = prompt("Digite o preco do veículo");
    veiculos.push(veiculo); 
}

function listarVeiculos() {
    veiculos.sort((a, b) => a.preco - b.preco);
    for(let i = 0; i < veiculos.length; i++) {
        alert(`ID: ${veiculos[i].id} | Modelo: ${veiculos[i].modelo} | Marca: ${veiculos[i].marca} | Ano: ${veiculos[i].ano} | Cor: ${veiculos[i].cor} | Preço: R$${veiculos[i].preco}`)
    }
}

function filtrarVeiculosPorMarca() {
    let marca = prompt("Digite a marca que deseja filtrar:").toLowerCase();
    let veiculosFiltrados = veiculos.filter(veiculo => veiculo.marca.toLowerCase() === marca);
    veiculosFiltrados.sort((a, b) => a.preco - b.preco);
    for(let i = 0; i < veiculosFiltrados.length; i++) {
        alert(`ID: ${veiculosFiltrados[i].id} | Modelo: ${veiculosFiltrados[i].modelo} | Cor: ${veiculosFiltrados[i].cor} | Preço: R$${veiculosFiltrados[i].preco}`)
    }
}

function atualizarVeiculo() {
    let id = Number(prompt("Digite o identificador do veículo"));
    let veiculo = veiculos.find(veiculo => veiculo.id === id);
    if(veiculo) {
        veiculo.cor = prompt("Digite a nova cor do veículo");
        veiculo.preco = prompt("Digite o novo preço do veículo");
    } else {
        alert("Veiculo não encontrado");
        exibirMenu();
    }
}

function removerVeiculo() {
    let id = Number(prompt("Digite o identificador do veículo"));
    let index = veiculos.findIndex(veiculo => veiculo.id === id);
    if(index !== -1) {
        veiculos.splice(index, 1);
    } else {
        alert("Veiculo não encontrado");
        exibirMenu();
    }
}

function sairDoSistema() {
    alert("Você saiu do sistema");
}

function exibirMenu() {
    let menus;
    while (menus !== 6) {
    alert(`Bem-vindo o nosso sistema, temos ${veiculos.length} carros cadastrados\nEscolha uma das opções para prosseguir sua interação com o sistema:`);
    menus = Number(prompt("1 - Cadastrar veículo.\n2 - Listar todos os veículos cadastrados.\n3 - Filtrar veículos.\n4 - Atualizar veículos.\n5 - Remover algum veículo.\n6 - Sair do sistema."));
        switch(menus) {
            case 1:
                cadastrarVeiculo();
                break;
            case 2:
                listarVeiculos();
                break;
            case 3:
                filtrarVeiculosPorMarca();
                break;
            case 4:
                atualizarVeiculo();
                break;
            case 5:
                removerVeiculo();
                break;
            case 6:
                sairDoSistema();
                break;
            default:
                alert("Opção inválida");
        }
    }
}

exibirMenu();