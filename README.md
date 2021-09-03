# jest-miniproject-mock

模拟小程序内置 api 的 jest mock

## 使用方法

### 安装

```
yarn add -D jest-miniproject-mock

// or

npm i -D jest-miniproject-mock
```

### 配置到 jest 中

打开 `jest.config.js` 添加如下配置：

```
module.exports = {
  // ...
  setupFiles: ['jest-miniproject-mock'],
};
```

### 使用方式举例

```
test('test showModal in weapp', ()=>{
  // 当前处于微信开发环境 ...
  Taro.showModal('12')
  expect(wx.showModal).toHaveBeenCalled()
  expect(wx.showModal).toHaveBeenCalledWith('12')
})

```