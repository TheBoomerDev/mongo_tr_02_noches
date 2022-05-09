const mLocales = require('./models/locales.model')
const mNoche = require('./models/noches.model')
const mBebida = require('./models/bebida.model')

const get_noches = async (req, res) => {
    const { query, params, body } = req
    const order = query.order || params.order || 'createdAt'
    let orderBy = {}
    orderBy[order] = 1

    const noches = await mNoche.find({}).sort(orderBy)

    const data = {
        noches:noches
    }
    res.render('noches/list', data);

}

exports.get_noches = get_noches