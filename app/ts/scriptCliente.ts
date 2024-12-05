console.log('--------------CLIENTES--------------')
const clientes: Clientes = new Clientes();

clientes.inserir(new Cliente("Gustavo", "123456"));
clientes.inserir(new Cliente("Itallo", "123789"));
clientes.inserir(new Cliente("caiobus", "123101"));
console.log(clientes.listar());
clientes.remover("123456");
console.log(clientes.listar());