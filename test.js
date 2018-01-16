const robot = require('./index.js');

var sleep = (time)=>{
  return new Promise(function(resolve, reject) {
    setTimeout(()=>{resolve()},time)
  });
}

var start = async ()=>{
  await sleep(1000)
  robot.moveTo(100,100)
  await sleep(1000)
  robot.moveTo(121,185)
  await sleep(1000)
  robot.doubleClick()
  await sleep(1000)
  robot.moveTo(400,150)
  await sleep(1000)
  robot.rightClick()
  await sleep(1000)
  robot.leftClick()
  await sleep(1000)
  robot.screenShot('./screenshot.png')
  await sleep(1000)
  robot.sendKeys('S D F G H {ENTER}')

}

start()
