module.exports = {

    simpleMessage(req, res) {
        res.status(200).json({ message: 'Your api is working' })
    }
}
