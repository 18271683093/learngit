'use strict'

const Router = require('koa-router')
const jwt = require('jsonwebtoken')
const config = require('../config')
const controllers = require('../controllers/public')
const filesControllers = require('../controllers/files')

const router = new Router()
router.prefix('/api')

router.get('/login', controllers.login)
router.get('/getfile', filesControllers.getfile)
router.get('/refresh', filesControllers.refresh)
router.get('/queryFiles', filesControllers.queryFiles)
router.get('/queryFile', filesControllers.queryFile)

module.exports = router