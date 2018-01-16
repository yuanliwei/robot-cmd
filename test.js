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
  robot.moveTo(200,100)
  await sleep(1000)
  robot.moveTo(300,100)
  await sleep(1000)
  // robot.leftClick()
  robot.rightClick()
}

start()
