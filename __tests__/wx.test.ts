import {Weixin} from '../src/wx';

describe('test weixin', () => {
  let wx
  beforeEach(() => {
    wx = new Weixin(jest);
  })

  it('test defineProperty', () => {
    wx.defineProperty('foo')
    expect(wx).toHaveProperty('foo');
  })

  it('showModal', ()=>{
    expect(wx.showModal()).toBe(Promise);
  })

  it('canIUse', ()=>{
    expect(wx.canIUse()).toBeTruthy();
  })

  it('base64ToArrayBuffer', ()=>{
    expect(wx.base64ToArrayBuffer()).toStrictEqual(new ArrayBuffer(8));
  })

  it('arrayBufferToBase64', ()=>{
    expect(wx.arrayBufferToBase64()).toBe('base64str');
  })

  it('getSystemInfoSync', ()=>{
    expect(wx.getSystemInfoSync()).toBe(Promise);
  })

  it('getSystemInfoAsync', ()=>{
    expect(wx.getSystemInfoAsync()).toBeUndefined()
  })

  it('getUpdateManager', ()=>{
    expect(wx.getUpdateManager()).toHaveProperty('applyUpdate')
    expect(wx.getUpdateManager()).toHaveProperty('onCheckForUpdate')
    expect(wx.getUpdateManager()).toHaveProperty('onUpdateReady')
    expect(wx.getUpdateManager()).toHaveProperty('onUpdateFailed')
    expect(wx.getUpdateManager().applyUpdate()).toBeTruthy()
    expect(wx.getUpdateManager().onCheckForUpdate()).toBeTruthy()
    expect(wx.getUpdateManager().onUpdateReady()).toBeTruthy()
    expect(wx.getUpdateManager().onUpdateFailed()).toBeTruthy()
  })

  it('getLaunchOptionsSync', ()=>{
    expect(wx.getLaunchOptionsSync()).toStrictEqual({
      path:'bar',
      scene:1000,
      query: {bar:'foo'},
      shareTicket:'foo-share',
      referrerInfo: {},
      forwardMaterials:[],
      chatType:0,
    })
  })

  it('getEnterOptionsSync', ()=>{
    expect(wx.getEnterOptionsSync()).toStrictEqual({
      path:'bar/foo',
      scene:1000,
      query: {bar:'foo'},
      shareTicket:'foo-share',
      referrerInfo: {},
      forwardMaterials:[],
      chatType:0,
    })
  })

  it('onUnhandledRejection', ()=>{
    expect(wx.onUnhandledRejection()).toBeUndefined()
  })
  

  it('onThemeChange', ()=>{
    expect(wx.onThemeChange()).toBeUndefined()
  })

  it('onPageNotFound', ()=>{
    expect(wx.onPageNotFound()).toBeUndefined()
  })

  it('onError', ()=>{
    expect(wx.onError()).toBeUndefined()
  })

  it('onAudioInterruptionEnd', ()=>{
    expect(wx.onAudioInterruptionEnd()).toBeUndefined()
  })

  it('onAudioInterruptionBegin', ()=>{
    expect(wx.onAudioInterruptionBegin()).toBeUndefined()
  })

  it('onAppShow', ()=>{
    expect(wx.onAppShow()).toBeUndefined()
  })

  it('onAppHide', ()=>{
    expect(wx.onAppHide()).toBeUndefined()
  })

  it('offUnhandledRejection', ()=>{
    expect(wx.offUnhandledRejection()).toBeUndefined()
  })

  it('offThemeChange', ()=>{
    expect(wx.offThemeChange()).toBeUndefined()
  })

  it('offPageNotFound', ()=>{
    expect(wx.offPageNotFound()).toBeUndefined()
  })

  it('offError', ()=>{
    expect(wx.offError()).toBeUndefined()
  })

  it('offAudioInterruptionEnd', ()=>{
    expect(wx.offAudioInterruptionEnd()).toBeUndefined()
  })

  it('offAudioInterruptionBegin', ()=>{
    expect(wx.offAudioInterruptionBegin()).toBeUndefined()
  })

  it('offAppShow', ()=>{
    expect(wx.offAppShow()).toBeUndefined()
  })

  it('offAppHide', ()=>{
    expect(wx.offAppHide()).toBeUndefined()
  })

  it('getRealtimeLogManager', ()=>{
    expect(wx.getRealtimeLogManager().info()).toBeTruthy()
    expect(wx.getRealtimeLogManager().warn()).toBeTruthy()
    expect(wx.getRealtimeLogManager().error()).toBeTruthy()
    expect(wx.getRealtimeLogManager().setFilterMsg('bar')).toBe('bar')
    expect(wx.getRealtimeLogManager().addFilterMsg('bar')).toBe('bar')
  })

  it('getLogManager', ()=>{
    expect(wx.getLogManager().debug()).toBeTruthy()
    expect(wx.getLogManager().info()).toBeTruthy()
    expect(wx.getLogManager().log()).toBeTruthy()
    expect(wx.getLogManager().warn()).toBeTruthy()
  })

  it('reportPerformance', () => {
    expect(wx.reportPerformance()).toBeUndefined()
  })

  it('getPerformance', ()=>{
    expect(wx.getPerformance()).toBeUndefined()
  })

  it('getUserCryptoManager', ()=>{
    expect(wx.getUserCryptoManager()).toBeUndefined()
  })

  it('route', ()=>{
    expect(wx.switchTab()).toBe(Promise)
    expect(wx.reLaunch()).toBe(Promise)
    expect(wx.redirectTo()).toBe(Promise)
    expect(wx.navigateTo()).toBe(Promise)
    expect(wx.navigateBack()).toBe(Promise)
  })

  it('redirect', () => {
    expect(wx.navigateToMiniProgram()).toBe(Promise)
    expect(wx.navigateBackMiniProgram()).toBe(Promise)
    expect(wx.exitMiniProgram()).toBe(Promise)
  })

  it('report', () => {
    expect(wx.updateShareMenu()).toBe(Promise)
    expect(wx.showShareMenu()).toBe(Promise)
    expect(wx.showShareImageMenu()).toBe(Promise)
    expect(wx.shareVideoMessage()).toBe(Promise)
    expect(wx.shareFileMessage()).toBe(Promise)
    expect(wx.onCopyUrl()).toBe(undefined)
    expect(wx.offCopyUrl()).toBe(undefined)
    expect(wx.hideShareMenu()).toBe(Promise)
    expect(wx.getShareInfo()).toBe(undefined)
    expect(wx.authPrivateMessage()).toBe(undefined)
  })

  it('view interactive', ()=>{
    expect(wx.showToast()).toBe(Promise)
    expect(wx.showModal()).toBe(Promise)
    expect(wx.showLoading()).toBe(Promise)
    expect(wx.showActionSheet()).toBe(Promise)
    expect(wx.hideToast()).toBe(Promise)
    expect(wx.hideLoading()).toBe(Promise)
    expect(wx.enableAlertBeforeUnload()).toBe(undefined)
    expect(wx.disableAlertBeforeUnload()).toBe(undefined)

    expect(wx.showNavigationBarLoading()).toBe(Promise)
    expect(wx.setNavigationBarTitle()).toBe(Promise)
    expect(wx.setNavigationBarColor()).toBe(Promise)
    expect(wx.hideNavigationBarLoading()).toBe(Promise)
    expect(wx.hideHomeButton()).toBe(Promise)

    expect(wx.setBackgroundTextStyle()).toBe(Promise)
    expect(wx.setBackgroundColor()).toBe(Promise)

    expect(wx.showTabBarRedDot()).toBe(Promise)
    expect(wx.showTabBar()).toBe(Promise)
    expect(wx.setTabBarStyle()).toBe(Promise)
    expect(wx.setTabBarItem()).toBe(Promise)
    expect(wx.setTabBarBadge()).toBe(Promise)
    expect(wx.removeTabBarBadge()).toBe(Promise)
    expect(wx.hideTabBarRedDot()).toBe(Promise)
    expect(wx.hideTabBar()).toBe(Promise)

    expect(wx.loadFontFace()).toBe(Promise)
    expect(wx.stopPullDownRefresh()).toBe(Promise)
    expect(wx.startPullDownRefresh()).toBe(Promise)
    expect(wx.pageScrollTo()).toBe(Promise)
    
  })

  it('createAnimation', () => {
    expect(wx.createAnimation().export()).toBeTruthy()
    expect(wx.createAnimation().step()).toBeTruthy()
    expect(wx.createAnimation().matrix()).toBeTruthy()
    expect(wx.createAnimation().matrix3d()).toBeTruthy()
    expect(wx.createAnimation().rotate()).toBeTruthy()
    expect(wx.createAnimation().rotate3d()).toBeTruthy()
    expect(wx.createAnimation().rotateX()).toBeTruthy()
    expect(wx.createAnimation().rotateY()).toBeTruthy()
    expect(wx.createAnimation().rotateZ()).toBeTruthy()
    expect(wx.createAnimation().scale()).toBeTruthy()
    expect(wx.createAnimation().scale3d()).toBeTruthy()
    expect(wx.createAnimation().scaleX()).toBeTruthy()
    expect(wx.createAnimation().scaleY()).toBeTruthy()
    expect(wx.createAnimation().scaleZ()).toBeTruthy()
    expect(wx.createAnimation().skew()).toBeTruthy()
    expect(wx.createAnimation().skewX()).toBeTruthy()
    expect(wx.createAnimation().skewY()).toBeTruthy()
    expect(wx.createAnimation().translate()).toBeTruthy()
    expect(wx.createAnimation().translate3d()).toBeTruthy()
    expect(wx.createAnimation().translateX()).toBeTruthy()
    expect(wx.createAnimation().translateY()).toBeTruthy()
    expect(wx.createAnimation().translateZ()).toBeTruthy()
    expect(wx.createAnimation().opacity()).toBeTruthy()
    expect(wx.createAnimation().backgroundColor()).toBeTruthy()
    expect(wx.createAnimation().width()).toBeTruthy()
    expect(wx.createAnimation().height()).toBeTruthy()
    expect(wx.createAnimation().left()).toBeTruthy()
    expect(wx.createAnimation().right()).toBeTruthy()
    expect(wx.createAnimation().top()).toBeTruthy()
    expect(wx.createAnimation().bottom()).toBeTruthy()
  })

  it('view other', () => {
    expect(wx.setTopBarText()).toBe(Promise)
    expect(wx.nextTick()).toBe(undefined)
    expect(wx.getMenuButtonBoundingClientRect()).toStrictEqual({
      width:100,
      height:101,
      top:102,
      right:103,
      bottom:104,
      left:105,
    })
    expect(wx.setWindowSize()).toBe(undefined)
    expect(wx.onWindowResize()).toBe(undefined)
    expect(wx.offWindowResize()).toBe(undefined)
  })

  it('network request', () => {
    expect(wx.request().abort()).toBeTruthy()
    expect(wx.request().onHeadersReceived()).toBeTruthy()
    expect(wx.request().offHeadersReceived()).toBeTruthy()
  })

  it('network downloadFile', () => {
    expect(wx.downloadFile().abort()).toBeTruthy()
    expect(wx.downloadFile().onHeadersReceived()).toBeTruthy()
    expect(wx.downloadFile().offHeadersReceived()).toBeTruthy()
    expect(wx.downloadFile().onProgressUpdate()).toBeTruthy()
    expect(wx.downloadFile().offProgressUpdate()).toBeTruthy()
  })
  it('network uploadFile', () => {
    expect(wx.uploadFile().abort()).toBeTruthy()
    expect(wx.uploadFile().onHeadersReceived()).toBeTruthy()
    expect(wx.uploadFile().offHeadersReceived()).toBeTruthy()
    expect(wx.uploadFile().onProgressUpdate()).toBeTruthy()
    expect(wx.uploadFile().offProgressUpdate()).toBeTruthy()
  })

  it('network connectSocket', () => {
    expect(wx.connectSocket().send()).toBeTruthy()
    expect(wx.connectSocket().close()).toBeTruthy()
    expect(wx.connectSocket().onOpen()).toBeTruthy()
    expect(wx.connectSocket().onClose()).toBeTruthy()
    expect(wx.connectSocket().onError()).toBeTruthy()
    expect(wx.connectSocket().onMessage()).toBeTruthy()
  })

  it('network other', ()=>{
    expect(wx.sendSocketMessage()).toBe(Promise)
    expect(wx.onSocketOpen()).toBe(undefined)
    expect(wx.onSocketMessage()).toBe(undefined)
    expect(wx.onSocketError()).toBe(undefined)
    expect(wx.onSocketClose()).toBe(undefined)
    expect(wx.closeSocket()).toBe(Promise)
  })

  it('data cache', () => {
    expect(wx.setStorageSync()).toBe(Promise)
    expect(wx.setStorage()).toBe(Promise)
    expect(wx.revokeBufferURL()).toBe(Promise)
    expect(wx.removeStorageSync()).toBe(Promise)
    expect(wx.removeStorage()).toBe(Promise)
    expect(wx.getStorageSync()).toBe(Promise)
    expect(wx.getStorageInfoSync()).toBe(Promise)
    expect(wx.getStorageInfo()).toBe(Promise)
    expect(wx.getStorage()).toBe(Promise)
    expect(wx.createBufferURL()).toBe(undefined)
    expect(wx.clearStorageSync()).toBe(Promise)
    expect(wx.clearStorage()).toBe(Promise)
    expect(wx.setBackgroundFetchToken()).toBe(Promise)
    expect(wx.onBackgroundFetchData()).toBe(undefined)
    expect(wx.getBackgroundFetchToken()).toBe(Promise)
    expect(wx.getBackgroundFetchData()).toBe(Promise)
  })

  it('data analysis', () => {
    expect(wx.reportMonitor()).toBe(undefined)
    expect(wx.reportEvent()).toBe(undefined)
    expect(wx.reportAnalytics()).toBe(undefined)
    expect(wx.getExptInfoSync()).toStrictEqual({'foo1':'bar1'})
  })

  it('canvas', () =>{
    expect(wx.createOffscreenCanvas()).toBe(undefined)
    expect(wx.createCanvasContext()).toBe(undefined)
    expect(wx.canvasToTempFilePath()).toBe(Promise)
    expect(wx.canvasPutImageData()).toBe(Promise)
    expect(wx.canvasGetImageData()).toBe(Promise)
  })

  it('media', () => {
    expect(wx.createMapContext()).toBe(undefined)
    expect(wx.saveImageToPhotosAlbum()).toBe(Promise)
    expect(wx.previewMedia()).toBe(Promise)
    expect(wx.previewImage()).toBe(Promise)
    expect(wx.getImageInfo()).toBe(Promise)
    expect(wx.compressImage()).toBe(Promise)
    expect(wx.chooseMessageFile()).toBe(Promise)
    expect(wx.chooseImage()).toBe(Promise)
    expect(wx.saveVideoToPhotosAlbum()).toBe(Promise)
    expect(wx.openVideoEditor()).toBe(undefined)
    expect(wx.getVideoInfo()).toBe(undefined)
    expect(wx.createVideoContext()).toBe(undefined)
    expect(wx.compressVideo()).toBe(Promise)
    expect(wx.chooseVideo()).toBe(Promise)
    expect(wx.chooseMedia()).toBe(Promise)
    expect(wx.stopVoice()).toBe(Promise)
    expect(wx.setInnerAudioOption()).toBe(Promise)
    expect(wx.playVoice()).toBe(Promise)
    expect(wx.pauseVoice()).toBe(Promise)
    expect(wx.getAvailableAudioSources()).toBe(Promise)
    expect(wx.createWebAudioContext()).toBe(undefined)
    expect(wx.createMediaAudioPlayer()).toBe(undefined)
    expect(wx.createInnerAudioContext()).toBe(undefined)
    expect(wx.createAudioContext()).toBe(undefined)
    expect(wx.stopBackgroundAudio()).toBe(Promise)
    expect(wx.seekBackgroundAudio()).toBe(Promise)
    expect(wx.playBackgroundAudio()).toBe(Promise)
    expect(wx.pauseBackgroundAudio()).toBe(Promise)
    expect(wx.onBackgroundAudioStop()).toBe(undefined)
    expect(wx.onBackgroundAudioPlay()).toBe(undefined)
    expect(wx.onBackgroundAudioPause()).toBe(undefined)
    expect(wx.getBackgroundAudioPlayerState()).toBe(Promise)
    expect(wx.getBackgroundAudioManager()).toBe(undefined)
    expect(wx.createLivePusherContext()).toBe(undefined)
    expect(wx.createLivePlayerContext()).toBe(undefined)
    expect(wx.stopRecord()).toBe(Promise)
    expect(wx.startRecord()).toBe(Promise)
    expect(wx.getRecorderManager()).toBe(undefined)
    expect(wx.createCameraContext()).toBe(undefined)
    expect(wx.createMediaContainer()).toBe(undefined)
    expect(wx.updateVoIPChatMuteConfig()).toBe(Promise)
    expect(wx.subscribeVoIPVideoMembers()).toBe(Promise)
    expect(wx.onVoIPVideoMembersChanged()).toBe(undefined)
    expect(wx.onVoIPChatStateChanged()).toBe(undefined)
    expect(wx.onVoIPChatSpeakersChanged()).toBe(undefined)
    expect(wx.onVoIPChatMembersChanged()).toBe(undefined)
    expect(wx.onVoIPChatInterrupted()).toBe(undefined)
    expect(wx.offVoIPVideoMembersChanged()).toBe(undefined)
    expect(wx.offVoIPChatStateChanged()).toBe(undefined)
    expect(wx.offVoIPChatMembersChanged()).toBe(undefined)
    expect(wx.offVoIPChatInterrupted()).toBe(undefined)
    expect(wx.joinVoIPChat()).toBe(Promise)
    expect(wx.exitVoIPChat()).toBe(Promise)
    expect(wx.createMediaRecorder()).toBe(undefined)
    expect(wx.createVideoDecoder()).toBe(undefined)
  })

  it('location', () => {
    expect(wx.stopLocationUpdate()).toBe(Promise)
    expect(wx.startLocationUpdateBackground()).toBe(Promise)
    expect(wx.startLocationUpdate()).toBe(Promise)
    expect(wx.openLocation()).toBe(Promise)
    expect(wx.onLocationChange()).toBe(undefined)
    expect(wx.offLocationChange()).toBe(undefined)
    expect(wx.getLocation()).toBe(Promise)
    expect(wx.choosePoi()).toBe(Promise)
    expect(wx.chooseLocation()).toBe(Promise)
  })

  it('file', () => {
    expect(wx.saveFileToDisk()).toBe(undefined)
    expect(wx.saveFile()).toBe(Promise)
    expect(wx.removeSavedFile()).toBe(Promise)
    expect(wx.openDocument()).toBe(Promise)
    expect(wx.getSavedFileList()).toBe(Promise)
    expect(wx.getSavedFileInfo()).toBe(Promise)
    expect(wx.getFileSystemManager()).toBe(undefined)
    expect(wx.getFileInfo()).toBe(Promise)
  })

  it('open-api', () => {
    expect(wx.login()).toBe(undefined)
    expect(wx.checkSession()).toBe(Promise)
    expect(wx.getAccountInfoSync()).toStrictEqual({
      miniProgram:{
        appId:'xxx',
        envVersion:'bar',
        version:'0.0.0',
      },
      plugin:{
        appId:'xxx',
        version:'0.0.0',
      }
    })
    expect(wx.getUserProfile()).toBe(Promise)
    expect(wx.getUserInfo()).toBe(undefined)
    expect(wx.authorizeForMiniProgram()).toBe(undefined)
    expect(wx.authorize()).toBe(Promise)
    expect(wx.openSetting()).toBe(Promise)
    expect(wx.getSetting()).toBe(Promise)
    expect(wx.chooseAddress()).toBe(Promise)
    expect(wx.openCard()).toBe(Promise)
    expect(wx.addCard()).toBe(Promise)
    expect(wx.chooseInvoiceTitle()).toBe(Promise)
    expect(wx.chooseInvoice()).toBe(Promise)
    expect(wx.startSoterAuthentication()).toBe(Promise)
    expect(wx.checkIsSupportSoterAuthentication()).toBe(Promise)
    expect(wx.checkIsSoterEnrolledInDevice()).toBe(Promise)
    expect(wx.shareToWeRun()).toBe(Promise)
    expect(wx.getWeRunData()).toBe(undefined)
    expect(wx.requestSubscribeMessage()).toBe(Promise)
    expect(wx.showRedPackage()).toBe(Promise)
    expect(wx.addVideoToFavorites()).toBe(Promise)
    expect(wx.addFileToFavorites()).toBe(Promise)
    expect(wx.chooseLicensePlate()).toBe(Promise)
    expect(wx.reserveChannelsLive()).toBe(undefined)
    expect(wx.openChannelsLive()).toBe(undefined)
    expect(wx.openChannelsActivity()).toBe(undefined)
    expect(wx.getChannelsLiveNoticeInfo()).toBe(undefined)
    expect(wx.getChannelsLiveInfo()).toBe(undefined)
    expect(wx.getGroupEnterInfo()).toBe(undefined)
    expect(wx.openCustomerServiceChat()).toBe(undefined)
  })

  it('device', () => {
    expect(wx.stopBluetoothDevicesDiscovery()).toBe(Promise)
    expect(wx.startBluetoothDevicesDiscovery()).toBe(Promise)
    expect(wx.openBluetoothAdapter()).toBe(Promise)
    expect(wx.onBluetoothDeviceFound()).toBe(undefined)
    expect(wx.onBluetoothAdapterStateChange()).toBe(undefined)
    expect(wx.offBluetoothDeviceFound()).toBe(undefined)
    expect(wx.offBluetoothAdapterStateChange()).toBe(undefined)
    expect(wx.makeBluetoothPair()).toBe(Promise)
    expect(wx.getConnectedBluetoothDevices()).toBe(Promise)
    expect(wx.getBluetoothDevices()).toBe(Promise)
    expect(wx.getBluetoothAdapterState()).toBe(Promise)
    expect(wx.closeBluetoothAdapter()).toBe(Promise)
    expect(wx.writeBLECharacteristicValue()).toBe(Promise)
    expect(wx.setBLEMTU()).toBe(Promise)
    expect(wx.readBLECharacteristicValue()).toBe(Promise)
    expect(wx.onBLEConnectionStateChange()).toBe(undefined)
    expect(wx.onBLECharacteristicValueChange()).toBe(undefined)
    expect(wx.offBLEConnectionStateChange()).toBe(undefined)
    expect(wx.offBLECharacteristicValueChange()).toBe(undefined)
    expect(wx.notifyBLECharacteristicValueChange()).toBe(Promise)
    expect(wx.getBLEDeviceServices()).toBe(Promise)
    expect(wx.getBLEDeviceRSSI()).toBe(Promise)
    expect(wx.getBLEDeviceCharacteristics()).toBe(Promise)
    expect(wx.createBLEConnection()).toBe(Promise)
    expect(wx.closeBLEConnection()).toBe(Promise)
    expect(wx.onBLEPeripheralConnectionStateChanged()).toBe(undefined)
    expect(wx.offBLEPeripheralConnectionStateChanged()).toBe(undefined)
    expect(wx.createBLEPeripheralServer()).toBe(Promise)
    expect(wx.stopBeaconDiscovery()).toBe(Promise)
    expect(wx.startBeaconDiscovery()).toBe(Promise)
    expect(wx.onBeaconUpdate()).toBe(undefined)
    expect(wx.onBeaconServiceChange()).toBe(undefined)
    expect(wx.offBeaconUpdate()).toBe(undefined)
    expect(wx.offBeaconServiceChange()).toBe(undefined)
    expect(wx.getBeacons()).toBe(Promise)
    expect(wx.stopHCE()).toBe(Promise)
    expect(wx.startHCE()).toBe(Promise)
    expect(wx.sendHCEMessage()).toBe(Promise)
    expect(wx.onHCEMessage()).toBe(undefined)
    expect(wx.offHCEMessage()).toBe(undefined)
    expect(wx.getNFCAdapter()).toBe(undefined)
    expect(wx.getHCEState()).toBe(Promise)
    expect(wx.stopWifi()).toBe(Promise)
    expect(wx.startWifi()).toBe(Promise)
    expect(wx.setWifiList()).toBe(Promise)
    expect(wx.onWifiConnected()).toBe(undefined)
    expect(wx.onGetWifiList()).toBe(undefined)
    expect(wx.offWifiConnected()).toBe(undefined)
    expect(wx.offGetWifiList()).toBe(undefined)
    expect(wx.getWifiList()).toBe(Promise)
    expect(wx.getConnectedWifi()).toBe(Promise)
    expect(wx.connectWifi()).toBe(Promise)
    expect(wx.addPhoneRepeatCalendar()).toBe(Promise)
    expect(wx.addPhoneCalendar()).toBe(Promise)
    expect(wx.searchContacts()).toBe(Promise)
    expect(wx.chooseContact()).toBe(undefined)
    expect(wx.addPhoneContact()).toBe(Promise)
    expect(wx.checkIsOpenAccessibility()).toBe(Promise)
    expect(wx.getBatteryInfoSync()).toBe(Promise)
    expect(wx.getBatteryInfo()).toBe(Promise)
    expect(wx.setClipboardData()).toBe(Promise)
    expect(wx.getClipboardData()).toBe(Promise)
    expect(wx.onNetworkStatusChange()).toBe(undefined)
    expect(wx.offNetworkStatusChange()).toBe(undefined)
    expect(wx.getNetworkType()).toBe(Promise)
    expect(wx.getRandomValues()).toBe(Promise)
    expect(wx.setScreenBrightness()).toBe(Promise)
    expect(wx.setKeepScreenOn()).toBe(Promise)
    expect(wx.onUserCaptureScreen()).toBe(undefined)
    expect(wx.offUserCaptureScreen()).toBe(undefined)
    expect(wx.getScreenBrightness()).toBe(Promise)
    expect(wx.onKeyboardHeightChange()).toBe(undefined)
    expect(wx.offKeyboardHeightChange()).toBe(undefined)
    expect(wx.hideKeyboard()).toBe(Promise)
    expect(wx.getSelectedTextRange()).toBe(Promise)
    expect(wx.makePhoneCall()).toBe(Promise)
    expect(wx.stopAccelerometer()).toBe(Promise)
    expect(wx.startAccelerometer()).toBe(Promise)
    expect(wx.onAccelerometerChange()).toBe(undefined)
    expect(wx.offAccelerometerChange()).toBe(undefined)
    expect(wx.stopCompass()).toBe(Promise)
    expect(wx.startCompass()).toBe(Promise)
    expect(wx.onCompassChange()).toBe(undefined)
    expect(wx.offCompassChange()).toBe(undefined)
    expect(wx.stopDeviceMotionListening()).toBe(Promise)
    expect(wx.startDeviceMotionListening()).toBe(Promise)
    expect(wx.onDeviceMotionChange()).toBe(undefined)
    expect(wx.offDeviceMotionChange()).toBe(undefined)
    expect(wx.stopGyroscope()).toBe(Promise)
    expect(wx.onGyroscopeChange()).toBe(undefined)
    expect(wx.offGyroscopeChange()).toBe(undefined)
    expect(wx.onMemoryWarning()).toBe(undefined)
    expect(wx.offMemoryWarning()).toBe(undefined)
    expect(wx.scanCode()).toBe(Promise)
    expect(wx.vibrateShort()).toBe(Promise)
    expect(wx.vibrateLong()).toBe(Promise)
  })

  it('ai', () => {
    expect(wx.stopFaceDetect()).toBe(undefined)
    expect(wx.initFaceDetect()).toBe(undefined)
    expect(wx.faceDetect()).toBe(undefined)
  })

  it('createWorker', () => {
    expect(wx.createWorker()).toBe(undefined)
  })

  it('other api', () => {
    expect(wx.createSelectorQuery()).toBe(undefined)
    expect(wx.createIntersectionObserver()).toBe(undefined)
    expect(wx.getExtConfigSync()).toBe(undefined)
    expect(wx.getExtConfig()).toBe(Promise)
    expect(wx.createRewardedVideoAd()).toBe(undefined)
    expect(wx.createInterstitialAd()).toBe(undefined)
  })
})