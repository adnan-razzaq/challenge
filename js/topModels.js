/** Function used to display top 3 models */
function showTopModels(array) {
  let models = []

  //Making Model names of same formatting
  let result = array.data.map((item, index) => {
    let model = item.Model.toLowerCase().split(' ')
    model.length > 0 ? (model = model.join('-')) : model
    item.Model = model
    return item
  })
  console.log(result)
}
