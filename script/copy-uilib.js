const fs = require('fs')
const path = require("path")

function copyDir(from, to) {
  remove(to)
  fs.mkdirSync(to)
  const fromDir = fs.readdirSync(from)
  fromDir.forEach(child => {
    const isFile = fs.statSync(path.resolve(from, child)).isFile()
    if (isFile) {
      fs.copyFileSync(path.resolve(from, child), path.resolve(to, child))
    } else {
      copyDir(path.resolve(from, child), path.resolve(to, child))
    }
  })

}

function remove(path) {
  if (!fs.existsSync(path)) return
  if (fs.statSync(path).isDirectory()) {
    files = fs.readdirSync(path)
    files.forEach(file =>  {
      remove(path + "/" + file)
    })
    fs.rmdirSync(path)
  } else {
    fs.unlinkSync(path)
  }
}

// uview-ui
copyDir(
  path.resolve(process.cwd(), 'node_modules/uview-ui'),
  path.resolve(process.cwd(), 'src/.uview-ui')
)

// uni-ui
copyDir(
  path.resolve(process.cwd(), 'node_modules/@dcloudio/uni-ui/lib'),
  path.resolve(process.cwd(), 'src/.uni-ui')
)

