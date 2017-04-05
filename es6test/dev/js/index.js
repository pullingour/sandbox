import 'babel-polyfill'


console.log('hoge!!!a!!')
console.log('hoge!!!a!!')
console.log('HOGE')

let mill = 0
let sec = 0

function count() {
  mill ++
  console.log(mill + 'mill')
  //if(mill = 2) console.log("HAT")
  //if(mill = 5) console.log("KICK")
  if(mill >= 10) {
    sec ++
    console.log(sec + 'sec')
    mill = 0
  }

  if(sec >= 10) {
    clearInterval(tic)
  }
}

const tic = setInterval(count,100)
