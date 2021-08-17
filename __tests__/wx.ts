import {Weixin} from '../src/wx';

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
})