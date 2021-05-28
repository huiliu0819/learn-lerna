const { API } = require('hui-core')
const axios = require('axios')

const getImg = () => axios.get(API)

module.exports = getImg

getImg().then(res => console.log(res.data.length))
console.log(1112)
