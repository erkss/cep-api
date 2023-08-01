const knex = require('../databaseKnex/index');

module.exports = {
    
    async getZipCodeSearchedById(cep) {
        try {
            const response = await knex('zip_code_searched')
            .select('*')
            .where({ cep });

            if(response.length == 0) {
                return 'Zip code not found'
            }
            else {
                return response[0]
            }
            
        } catch (error) {
            return 'Search by id failed'
        }
    },

    async addZipCodeSearched(res) {
        try {
            let { cep, logradouro, complemento, bairro, localidade, uf, ddd } = res
                  
            await knex('zip_code_searched')
            .insert({
                cep:cep,
                logradouro:logradouro,
                complemento:complemento,
                bairro:bairro,
                localidade:localidade,
                uf:uf,
                ddd:ddd
            })

            return 'Successfully created'

        } catch (error) {
            return 'Failed to send information to the database'
        }
    }
}