AngularJs为第一版。
运行以下命令以克隆GitHub上的 angular-phonecat repository：
```
git clone --depth=14 https://github.com/angular/angular-phonecat.git
```
该`--depth=14`的选项仅仅是告诉Git只拉下来最后的14次提交。这样使下载更小更快。  
中文版14，执行 git checkout -f step-0 时报错
英文版16，执行结果为    
```
Note: checking out 'step-0'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by performing another checkout.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -b with the checkout command again. Example:

  git checkout -b <new-branch-name>

HEAD is now at b160462... step-0 Bootstrapping
```

```
cd angular-phonecat  // 把你当前的目录变成angular-phonecat。    
npm install   // 这个命令读取了angular-phonecat的package.json文件，并把以下工具下载到node_modules目录中   
npm start  // 启动一个本地开发Web服务器
npm test  // 启动Karma单元测试运行器
npm run protractor  //运行Protractor端到端（E2E）测试
npm run update-webdriver   //安装Protractor所需要的驱动程序    
```     

打开http://localhost:8000 可以看到效果   

