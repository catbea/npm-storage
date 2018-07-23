# 使用文档

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