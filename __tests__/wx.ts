import {Weixin} from '../src/wx';
import {UpdateManager} from '../src/interfaces/index'

describe('test weixin', () => {
  let wx
  beforeEach(() => {
    wx = new Weixin(jest);
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
  })
})