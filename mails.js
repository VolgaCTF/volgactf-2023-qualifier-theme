const path = require('path')
const express = require('express')
const router = express.Router()

router.get('/welcome/subject', function (req, res) {
  res.set('Content-Type', 'text/plain')
  res.send('Welcome to VolgaCTF 2023 Qualifier!')
})

router.get('/welcome/plain', function (req, res) {
  res.set('Content-Type', 'text/plain')
  res.sendFile(path.join(__dirname, 'templates', 'welcome.plain.mustache'))
})

router.get('/welcome/html', function (req, res) {
  res.set('Content-Type', 'text/html')
  res.sendFile(path.join(__dirname, 'templates', 'welcome.html.mustache'))
})

router.get('/restore/subject', function (req, res) {
  res.set('Content-Type', 'text/plain')
  res.send('Reset your password!')
})

router.get('/restore/plain', function (req, res) {
  res.set('Content-Type', 'text/plain')
  res.sendFile(path.join(__dirname, 'templates', 'restore.plain.mustache'))
})

router.get('/restore/html', function (req, res) {
  res.set('Content-Type', 'text/html')
  res.sendFile(path.join(__dirname, 'templates', 'restore.html.mustache'))
})

router.get('/invite_supervisor/subject', function (req, res) {
  res.set('Content-Type', 'text/plain')
  res.send('Welcome onboard!')
})

router.get('/invite_supervisor/plain', function (req, res) {
  res.set('Content-Type', 'text/plain')
  res.sendFile(path.join(__dirname, 'templates', 'invite_supervisor.plain.mustache'))
})

router.get('/invite_supervisor/html', function (req, res) {
  res.set('Content-Type', 'text/html')
  res.sendFile(path.join(__dirname, 'templates', 'invite_supervisor.html.mustache'))
})

router.get('/new_task_review/subject', function (req, res) {
  res.set('Content-Type', 'text/plain')
  res.send('New task review from "{{ team_name }}": "{{ task_title }}"')
})

router.get('/new_task_review/plain', function (req, res) {
  res.set('Content-Type', 'text/plain')
  res.sendFile(path.join(__dirname, 'templates', 'new_task_review.plain.mustache'))
})

router.get('/new_task_review/html', function (req, res) {
  res.set('Content-Type', 'text/html')
  res.sendFile(path.join(__dirname, 'templates', 'new_task_review.html.mustache'))
})

module.exports = router
