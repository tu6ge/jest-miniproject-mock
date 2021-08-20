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
})