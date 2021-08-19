import {
  UpdateManager,
  RealtimeLogManager,
  LogManager
} from './interfaces/index'
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

}