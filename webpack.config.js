//由于webpack是基于node进行构建的，所以，webpack的配置文件中，任何合法的node代码都是支持的
var path=require("path");
//在内存中根据指定的模板页面，生成一份内存中的首页，同时自动吧打包好的bundle注入到页面底部
//如果要配置插件，需要在导出的对象中，挂在一个plugins节点
var htmlWebpackPlugin=require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

//当以命令行形式运行webpack或者webpack-dev-server的时候，工具会发现，我们并没有提供 要打包的文件的入口和出口文件，此时，他会检查项目根目录中的配置文件并读取这个文件，就拿到了导出的这个配置对象，根据这个配置对象进行打包构建
module.exports={
    entry:path.join(__dirname,'./src/main.js'),//入口文件
    output:{
        path:path.join(__dirname,'./dist'),//输出路径
        filename:'bundle.js'//指定输出的文件名称
    },
    plugins:[//所有webpack插件的配置节点
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),//指定模板文件路径
            filename:'index.html'//设置生成的内存页面的名称
        }),
        //在vue-loader v15的版本中要使用次插件
        new VueLoaderPlugin()
    ],
    module:{//配置第三方的loader模块
        rules:[//第三方模块的匹配规则
            {test:/\.css$/,use:['style-loader','css-loader']},//处理css文件的loader
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},//处理less文件的loader
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},//处理scss文件的loader
            {test:/\.(jpg|png|gif|jpeg)$/,use:['url-loader?limit=7629&name=[hash:8]-[name].[ext]']},//处理图片路径的loader
            //limit给定的值是图片的大小，单位是byte，如果引用的图片大于或等于给定limit值，则不会转为base64格式的字符串，如果图片小于给定的limit，只会转为base64的字符串
            {test:/\.(ttf|woff|eot|svg|woff2|otf)$/,use:'url-loader'},//处理字体文件的loader
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},//这是配置babel来转换高级的es语法
            {test:/\.vue$/,use:'vue-loader'},//处理.vue文件的loader
        ]
    },
    resolve:{
       alias:{//修改vue被导入时候的包的路径
        //  "vue$":"vue/dist/vue.js"
       }
    }
}
