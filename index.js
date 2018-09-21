const webpack = require("webpack")
const path = require("path")
const deepMerge = require("deep-assign")

const webpackConfig = require("./webpack.config.js")

const yargs = require("yargs") // eslint-disable-line

let argv = yargs.argv

let entry
if (!argv._[0]) {
  entry = 'index.js'
} else {
  entry = ~argv._[0].lastIndexOf('.js') ? argv._[0] : entry + '.js'
}



yargs
  .demandOption('')
  .alias('', 'help')
  .alias('h', 'help')
  .alias('v', 'version')
  .option('out-file', {
    alias: 'f',
    description: "output filename",
    default: entry
  })
  .option('out-dir', {
    alias: 'd',
    description: "output directory",
    default: path.resolve('build')
  })
  .argv

console.log(yargs.argv)

argv = yargs.argv


const entryFile = path.isAbsolute(entry) ? entry : path.join(process.cwd(), entry)
const entryInfo = path.parse(entryFile)

if (argv) {

}

const config = deepMerge(webpackConfig, {
  entry: {
    [entryInfo.name]: entryFile
  },
  output: {
    path: path.isAbsolute(argv.outDir) ? path.join(argv.outDir) : path.join(process.cwd(), argv.outDir),
    filename: argv.outFile,
  }
})

console.log(config)
// console.log("building, wait some time...")

webpack(config, (err, stat) => {
  if (err) {
    console.error(err)
  }
  console.log(stat.toString({
    chunks: false,
    modules: false,
    children: false,
    colors: true
  }))
})


