var fs = require('fs')
var path = require('path')
var resolve = path.resolve

function readFile (path) {
  console.log('%c read: ', 'color:#28a745;', path)
  const match = path.match(/\.(\w+)/)
  let affix = 'vue'
  if (match) {
    affix = match[1]
  }
  fs.readFile(path, 'utf8', function (err, data) {
    if (err) {
      throw err
    }

    var fileName = path.replace(affix, 'txt')
    fs.writeFile(fileName, data, function (err) {
      if (err) {
        throw err
      }

      console.log('%c write: ', 'color:#28a745;', fileName)
    })
  })
}
function isLeaf (str) {
  return /\.\w+$/.test(str)
}

function readdir (dir) {
  if (isLeaf(dir)) {
    return readFile(dir)
  }
  fs.readdir(dir, function (err, files) {
    if (err) {
      throw err
    }
    files.filter(function (f) {
      return !/\.txt$/.test(f)
    }).forEach(function (file) {
      var p = dir + '/' + file
      readdir(p)
    })
  })
}

readdir(resolve(__dirname, 'src/components'))
readdir(resolve(__dirname, 'src/directives'))

