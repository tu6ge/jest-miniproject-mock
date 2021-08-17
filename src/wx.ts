export class Weixin {
  private jest: typeof jest;
  readonly apis: string[] = [
    'showModal',
    'canIUse',
    'base64ToArrayBuffer',
    'arrayBufferToBase64'
  ];

  constructor(j: typeof jest) {
    this.jest = j;
    this.definePropertyList();
  }

  private definePropertyList(){
    for(const api of this.apis){
      this.defineProperty(api)
    }
  }
  
  private defineProperty(name: string):void {
    Object.defineProperty(this, name, {
      enumerable: false,
      value: this[name]()
    });
  }

  
  showModal():jest.Mock {
    return this.jest.fn().mockReturnValue(Promise)
  }

  // TODO: 目前没有找到使用案例
  env():jest.Mock {
    return this.jest.fn(()=> 'demo')
  }

  canIUse():jest.Mock {
    return this.jest.fn().mockReturnValue(true)
  }

  base64ToArrayBuffer():jest.Mock {
    return this.jest.fn().mockReturnValue(new ArrayBuffer(8))
  }

  arrayBufferToBase64():jest.Mock {
    return this.jest.fn().mockReturnValue('base64str')
  }

  // TODO 未完成
  getSystemInfoSync():jest.Mock {
    return this.jest.fn()
  }
}