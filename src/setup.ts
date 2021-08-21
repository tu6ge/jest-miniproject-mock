import {Weixin} from './wx';

global.wx = new Weixin(jest); // 注册全局 wx.xxx api

global.wx.registerGetApp() // 注册全局 getApp
global.wx.registerGetCurrentPages() // 注册全局 getCurrentPages
global.wx.registerRequirePlugin() // 注册全局 requirePlugin
global.wx.registerRequireMiniProgram() // 注册全局 requireMiniProgram