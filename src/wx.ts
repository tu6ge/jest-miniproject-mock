import {UpdateManager} from './interfaces/index'
export class Weixin {
  private jest: typeof jest;

  /**
   * api 列表
   * key 是api
   * value 是返回值
  */
  readonly apis: object = {
    'showModal': Promise,
    'canIUse': true,
    'base64ToArrayBuffer': new ArrayBuffer(8),
    'arrayBufferToBase64': 'base64str',
    'getSystemInfoSync': Promise,
    'getSystemInfoAsync': undefined,
    'getSystemInfo': Promise,
    'updateWeChatApp': Promise,
    'getUpdateManager': undefined,
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
              : this.jest.fn().mockReturnValue(this.apis[name])
    });
  }

  // TODO: 目前没有找到使用案例
  // env():jest.Mock {
  //   return this.jest.fn(()=> 'demo')
  // }

  getUpdateManager():jest.Mock {
    let res:UpdateManager = new class implements UpdateManager{
      applyUpdate(){}
      onCheckForUpdate(){}
      onUpdateReady(){}
      onUpdateFailed(){}
    }
    return this.jest.fn().mockReturnValue(res);
  }
}