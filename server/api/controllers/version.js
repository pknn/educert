const get = (_, response) => {
  response.json({
    version: '1.0.0'
  })
}
module.exports = {
  get
}
