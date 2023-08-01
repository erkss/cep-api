const knex = require('../databaseKnex/index')

module.exports = {

    async getDDDSearched(req, res) {
        try {
            const response = await knex('ddd_searched')
            return res.status(200).json(response)

        } catch (error) {
            return res.status(400).json({ message: 'Search failed' })
        }
    },
    
    async getDDDSearchedById(req, res) {
        try {
            const { ddd_id } = req.params
            const response = await knex('ddd_searched')
            .select('*')
            .where({ ddd_id })

            if(response.length == 0) {
                return res.status(404).json({ message: 'Area code not found' })
            } else {
                return res.status(200).json(response)
            }

        } catch (error) {
            return res.status(400).json({ message: 'Search by id failed' })
        }
    },

    async addDDDSearched(req, res) {
        try {
            let { cep_id, uf_id, ddd_id } = req.body 
            
            await knex('ddd_searched')
            .insert({
                cep_id,
                uf_id,
                ddd_id
            })
            
            return res.status(200).json({ message: 'Successfully created' })

        } catch (error) {
            return res.status(400).json({ message: 'Failed to send information to the database' })
        }
    },

    async updateDDDSearched(req, res) {
        try {
            const { id } = req.params
            const { newCep_id, newUf_id, newDdd_id } = req.body
            await knex('ddd_searched')
            .update({ cep_id:newCep_id, uf_id:newUf_id, ddd_id:newDdd_id })
            .where({ id })

            return res.status(200).json({ message: 'Update done successfully' })
            
        } catch (error) {
            return res.status(400).json({ message: 'Update failed' })
        }
    },

    async deleteDDDSearched(req, res) {
        try {
            const { id } = req.params
            await knex('ddd_searched')
            .where({ id })
            .del()

            return res.json({ message: 'Successfully deleted' })
            
        } catch (error) {
            return res.json({ message: 'Search failed' })
        }
    }
}