import {
  UpdateManager,
  RealtimeLogManager,
  LogManager,
  Animation,
  RequestTask,
  DownloadTask,
  UploadTask,
  SocketTask
} from './interfaces/index'
export class Weixin {
  private jest: typeof jest;

  /**
   * api 列表
   * key 是api
   * value 是返回值
  */
  readonly apis = {
    'canIUse': true,
    'base64ToArrayBuffer': new ArrayBuffer(8),
    'arrayBufferToBase64': 'base64str',

    // 系统
    'getSystemInfoSync': Promise,
    'getSystemInfoAsync': undefined,
    'getSystemInfo': Promise,

    // 更新
    'updateWeChatApp': Promise,
    'getUpdateManager': undefined,

    // 生命周期
    'getLaunchOptionsSync': {
      path:'bar',
      scene:1000,
      query: {bar:'foo'},
      shareTicket:'foo-share',
      referrerInfo: {},
      forwardMaterials:[],
      chatType:0,
    },
    'getEnterOptionsSync': {
      path:'bar/foo',
      scene:1000,
      query: {bar:'foo'},
      shareTicket:'foo-share',
      referrerInfo: {},
      forwardMaterials:[],
      chatType:0,
    },

    // 应用级事件
    'onUnhandledRejection':undefined,
    'onThemeChange':undefined,
    'onPageNotFound':undefined,
    'onError':undefined,
    'onAudioInterruptionEnd':undefined,
    'onAudioInterruptionBegin':undefined,
    'onAppShow':undefined,
    'onAppHide':undefined,
    'offUnhandledRejection':undefined,
    'offThemeChange':undefined,
    'offPageNotFound':undefined,
    'offError':undefined,
    'offAudioInterruptionEnd':undefined,
    'offAudioInterruptionBegin':undefined,
    'offAppShow':undefined,
    'offAppHide':undefined,

    // 调试
    'setEnableDebug': Promise,
    'getRealtimeLogManager': undefined,
    'getLogManager':undefined,

    // 性能
    'reportPerformance':undefined,
    'getPerformance':undefined, // TODO: 未设置 interface
    
    // 加密
    'getUserCryptoManager':undefined,

    // 路由
    'switchTab':Promise,
    'reLaunch':Promise,
    'redirectTo':Promise,
    'navigateTo':Promise,
    'navigateBack':Promise,

    // 跳转
    'navigateToMiniProgram': Promise,
    'navigateBackMiniProgram':Promise,
    'exitMiniProgram':Promise,

    // 转发
    'updateShareMenu':Promise,
    'showShareMenu':Promise,
    'showShareImageMenu':Promise,
    'shareVideoMessage':Promise,
    'shareFileMessage':Promise,
    'onCopyUrl':undefined,
    'offCopyUrl':undefined,
    'hideShareMenu':Promise,
    'getShareInfo':undefined,
    'authPrivateMessage':undefined,

    // 界面
    //   交互
    'showToast': Promise,
    'showModal': Promise,
    'showLoading':Promise,
    'showActionSheet':Promise,
    'hideToast':Promise,
    'hideLoading':Promise,
    'enableAlertBeforeUnload':undefined,
    'disableAlertBeforeUnload':undefined,
    //   导航栏
    'showNavigationBarLoading':Promise,
    'setNavigationBarTitle':Promise,
    'setNavigationBarColor':Promise,
    'hideNavigationBarLoading':Promise,
    'hideHomeButton':Promise,
    //   背景
    'setBackgroundTextStyle':Promise,
    'setBackgroundColor':Promise,
    //   Tab Bar
    'showTabBarRedDot':Promise,
    'showTabBar':Promise,
    'setTabBarStyle':Promise,
    'setTabBarItem':Promise,
    'setTabBarBadge':Promise,
    'removeTabBarBadge':Promise,
    'hideTabBarRedDot':Promise,
    'hideTabBar':Promise,
    //    字体
    'loadFontFace':Promise,
    //    下拉刷新
    'stopPullDownRefresh':Promise,
    'startPullDownRefresh':Promise,
    //    滚动
    'pageScrollTo':Promise,
    //    动画
    'createAnimation':undefined,
    //    其他界面
    'setTopBarText':Promise,
    'nextTick':undefined,
    'getMenuButtonBoundingClientRect':{
      width:100,
      height:101,
      top:102,
      right:103,
      bottom:104,
      left:105,
    },
    'setWindowSize':undefined,
    'onWindowResize':undefined,
    'offWindowResize':undefined,

    // 网络
    'request':undefined,
    'downloadFile':undefined,
    'uploadFile':undefined,
    'sendSocketMessage':Promise,
    'onSocketOpen':undefined,
    'onSocketMessage':undefined,
    'onSocketError':undefined,
    'onSocketClose':undefined,
    'connectSocket':undefined,
    'closeSocket':Promise,
    'stopLocalServiceDiscovery':Promise,
    'startLocalServiceDiscovery':Promise,
    'onLocalServiceResolveFail':undefined,
    'onLocalServiceLost':undefined,
    'onLocalServiceFound':undefined,
    'onLocalServiceDiscoveryStop':undefined,
    'offLocalServiceResolveFail':undefined,
    'offLocalServiceLost':undefined,
    'offLocalServiceFound':undefined,
    'offLocalServiceDiscoveryStop':undefined,
    'createTCPSocket':undefined,// TODO 未模拟返回值
    'createUDPSocket':undefined,// TODO 未模拟返回值

    // 支付
    'requestPayment':Promise,
    'requestOrderPayment':Promise,

    // 数据缓存
    'setStorageSync':Promise,
    'setStorage':Promise,
    'revokeBufferURL':Promise,
    'removeStorageSync':Promise,
    'removeStorage':Promise,
    'getStorageSync':Promise,
    'getStorageInfoSync':Promise,
    'getStorageInfo':Promise,
    'getStorage':Promise,
    'createBufferURL':undefined,// TODO:返回值格式未知
    'clearStorageSync':Promise,
    'clearStorage':Promise,
    'setBackgroundFetchToken':Promise,
    'onBackgroundFetchData':undefined,
    'getBackgroundFetchToken':Promise,
    'getBackgroundFetchData':Promise,

    // data-analysis
    'reportMonitor':undefined,
    'reportEvent':undefined,
    'reportAnalytics':undefined,
    'getExptInfoSync':{
      'foo1':'bar1'   // TODO 模拟的数据有些主观
    },

    // 画布
    'createOffscreenCanvas':undefined, // TODO: 未模拟返回值
    'createCanvasContext':undefined, // TODO: 未模拟返回值
    'canvasToTempFilePath':Promise,
    'canvasPutImageData':Promise,
    'canvasGetImageData':Promise,

    // 多媒体
    'createMapContext':undefined, // TODO: 未模拟返回值
    'saveImageToPhotosAlbum':Promise,
    'previewMedia':Promise,
    'previewImage':Promise,
    'getImageInfo':Promise,
    'compressImage':Promise,
    'chooseMessageFile':Promise,
    'chooseImage':Promise,
    'saveVideoToPhotosAlbum':Promise,
    'openVideoEditor':undefined,
    'getVideoInfo':undefined,
    'createVideoContext':undefined, // TODO: 未模拟返回值
    'compressVideo':Promise,
    'chooseVideo':Promise,
    'chooseMedia':Promise,
    'stopVoice':Promise,
    'setInnerAudioOption':Promise,
    'playVoice':Promise,
    'pauseVoice':Promise,
    'getAvailableAudioSources':Promise,
    'createWebAudioContext':undefined,//TODO: 未模拟返回值
    'createMediaAudioPlayer':undefined,//TODO: 未模拟返回值
    'createInnerAudioContext':undefined,//TODO: 未模拟返回值
    'createAudioContext':undefined,//TODO: 未模拟返回值
    'stopBackgroundAudio':Promise,
    'seekBackgroundAudio':Promise,
    'playBackgroundAudio':Promise,
    'pauseBackgroundAudio':Promise,
    'onBackgroundAudioStop':undefined,
    'onBackgroundAudioPlay':undefined,
    'onBackgroundAudioPause':undefined,
    'getBackgroundAudioPlayerState':Promise,
    'getBackgroundAudioManager':undefined,//TODO: 未模拟返回值
    'createLivePusherContext':undefined,//TODO: 未模拟返回值
    'createLivePlayerContext':undefined,//TODO: 未模拟返回值
    'stopRecord':Promise,
    'startRecord':Promise,
    'getRecorderManager':undefined,//TODO: 未模拟返回值
    'createCameraContext':undefined,//TODO: 未模拟返回值
    'createMediaContainer':undefined,//TODO: 未模拟返回值
    'updateVoIPChatMuteConfig':Promise,
    'subscribeVoIPVideoMembers':Promise,
    'onVoIPVideoMembersChanged':undefined,
    'onVoIPChatStateChanged':undefined,
    'onVoIPChatSpeakersChanged':undefined,
    'onVoIPChatMembersChanged':undefined,
    'onVoIPChatInterrupted':undefined,
    'offVoIPVideoMembersChanged':undefined,
    'offVoIPChatStateChanged':undefined,
    'offVoIPChatMembersChanged':undefined,
    'offVoIPChatInterrupted':undefined,
    'joinVoIPChat':Promise,
    'exitVoIPChat':Promise,
    'createMediaRecorder':undefined,//TODO: 未模拟返回值
    'createVideoDecoder':undefined,//TODO: 未模拟返回值

    // 位置
    'stopLocationUpdate':Promise,
    'startLocationUpdateBackground':Promise,
    'startLocationUpdate':Promise,
    'openLocation':Promise,
    'onLocationChange':undefined,
    'offLocationChange':undefined,
    'getLocation':Promise,
    'choosePoi':Promise,
    'chooseLocation':Promise,

    // 文件
    'saveFileToDisk':undefined,
    'saveFile':Promise,
    'removeSavedFile':Promise,
    'openDocument':Promise,
    'getSavedFileList':Promise,
    'getSavedFileInfo':Promise,
    'getFileSystemManager':undefined,//TODO: 未模拟返回值
    'getFileInfo':Promise,

    // 开放接口
    'login':undefined,
    'checkSession':Promise,
    'getAccountInfoSync':{
      miniProgram:{
        appId:'xxx',
        envVersion:'bar',
        version:'0.0.0',
      },
      plugin:{
        appId:'xxx',
        version:'0.0.0',
      }
    },
    'getUserProfile':Promise,
    'getUserInfo':undefined,
    'authorizeForMiniProgram':undefined,
    'authorize':Promise,
    'openSetting':Promise,
    'getSetting':Promise,
    'chooseAddress':Promise,
    'openCard':Promise,
    'addCard':Promise,
    'chooseInvoiceTitle':Promise,
    'chooseInvoice':Promise,
    'startSoterAuthentication':Promise,
    'checkIsSupportSoterAuthentication':Promise,
    'checkIsSoterEnrolledInDevice':Promise,
    'shareToWeRun':Promise,
    'getWeRunData':undefined,
    'requestSubscribeMessage':Promise,
    'showRedPackage':Promise,
    'addVideoToFavorites':Promise,
    'addFileToFavorites':Promise,
    'chooseLicensePlate':Promise,
    'reserveChannelsLive':undefined,
    'openChannelsLive':undefined,
    'openChannelsActivity':undefined,
    'getChannelsLiveNoticeInfo':undefined,
    'getChannelsLiveInfo':undefined,
    'getGroupEnterInfo':undefined,
    'openCustomerServiceChat':undefined,

    // 设备
    'stopBluetoothDevicesDiscovery':Promise,
    'startBluetoothDevicesDiscovery':Promise,
    'openBluetoothAdapter':Promise,
    'onBluetoothDeviceFound':undefined,
    'onBluetoothAdapterStateChange':undefined,
    'offBluetoothDeviceFound':undefined,
    'offBluetoothAdapterStateChange':undefined,
    'makeBluetoothPair':Promise,
    'getConnectedBluetoothDevices':Promise,
    'getBluetoothDevices':Promise,
    'getBluetoothAdapterState':Promise,
    'closeBluetoothAdapter':Promise,
    'writeBLECharacteristicValue':Promise,
    'setBLEMTU':Promise,
    'readBLECharacteristicValue':Promise,
    'onBLEConnectionStateChange':undefined,
    'onBLECharacteristicValueChange':undefined,
    'offBLEConnectionStateChange':undefined,
    'offBLECharacteristicValueChange':undefined,
    'notifyBLECharacteristicValueChange':Promise,
    'getBLEDeviceServices':Promise,
    'getBLEDeviceRSSI':Promise,
    'getBLEDeviceCharacteristics':Promise,
    'createBLEConnection':Promise,
    'closeBLEConnection':Promise,
    'onBLEPeripheralConnectionStateChanged':undefined,
    'offBLEPeripheralConnectionStateChanged':undefined,
    'createBLEPeripheralServer':Promise,
    'stopBeaconDiscovery':Promise,
    'startBeaconDiscovery':Promise,
    'onBeaconUpdate':undefined,
    'onBeaconServiceChange':undefined,
    'offBeaconUpdate':undefined,
    'offBeaconServiceChange':undefined,
    'getBeacons':Promise,
    'stopHCE':Promise,
    'startHCE':Promise,
    'sendHCEMessage':Promise,
    'onHCEMessage':undefined,
    'offHCEMessage':undefined,
    'getNFCAdapter':undefined,//TODO: 未模拟返回值
    'getHCEState':Promise,
    'stopWifi':Promise,
    'startWifi':Promise,
    'setWifiList':Promise,
    'onWifiConnected':undefined,
    'onGetWifiList':undefined,
    'offWifiConnected':undefined,
    'offGetWifiList':undefined,
    'getWifiList':Promise,
    'getConnectedWifi':Promise,
    'connectWifi':Promise,
    'addPhoneRepeatCalendar':Promise,
    'addPhoneCalendar':Promise,
    'searchContacts':Promise,
    'chooseContact':undefined,
    'addPhoneContact':Promise,
    'checkIsOpenAccessibility':Promise,
    'getBatteryInfoSync':Promise,
    'getBatteryInfo':Promise,
    'setClipboardData':Promise,
    'getClipboardData':Promise,
    'onNetworkStatusChange':undefined,
    'offNetworkStatusChange':undefined,
    'getNetworkType':Promise,
    'getRandomValues':Promise,
    'setScreenBrightness':Promise,
    'setKeepScreenOn':Promise,
    'onUserCaptureScreen':undefined,
    'offUserCaptureScreen':undefined,
    'getScreenBrightness':Promise,
    'onKeyboardHeightChange':undefined,
    'offKeyboardHeightChange':undefined,
    'hideKeyboard':Promise,
    'getSelectedTextRange':Promise,
    'makePhoneCall':Promise,
    'stopAccelerometer':Promise,
    'startAccelerometer':Promise,
    'onAccelerometerChange':undefined,
    'offAccelerometerChange':undefined,
    'stopCompass':Promise,
    'startCompass':Promise,
    'onCompassChange':undefined,
    'offCompassChange':undefined,
    'stopDeviceMotionListening':Promise,
    'startDeviceMotionListening':Promise,
    'onDeviceMotionChange':undefined,
    'offDeviceMotionChange':undefined,
    'stopGyroscope':Promise,
    'startGyroscope':Promise,
    'onGyroscopeChange':undefined,
    'offGyroscopeChange':undefined,
    'onMemoryWarning':undefined,
    'offMemoryWarning':undefined,
    'scanCode':Promise,
    'vibrateShort':Promise,
    'vibrateLong':Promise,

    // AI 人脸识别
    'stopFaceDetect':undefined,
    'initFaceDetect':undefined,
    'faceDetect':undefined,

    // Worker
    'createWorker':undefined,//TODO: 未模拟返回值
    
    // WXML
    'createSelectorQuery':undefined,//TODO: 未模拟返回值
    'createIntersectionObserver':undefined,//TODO: 未模拟返回值
    'getExtConfigSync':undefined,
    'getExtConfig':Promise,
    'createRewardedVideoAd':undefined,//TODO: 未模拟返回值
    'createInterstitialAd':undefined,//TODO: 未模拟返回值
  };

  constructor(j: typeof jest) {
    this.jest = j;
    this.definePropertyList();
  }

  private definePropertyList(){
    for(const api of Object.keys(this.apis)){
      this.defineProperty(api)
    }
  }
  
  private defineProperty(name: string):void {
    Object.defineProperty(this, name, {
      enumerable: false,
      value: this[name] 
              ? this[name]()
              : this.jest.fn().mockReturnValue(this.apis[name] ?? undefined)
    });
  }

  // TODO: 目前没有找到使用案例
  // env():jest.Mock {
  //   return this.jest.fn(()=> 'demo')
  // }

  registerGetApp():void {
    Object.defineProperty(global, 'getApp', {
      enumerable:false,
      configurable:true,
      value: this.jest.fn().mockReturnValue({
        globalData:{
          foo:'bar',
        },
      })
    })
  }

  registerGetCurrentPages():void {
    Object.defineProperty(global, 'getCurrentPages', {
      enumerable:false,
      configurable:true,
      value: this.jest.fn().mockReturnValue([])
    })
  }

  registerRequirePlugin():void {
    Object.defineProperty(global, 'requirePlugin', {
      enumerable:false,
      configurable:true,
      value: this.jest.fn()
    })
  }

  registerRequireMiniProgram():void {
    Object.defineProperty(global, 'requireMiniProgram', {
      enumerable:false,
      configurable:true,
      value: this.jest.fn()
    })
  }

  /**
   * 
   * @returns 
   */
  getUpdateManager():jest.Mock {
    const res:UpdateManager = new class implements UpdateManager{
      applyUpdate(){
        return true
      }
      onCheckForUpdate(){
        return true
      }
      onUpdateReady(){
        return true
      }
      onUpdateFailed(){
        return true
      }
    }
    return this.jest.fn().mockReturnValue(res);
  }

  getRealtimeLogManager():jest.Mock {
    const res: RealtimeLogManager = new class implements RealtimeLogManager{
      info(){
        return true
      }
      warn(){
        return true
      }
      error(){
        return true
      }
      setFilterMsg(msg: string):string{
        return msg
      }
      addFilterMsg(msg: string):string{
        return msg
      }
    }
    return this.jest.fn().mockReturnValue(res);
  }

  getLogManager():jest.Mock {
    const res:LogManager = new class implements LogManager {
      debug(){return true}
      info(){return true}
      log(){return true}
      warn(){return true}
    }
    return this.jest.fn().mockReturnValue(res);
  }

  createAnimation():jest.Mock {
    const res:Animation = new class implements Animation {
      export(){return true}
      step(){return true}
      matrix(){return true}
      matrix3d(){return true}
      rotate(){return true}
      rotate3d(){return true}
      rotateX(){return true}
      rotateY(){return true}
      rotateZ(){return true}
      scale(){return true}
      scale3d(){return true}
      scaleX(){return true}
      scaleY(){return true}
      scaleZ(){return true}
      skew(){return true}
      skewX(){return true}
      skewY(){return true}
      translate(){return true}
      translate3d(){return true}
      translateX(){return true}
      translateY(){return true}
      translateZ(){return true}
      opacity(){return true}
      backgroundColor(){return true}
      width(){return true}
      height(){return true}
      left(){return true}
      right(){return true}
      top(){return true}
      bottom(){return true}
    }
    return this.jest.fn().mockReturnValue(res);
  }

  request():jest.Mock {
    const res: RequestTask = new class implements RequestTask {
      abort(){return true}
      onHeadersReceived(){return true}
      offHeadersReceived(){return true}
    }
    return this.jest.fn().mockReturnValue(res);
  }

  downloadFile():jest.Mock {
    const res: DownloadTask = new class implements DownloadTask {
      abort(){return true}
      onHeadersReceived(){return true}
      offHeadersReceived(){return true}
      onProgressUpdate(){return true}
      offProgressUpdate(){return true}
    }
    return this.jest.fn().mockReturnValue(res);
  }

  uploadFile():jest.Mock {
    const res: UploadTask = new class implements UploadTask {
      abort(){return true}
      onHeadersReceived(){return true}
      offHeadersReceived(){return true}
      onProgressUpdate(){return true}
      offProgressUpdate(){return true}
    }
    return this.jest.fn().mockReturnValue(res);
  }

  connectSocket():jest.Mock {
    const res:SocketTask = new class implements SocketTask {
      send(){return true}
      close(){return true}
      onOpen(){return true}
      onClose(){return true}
      onError(){return true}
      onMessage(){return true}
    }
    return this.jest.fn().mockReturnValue(res);
  }
}