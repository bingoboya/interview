const express = require("express");
const app = new express();
const bodyParser = require("body-parser");



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/bingojson", (req, res) => {
    console.log('bingojson', req.query);
    const {name, age} = req.query
    let data = {
        message: 'success',
        name: name,
        age: age
    }
    data = JSON.stringify(data)
    // 返回的是一个可执行的脚本语句，这个脚本语句返回到前端的script标签中，会被script标签执行
    // 前端的最终结果是这样：<script>func('abc')</script>,导致script中的脚本直接被自动执行，不受前端js逻辑控制，如果这个脚本中有恶意代码，也会被执行，导致被攻击
    const data1 = "alert('abc')"
    //使用res.json()方法返回值时会报错 MIME(with MIME tyoe application/json)
    // 使用res.send() 方法就好了
    // res.json({'a':'3'})
    res.end(data1)
    // res.end('func(' + data + ')')
});


http.listen(3000, {origins: '*:*'});
