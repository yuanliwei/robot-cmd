const fs = require('fs');

var ps_click = fs.readFileSync(__dirname+'/Clicker.ps1', 'utf8');
var ps_keys = fs.readFileSync(__dirname+'/SendKeys.ps1', 'utf8');
var ps_screenshot = fs.readFileSync(__dirname+'/Take-ScreenShot.ps1', 'utf8');

var scripts = `
${ps_click}
${ps_keys}
${ps_screenshot}\n
`

exports.shell = '@chcp 65001 >nul & powershell'
exports.script = scripts
exports.moveTo = function (x,y) {
  return `[Clicker]::MoveToPoint(${x},${y})\n`
};
exports.leftClick = function () {
  return `[Clicker]::LeftClick()\n`
};
exports.rightClick = function () {
  return `[Clicker]::RightClick()\n`
};
exports.wheelDown = function () {
  return `[Clicker]::WheelDown()\n`
};
exports.wheelUp = function () {
  return `[Clicker]::WheelUp()\n`
};
exports.screenShot = function (savePath) {
  return `Take-ScreenShot -file "${savePath}" -screen\n`
};
exports.sendKeys = function (keys) {
  return `[System.Windows.Forms.SendKeys]::SendWait("${keys}")\n`
};
