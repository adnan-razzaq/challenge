// ****** Selecting Dom Elements **********

let allModels = document.querySelector('#allmodels')
let showAllbtn = document.querySelector('#showAll')
let showTopbtn = document.querySelector('#topModels')

let csvData = `ID,Make,Model,Price,UserID,Date
43,Gudereit,EC-5,899,434,2021-05-15
44,Diamant,Beryll,2100,512,2021-05-03
46,Diamant,Juna,1100,432,2021-07-15
51,Gudereit,EC-5,700,534,2021-07-13
56,Gudereit,ET-9 evo,1600,431,2021-06-20
61,Diamant,BERYLL,900,412,2021-07-01
66,AwesomeBikes,Dirt Drifter 3000,1900,399,2021-06-28
67,Kettler,Velossi,1800,532,2021-07-04
78,Gudereit,ec-5,1200,416,2021-07-03
81,Gudereit,EC 5,850,498,2021-04-11
97,Awesome Bikes,Dirt-Drifter-3000,1600,387,2021-05-20
121,Gudereit,ET 9 evo,1900,434,2021-07-15
178,Diamant,beryll,2600,488,2021-06-27
190,Diamant,Mandara,999,420,2021-07-17`

//Parsing Csv Data
let parsedData = Papa.parse(csvData, { header: true })

// ****** Event Listeners **********
document.addEventListener('DOMContentLoaded', () => {
  showAlldata(parsedData)
})

showAllbtn.addEventListener('click', () => {
  showAlldata(parsedData)
})
showTopbtn.addEventListener('click', () => {
  showTopModels(parsedData)
})

// ****** Functions **********

/** Function used to add all available data in DOM. */
function showAlldata(array) {
  let html = ''
  array.data.forEach((item, index) => {
    html += `
            <div class="card">
                <div>
                    <img src="images/bike${index}.jpg" alt="image" srcset="">
                </div>
                <div class="borders">
                <h2>Item#${item.ID}</h2>
                    <div>
                        <p class="model">Make: ${item.Make} <span>Model:${item.Model}</span></p>
                        <p class="price">${item.Price} €</p>
                        <small>Date Posted:${item.Date}</small>
                    </div>
                </div>
             </div>
            `
    allModels.innerHTML = html
  })
}

function showTopModels() {
  let html = ''
  let items = topModels(csvData)
  items.forEach((element, index) => {
    html += `
            <div class="card">
                <div>
                    <img src="images/bike${index}.jpg" alt="image" srcset="">
                </div>
                <div class="borders">
                    <div>
                        <p class="model">Make: ${element.bikeTitle} <span>Model:${element.model}</span></p>
                        <p class="price">${element.price} €</p>
                    </div>
                </div>
             </div>
            `
  })

  allModels.innerHTML = ''
  allModels.innerHTML = html
}
