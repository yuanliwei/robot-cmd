const { exec } = require('child_process');
const powershell = require('./lib/powershell');
const shell = exec(powershell.shell, {windowsHide: true})

class Robot {
  constructor() {

  }

  static moveTo(x, y) {
    shell.stdin.write(powershell.moveTo(x, y))
  }

  static leftClick() {
    shell.stdin.write(powershell.leftClick())
  }

  static doubleClick() {
    shell.stdin.write(powershell.leftClick())
    shell.stdin.write(powershell.leftClick())
  }

  static rightClick() {
    shell.stdin.write(powershell.rightClick())
  }

  static wheelDown() {
    shell.stdin.write(powershell.wheelDown())
  }

  static wheelUp() {
    shell.stdin.write(powershell.wheelUp())
  }

  static screenShot(savePath) {
    shell.stdin.write(powershell.screenShot(savePath))
  }

  static sendKeys(keys) {
    shell.stdin.write(powershell.sendKeys(keys))
  }

}

shell.stdin.write(powershell.script)
module.exports = Robot;
