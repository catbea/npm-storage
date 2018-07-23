# npm-storage
短小精悍的前端缓存插件，解决前端内存泄漏问题

## 简介
- 这是一个H5的缓存插件，在项目中经常会使用localStorage或sessionStorage来缓存数据，
- 为了使代码更精炼整洁，有经验有能力的开发同学都会对缓存的方法做封装。
- 作者已帮你造好了这个轮子，拿来即用！！！
- 非常开心，您发现了“我”，请放心使用吧！！！

## 安装 
### 使用npm：npm install npm-storage

### 使用git
- 一，ssh方式：`git clone git@github.com:catbea/npm-storage.git`
- 二，https方式：`git clone https://github.com/catbea/npm-storage.git`

## 使用方式
首先在html文件中引入js（根据你项目的路径）
`<script src="../dist/main.js"></script>`

- （提示：众所周知，H5的缓存有两个，一是永久缓存localStorage，二是会话级缓存sessionStorage）
- 在本插件中
- MyLStorage 代表localStorage 
- MySStorage 代表sessionStorage

### 增加缓存(MyLStorage和MySStorage使用方法一致)
`MyLStorage.set(key,value);`
###  获取缓存
`MyLStorage.get(key);`
###  删除某一个缓存
`MyLStorage.remove(key);`
###  清除所有缓存
`MyLStorage.clear();`


## 源码下载
https://github.com/catbea/npm-storage/releases

## 交流和提问
https://github.com/catbea/npm-storage/issues

## 关于作者
- 作者本人从事前端数年，热爱前端事业，热衷于为广大前端开发同学做一点小贡献。
- 在这条路上有你有我，一同向前~~~

## ending
- 如果用的顺手，请给个小star!!!
- 满意的话，可以支持一下！！！
- `加微信好友<br>`
![image](https://github.com/catbea/my-vue-ele/blob/master/20180723102702.jpg)
- `微信扫码支持<br>`
![image](https://github.com/catbea/my-vue-ele/blob/master/20180723102706wx.jpg)
- `支付宝扫码支持<br>`
![image](https://github.com/catbea/my-vue-ele/blob/master/20180723102711zfb.jpg)



