const { default: knex } = require("knex")

exports.up = knex => knex.schema.createTable('zip_code_searched', table => {

    table.string('cep').primary();
    table.string('logradouro');
    table.string('complemento');
    table.string('bairro');
    table.string('localidade');
    table.string('uf');
    table.string('ddd');
})

exports.down = knex => knex.schema.dropTable('zip_code_searched')
