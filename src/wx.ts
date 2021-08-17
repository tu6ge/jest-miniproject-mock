export class Weixin {
  private jest: typeof jest;
  readonly apis: string[] = [
    'showModal'
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
    return this.jest.fn(()=>{
      return 'abc'
      return Promise.resolve()
    })
  }
}