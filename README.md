# birthday

> 一个基于vue的生日祝福网页，适配移动端，效果如下：

![第一页](/docs/login.png)
![第二页](/docs/cake.png)
![第三页](/docs/img.png)
![第四页](/docs/timeline.png)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```
本项目的代码也是继承自另一个开源项目的代码，可惜的是那位采用了一页一个html的方式，这样对audio元素的控制就没有了，一定要让用户在每一页都先点一下才能播放音乐。所以我就对整个项目都改造了下，vue的单页应用完美的解决了这个问题。
欢迎各位用了本项目后有什么对代码的优化改动提交pr，开源精神的传承需要你。
