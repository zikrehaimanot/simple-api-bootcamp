let activate = document.getElementById('activate')
let display= document.getElementById('display')
let arr = []
let checkTrend = document.getElementById('checkTrend')
let convertDisplay = document.getElementById('convertDisplay')

activate.addEventListener('click',()=>{
  // console.log("z")
let userInput = document.getElementById('userInput').value
// console.log(userInput)
display.innerHTML=""
fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${userInput}&apikey=78a5ffdb426f5a3ac1dc9d2a`)
  .then(res => res.json())
  .then(response =>{
    arr = []
    // console.log(response)
    // console.log(response["Weekly Adjusted Time Series"])
 // document.getElementById('display').innerHTML=response
 let weekly = response["Weekly Adjusted Time Series"]
 let count = 0
 for(let key in weekly){

   if(count < 8){
   display.innerHTML+=(key,weekly[key]["4. close"])+"<br/>"
   // console.log(key,weekly[key]["4. close"])
   count++
   arr.push(weekly[key]["4. close"])
 // console.log(response["Global Quote"]["05. price"])
 // console.log(response[05].price)
}
}

  })
  .catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
  });
  })


// checkTrend.addEventListener('click',()=>{
//   simplifyArray(arr)
// })

checkTrend.addEventListener('click',()=>{
  simplifyArray(arr)
})

  function simplifyArray(arr){
    let recentClose = Number(arr[0])
    let oldestClose= Number(arr[7])
    let difference = recentClose - oldestClose
    // console.log(difference)
    if(difference <= 0){
      convertDisplay.innerHTML="It's trending downwards, only buy if you're sure"
    }else{
    convertDisplay.innerHTML= "It's trending upwards, buy if you can"
  }
}
// let activate = document.getElementById('activate')
// let changeCurrency = document.getElementById('changeCurrency')
//
// activate.addEventListener('click',()=>{
//   // console.log("z")
//
// let userInput = document.getElementById('userInput').value
// // console.log(userInput)
//
// fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${userInput}&apikey=FHO3EDY0S1F11XQ5`)
//   .then(res => res.json())
//   .then(response =>{
//    document.getElementById('display').innerHTML=response["Global Quote"]["05. price"]
//     // console.log(response["Global Quote"]["05. price"])
//     // console.log(response[05].price)
//
//
//
//
// })
// })


//
// changeCurrency.addEventListener('click',()=>{
//
// fetch(`https://free.currconv.com/api/v7/convert?q=USD_PHP,PHP_USD&compact=ultra&apiKey=3bb97fd3c5d770b9e472`)
//   .then(res => res.json())
//   .then(conversion =>{
//     console.log(conversion)
//
// })


// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(arr.reduce(reducer));

  // console.log(response["Global Quote"]["05. price"])
  // console.log(response[05].price)


// let convert = document.getElementById('convert')
// convert.addEventListener('click', ()=>{
//
// // console.log("z")
//
// let userInput = document.getElementById('userInput').value
//
// fetch(`https://prime.exchangerate-api.com/v5/78a5ffdb426f5a3ac1dc9d2a/pair/EUR/GBP/${userInput}`)
//   .then(res => res.json())
//   .then(response =>{
//     console.log(response)
//    // console.log(response.conversion_rates.CAD)
// })
// })


// let convert = document.getElementById('convert')
//
// convert.addEventListener('click', ()=>{
//
// // console.log("z")
//
// let display = document.getElementById('display').innerHTML
//
// fetch(`http://numbersapi.com/random/year`)
//   .then(res => res.json())
//   .then(response =>{
//     console.log(response)
//    // console.log(response.conversion_rates.CAD)
// })
// })
