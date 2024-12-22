// @ignore
// eslint-disable-next-line @typescript-eslint/no-require-imports
const createFontSlice = require('font-slice')
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path')

createFontSlice({
  // fontPath
  fontPath: path.resolve(__dirname, '../../public/fonts/MiSans-medium.ttf'),
  // outputDir
  outputDir: path.resolve(__dirname, './output'),
})
