module.exports = {
  get: (_, response) => {
    response.json({
      version: '1.0.0'
    })
  }
}
