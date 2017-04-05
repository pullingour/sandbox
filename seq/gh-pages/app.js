const seq = {
  'ms': 0,
  'sec': 0,
  'tick': 0,
  'speed': 500, // default
  'playing': false,

  // render ticks
  'tick01': document.getElementById('seq01'),
  'tick02': document.getElementById('seq02'),
  'tick03': document.getElementById('seq03'),
  'tick04': document.getElementById('seq04'),
  'tick05': document.getElementById('seq05'),
  'tick06': document.getElementById('seq06'),
  'tick07': document.getElementById('seq07'),
  'tick08': document.getElementById('seq08'),

  //sounds
  'kick': document.getElementById('kick'),
  'kick2': document.getElementById('kick2'),
  'c_hihat': document.getElementById('c_hihat'),
  'c_hihat2': document.getElementById('c_hihat2'),
  'o_hihat': document.getElementById('o_hihat'),
  'o_hihat2': document.getElementById('o_hihat2'),
  'snare': document.getElementById('snare'),
  'snare2': document.getElementById('snare2'),
  'clap': document.getElementById('clap'),
  'clap2': document.getElementById('clap2'),

  'tick0100': 0,
  'tick0101': 0,
  'tick0200': 0,
  'tick0201': 0,
  'tick0300': 0,
  'tick0301': 0,
  'tick0400': 0,
  'tick0401': 0,
  'tick0500': 0,
  'tick0501': 0,
  'tick0600': 0,
  'tick0601': 0,
  'tick0700': 0,
  'tick0701': 0,
  'tick0800': 0,
  'tick0801': 0,

  'mainTimer': null
}

const seqStart = ()=> {
  if(seq.playing === true) return
  seq.mainTimer = setInterval(Count, seq.speed)
  seq.playing = true
}

const seqStop = ()=> {
  clearInterval(seq.mainTimer)
  seq.playing = false
}

const changeFast = ()=> {
  clearInterval(seq.mainTimer)
  seq.speed = 150
  seq.mainTimer = setInterval(Count, seq.speed)
}

const changeNormal = ()=> {
  clearInterval(seq.mainTimer)
  seq.speed = 200
  seq.mainTimer = setInterval(Count, seq.speed)
}

const changeSlow = ()=> {
  clearInterval(seq.mainTimer)
  seq.speed = 500
  seq.mainTimer = setInterval(Count, seq.speed)
}

const Count = ()=> {
  seq.tick ++
  mainLogic()
}


const mainLogic = (num)=> {

  switch(seq.tick) {
    case 1:
      seq.tick08.style.backgroundColor = 'white'
      seq.tick01.style.backgroundColor = 'red'
      fireSound(seq.tick0100)
      fireSound2(seq.tick0101)
      break
    case 2:
      seq.tick01.style.backgroundColor = 'white'
      seq.tick02.style.backgroundColor = 'red'
      fireSound(seq.tick0200)
      fireSound2(seq.tick0201)
      break
    case 3:
      seq.tick02.style.backgroundColor = 'white'
      seq.tick03.style.backgroundColor = 'red'
      fireSound(seq.tick0300)
      fireSound2(seq.tick0301)
      break
    case 4:
      seq.tick03.style.backgroundColor = 'white'
      seq.tick04.style.backgroundColor = 'red'
      fireSound(seq.tick0400)
      fireSound2(seq.tick0401)
      break
    case 5:
      seq.tick04.style.backgroundColor = 'white'
      seq.tick05.style.backgroundColor = 'red'
      fireSound(seq.tick0500)
      fireSound2(seq.tick0501)
      break
    case 6:
      seq.tick05.style.backgroundColor = 'white'
      seq.tick06.style.backgroundColor = 'red'
      fireSound(seq.tick0600)
      fireSound2(seq.tick0601)
      break
    case 7:
      seq.tick06.style.backgroundColor = 'white'
      seq.tick07.style.backgroundColor = 'red'
      fireSound(seq.tick0700)
      fireSound2(seq.tick0701)
      break
    case 8:
      seq.tick07.style.backgroundColor = 'white'
      seq.tick08.style.backgroundColor = 'red'
      fireSound(seq.tick0800)
      fireSound2(seq.tick0801)
      seq.tick = 0
      break
    }

}

function fireSound(index) {
  switch (index) {
    case 0 :
      return
    break
    case 1 :
      seq.kick.currentTime = 0;
      seq.kick.play()
    break
    case 2 :
      seq.c_hihat.currentTime = 0;
      seq.c_hihat.play()
    break
    case 3 :
      seq.o_hihat.currentTime = 0;
      seq.o_hihat.play()
    break
    case 4 :
      seq.snare.currentTime = 0;
      seq.snare.play()
    break
    case 5 :
      seq.clap.currentTime = 0;
      seq.clap.play()
    break
  }
}

function fireSound2(index) {
  switch (index) {
    case 0 :
      return
    break
    case 1 :
      seq.kick2.currentTime = 0;
      seq.kick2.play()
    break
    case 2 :
      seq.c_hihat2.currentTime = 0;
      seq.c_hihat2.play()
    break
    case 3 :
      seq.o_hihat2.currentTime = 0;
      seq.o_hihat2.play()
    break
    case 4 :
      seq.snare2.currentTime = 0;
      seq.snare2.play()
    break
    case 5 :
      seq.clap2.currentTime = 0;
      seq.clap2.play()
    break
  }
}



// select 取得
const selectedSound_tick0100 = document.getElementById('tick01_00')
const selectedSound_tick0101 = document.getElementById('tick01_01')
const selectedSound_tick0200 = document.getElementById('tick02_00')
const selectedSound_tick0201 = document.getElementById('tick02_01')
const selectedSound_tick0300 = document.getElementById('tick03_00')
const selectedSound_tick0301 = document.getElementById('tick03_01')
const selectedSound_tick0400 = document.getElementById('tick04_00')
const selectedSound_tick0401 = document.getElementById('tick04_01')
const selectedSound_tick0500 = document.getElementById('tick05_00')
const selectedSound_tick0501 = document.getElementById('tick05_01')
const selectedSound_tick0600 = document.getElementById('tick06_00')
const selectedSound_tick0601 = document.getElementById('tick06_01')
const selectedSound_tick0700 = document.getElementById('tick07_00')
const selectedSound_tick0701 = document.getElementById('tick07_01')
const selectedSound_tick0800 = document.getElementById('tick08_00')
const selectedSound_tick0801 = document.getElementById('tick08_01')



selectedSound_tick0100.onchange = function() {
  let i = document.tick0100.tick01_00.selectedIndex
  seq.tick0100 = i
}

selectedSound_tick0101.onchange = function() {
  let i = document.tick0101.tick01_01.selectedIndex
  seq.tick0101 = i
}

selectedSound_tick0200.onchange = function() {
  let i = document.tick0200.tick02_00.selectedIndex
  seq.tick0200 = i
}
selectedSound_tick0201.onchange = function() {
  let i = document.tick0201.tick02_01.selectedIndex
  seq.tick0201 = i
}

selectedSound_tick0300.onchange = function() {
  let i = document.tick0300.tick03_00.selectedIndex
  seq.tick0300 = i
}
selectedSound_tick0301.onchange = function() {
  let i = document.tick0301.tick03_01.selectedIndex
  seq.tick0301 = i
}

selectedSound_tick0400.onchange = function() {
  let i = document.tick0400.tick04_00.selectedIndex
  seq.tick0400 = i
}
selectedSound_tick0401.onchange = function() {
  let i = document.tick0401.tick04_01.selectedIndex
  seq.tick0401 = i
}

selectedSound_tick0500.onchange = function() {
  let i = document.tick0500.tick05_00.selectedIndex
  seq.tick0500 = i
}
selectedSound_tick0501.onchange = function() {
  let i = document.tick0501.tick05_01.selectedIndex
  seq.tick0501 = i
}

selectedSound_tick0600.onchange = function() {
  let i = document.tick0600.tick06_00.selectedIndex
  seq.tick0600 = i
}
selectedSound_tick0601.onchange = function() {
  let i = document.tick0601.tick06_01.selectedIndex
  seq.tick0601 = i
}

selectedSound_tick0700.onchange = function() {
  let i = document.tick0700.tick07_00.selectedIndex
  seq.tick0700 = i
}
selectedSound_tick0701.onchange = function() {
  let i = document.tick0701.tick07_01.selectedIndex
  seq.tick0701 = i
}

selectedSound_tick0800.onchange = function() {
  let i = document.tick0800.tick08_00.selectedIndex
  seq.tick0800 = i
}
selectedSound_tick0801.onchange = function() {
  let i = document.tick0801.tick08_01.selectedIndex
  seq.tick0801 = i
}
