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
    
    const callback = jest.fn(()=> 'bar');
    wx.onUnhandledRejection(callback)
    expect(wx.onUnhandledRejection).toHaveBeenCalledWith(callback)
    // expect(callback).toBeCalled()
  })
  

  it('onThemeChange', ()=>{
    expect(wx.onThemeChange()).toBeUndefined()
    
    const callback = jest.fn(()=> 'bar');
    wx.onThemeChange(callback)
    expect(wx.onThemeChange).toHaveBeenCalledWith(callback)
    // expect(callback).toBeCalled()
  })
})