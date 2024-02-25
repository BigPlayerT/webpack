
module.exports = function (source) {
    let templateReg = new RegExp('<template>((.|\n|\r)*)</template>')
    let scriptReg = new RegExp('<script>((.|\n|\r)*)</script>')
    let template = templateReg.exec(source)[1]
    let script = scriptReg.exec(source)[1]
    let headStr = script.slice(0, script.indexOf('export'))
    let bodyStr = script.slice(script.indexOf('export')).replace('export default {', '')
    let obj = (`{template: '${template}',` + bodyStr).replace(/[\r\n]/g, "");
    return  headStr + `;export default ${obj}`
}