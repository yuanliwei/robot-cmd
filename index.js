const { exec } = require('child_process');
const powershell = require('./src/powershell');
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

}

shell.stdin.write(powershell.script)
module.exports = Robot;
