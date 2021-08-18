import {UpdateManager} from './interfaces/index'
export class Weixin {
  private jest: typeof jest;

  /**
   * api 列表
   * key 是api
   * value 是返回值
  */
  readonly apis = {
    'showModal': Promise,
    'canIUse': true,
    'base64ToArrayBuffer': new ArrayBuffer(8),
    'arrayBufferToBase64': 'base64str',
    'getSystemInfoSync': Promise,
    'getSystemInfoAsync': undefined,
    'getSystemInfo': Promise,
    'updateWeChatApp': Promise,
    'getUpdateManager': undefined,
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
    'onUnhandledRejection':undefined,
    'onThemeChange':undefined, 
    /* TODO
    * 类似 onThemeChange 的 api: onPageNotFound, onError,onAudioInterruptionEnd, onAudioInterruptionBegin,
    * onAppShow, onAppHide, offUnhandledRejection, offThemeChange, offPageNotFound, offError, offAudioInterruptionEnd
    * offAudioInterruptionBegin,offAppShow, offAppHide
    */ 
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

  onUnhandledRejection():jest.Mock {
    return this.jest.fn((callback)=>{
      // TODO test call
      // callback()
    }).mockReturnValue(undefined)
  }

  onThemeChange():jest.Mock {
    return this.jest.fn((callback)=>{
      // TODO test call
      // callback()
    }).mockReturnValue(undefined)
  }
}