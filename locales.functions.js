const mLocales = require('./models/locales.model')
const mNoche = require('./models/noches.model')
const mBebida = require('./models/bebida.model')

const get_locales = async (req, res) => {

    const locales = await mLocales.find({}).sort({'nombre': 1})
    res.render('pages/about');

}

exports.get_locales = get_locales