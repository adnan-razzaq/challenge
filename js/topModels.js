function topModels(data) {
  let models = []

  let count = 0
  let allRows = data.split(/\r?\n|\r/)
  for (var singleRow = 1; singleRow < allRows.length; singleRow++) {
    var rowCells = allRows[singleRow].split(',')
    let model = rowCells[2].toLowerCase().split(' ')
    model.length > 0 ? (model = model.join('-')) : model
    models.push({
      model: model,
      price: rowCells[3],
      bikeTitle: rowCells[1],
    })
  }

  models = Object.values(
    models.reduce((r, { model, price, bikeTitle }) => {
      r[model] = r[model] || {
        model,
        price,
        bikeTitle,
        count: 0,
      }
      r[model].count++
      return r
    }, {})
  )

  models = models.sort(function (a, b) {
    return b.count - a.count
  })

  const items = models.slice(0, 3)
  return items
}

module.exports = topModels
