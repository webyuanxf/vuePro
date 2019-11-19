# 这是一个移动端的项目111

## [主流开源协议之间有何异同](https://blog.csdn.net/qq_39239110/article/details/92834885)

## 用(传统方式)命令行吧修改后的代码上传到github
1. git add  . 
2. git commit -m "提交信息"
3. git push

## 制作首页App组件
1.完成Header区域，使用的是MintUI的Header组件
2.完成底部的Tabbar区域，使用MUI的Tabbar.html
  + 在制作购物车小图标的时候，操作会相对多一些
  + 先把扩展图标的css样式拷贝到项目中
  + 拷贝字体库ttf文件到项目中
  + 为 购物车 小图标 ，添加 如下样式 `mui-icon mui-icon-extra mui-icon-extra-cart`
3.要在中间区域放置一个router-view来战士路由匹配的组件

## 改造tabbar为router-link

## 设置路由高亮

## 点击tabbar中的链接，展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
 1.获取数据，如果获取呢，使用axios(vue-resource)
 2.使用axios的this.axios.get获取数据
 3.获取到的数据保存在data上
 4.使用v-for 循环渲染每个item项

## 改造九宫格区域的样式

