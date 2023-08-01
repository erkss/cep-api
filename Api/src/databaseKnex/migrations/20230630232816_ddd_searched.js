const { default: knex } = require("knex")

exports.up = knex => knex.schema.createTable('ddd_searched', table => {
    
    table.increments('id');
    table.string('cep_id').references('zip_code_searched.cep');
    table.string('uf_id');
    table.string('ddd_id');
})

exports.down = knex => knex.schema.dropTable('ddd_searched')