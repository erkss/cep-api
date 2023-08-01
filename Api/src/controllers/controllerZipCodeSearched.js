const knex = require('../databaseKnex/index')

module.exports = {
    
    async getZipCodeSearched(req, res) {
        try {
            const response = await knex('zip_code_searched')
            return res.json(response).status(200)

        } catch (error) {
            return res.status(400).json({ message: 'Search failed' })
        }
    },

    async getZipCodeSearchedById(req, res) {
        try {
            const { cep } = req.params
            const response = await knex('zip_code_searched')
            .select('*')
            .where({ cep });
            
            if(response.length == 0){
                return res.status(404).json({ message: 'Zip code not found' })
            }
            else{ 
                return res.status(200).json(response[0])
            }  

        } catch (error) {
            return res.status(400).json({ message: 'Search by id failed' })
        }
    },

    async addZipCodeSearched(req, res) {
        try {
            let { cep, logradouro, complemento, bairro, localidade, uf, ddd } = req.body

            await knex('zip_code_searched')
            .insert({
                cep,
                logradouro,
                complemento,
                bairro,
                localidade,
                uf,
                ddd
            })

            return res.status(200).json({ message: 'Successfully created' })

        } catch (error) {
            return res.status(400).json({ message: 'Failed to send information to the database' })
        }
    },

    async updateZipCodeSearched(req, res) {
        try {
            const { cep } = req.params
            const { newCep } = req.body
            await knex('zip_code_searched')
            .update({ cep:newCep })
            .where({ cep })

            return res.status(200).json({ message: 'Update done successfully' })

        } catch (error) {
            return res.status(400).json({ message: 'Update failed' })
        }
    },

    async deleteZipCodeSearched(req, res) {
        try {
            const { cep } = req.params
            await knex('zip_code_searched')
            .where({ cep })
            .del()

            return res.json({ message: 'Successfully deleted' })
            
        } catch (error) {
            return res.json({ message: 'Search failed' })
        }
    }
}