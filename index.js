const { exec } = require('child_process');
const powershell = require('./lib/powershell');
const shell = exec(powershell.shell)

class Robot {
  constructor() {

  }

  static moveTo(x,y) {
    shell.stdin.write(powershell.moveTo(x,y))
  }

  static leftClick() {
    shell.stdin.write(powershell.leftClick())
  }

  static rightClick() {
    shell.stdin.write(powershell.rightClick())
  }

  static screenShot(savePath) {
    shell.stdin.write(powershell.screenShot(savePath))
  }

}

shell.stdin.write(powershell.script)
module.exports = Robot;
