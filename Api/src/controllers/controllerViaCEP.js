const axios = require('axios')
const logicBD = require('./controllerLogicCEP')
const util = require('util')

const URL_ZIP_CODE = 'https://viacep.com.br/ws/%s/json/'

module.exports = {
    
    async getZipCodeSearched(req, res) {
        try {
            const { cep } = req.params
            let responseDB = await logicBD.getZipCodeSearchedById(cep)
           
            console.log(responseDB.length)
            
            if(responseDB != 'Zip code not found') {
                return res.status(200).json(responseDB)
            }
            else {
                const requireZipCode = await axios.get(util.format(URL_ZIP_CODE,cep))
                await logicBD.addZipCodeSearched(requireZipCode.data)
                return res.status(200).json({ message: requireZipCode.data })
            }

        } catch (error) {
            return res.status(400).json({ message: "Search failed or zip code not found" })
        }
    }
}