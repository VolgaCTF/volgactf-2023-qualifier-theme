const path = require('path')
const fs = require('fs')
const express = require('express')
const router = express.Router()

const imageFolder = path.join(__dirname, 'assets', 'images')

router.use('/images', express.static(imageFolder))

router.get('/index/images', function (req, res) {
  const index = fs.readdirSync(imageFolder).filter(function(filename) {
    const fullPath = path.join(__dirname, 'assets', 'images', filename)
    return fs.statSync(fullPath).isFile()
  })
  res.json(index)
})

const stylesheetFolder = path.join(__dirname, 'assets', 'stylesheets')

router.use('/stylesheets', express.static(stylesheetFolder))

router.get('/index/stylesheets', function (req, res) {
  const index = fs.readdirSync(stylesheetFolder).filter(function(filename) {
    const fullPath = path.join(__dirname, 'assets', 'stylesheets', filename)
    return fs.statSync(fullPath).isFile()
  })
  res.json(index)
})

const fontFolder = path.join(__dirname, 'assets', 'fonts')

router.use('/fonts', express.static(fontFolder))

router.get('/index/fonts', function (req, res) {
  const index = fs.readdirSync(fontFolder).filter(function(filename) {
    const fullPath = path.join(__dirname, 'assets', 'fonts', filename)
    return fs.statSync(fullPath).isFile()
  })
  res.json(index)
})

const partialFolder = path.join(__dirname, 'assets', 'partials')

router.use('/partials', express.static(partialFolder))

router.get('/index/partials', function (req, res) {
  const index = fs.readdirSync(partialFolder).filter(function(filename) {
    const fullPath = path.join(__dirname, 'assets', 'partials', filename)
    return fs.statSync(fullPath).isFile()
  })
  res.json(index)
})

module.exports = router
