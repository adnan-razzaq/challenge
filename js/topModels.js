/** Function used to display top 3 models */

function topModels(array) {
  let models = []

  //Making Model names of same formatting
  let result = array.data.map((item, index) => {
    let model = item.Model.toLowerCase().split(' ')
    model.length > 0 ? (model = model.join('-')) : model
    item.Model = model
    return item
  })

  //Functionality for displaying top 3 models
  models = Object.values(
    result.reduce((r, { Make, Model, Price, ID, Date }) => {
      r[Model] = r[Model] || {
        ID,
        Model,
        Price,
        Make,
        Date,
        count: 0,
      }
      r[Model].count++
      return r
    }, {})
  )

  models = models.sort(function (a, b) {
    return b.count - a.count
  })

  //Adding only first three elements of array
  const items = models.slice(0, 3)
  return items
}
