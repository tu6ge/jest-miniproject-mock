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
})