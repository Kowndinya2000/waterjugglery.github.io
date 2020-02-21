var x;
var y;
var v;
var t;
var final;
var path = require('path')
var cors = require('cors')  
var app = require("express")()
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({
      credentials: true,
  }))
var bodyParser = require("body-parser")
app.get("/", function (req, res, next) {
    res.render("home2.ejs", { message: "" });
    res.header('Acess-Control-Allow-Credentials','true')
    res.header('Access-Control-Allow-Origin', '*');
});

app.post("/jugglerywater", function (req, res, next) {
    req.header('Access-Control-Allow-Origin', '*');
    var str = req.body.link;
    console.log(str)
    var send_str
    var arr = str.split(',')
    if(arr[arr.length-1] == "f1")
    {
        console.log('executed function 1')
        send_str = "executed function 1"
        x=arr[0]
        y=arr[1]
        v=arr[2]
        t=arr[3]
        final = arr[4]
        if(x ==  arr[4])
        {
            console.log("the goal is reached")
        }
    }
    else if(arr[arr.length-1] == "rule")
    {
        console.log(x)
        console.log(y)
        console.log(v)
        console.log(t)
        var rule = arr[0]
        if(rule == 1)
        {
            if (x < v)
            {
            x=v
            send_str = "X: " + x.toString() + "Y: " + y.toString()
            }
        }
        else if (rule == 2)
        {
            if(y < t)
            {
                y = t
                send_str = "X: " + x.toString() + "Y: " + y.toString()
            }
        }
        else if (rule == 3)
        {
            if(x > 0)
            {
                x = 0
                send_str = "X: " + x.toString() + "Y: " + y.toString()
            }
        }
        else if (rule == 4)
        {
            if(y > 0)
            {
                y = 0
                send_str = "X: " + x.toString() + "Y: " + y.toString()
            }
        }
        else if (rule == 5)
        {
            if(x+y >= 4)
            {
                if(y>0)
                {
                    x = 4
                    z = 4-x
                    y = y - z
                    send_str = "X: " + x.toString() + "Y: " + y.toString()
                }
            }
        }
        else if (rule == 6)
        {
            if(x+y >= 3)
            {
                if(x>0)
                {
                    z = 3 - y
                    x = x - z
                    y = 3
                    send_str = "X: " + x.toString() + "Y: " + y.toString()
                }
            }
        }
        else if(rule == 7)
        {
            if(x+y <= 4)
            {
                if(y >= 0)
                {
                    x = x + y
                    y = 0
                    send_str = "X: " + x.toString() + "Y: " + y.toString()
                }
            }
        }
        else if(rule == 8)
        {
            if(x+y <= 3)
            {
                if(x >= 0)
                {
                    y = x + y
                    x = 0
                    send_str = "X: " + x.toString() + "Y: " + y.toString()
                }
            }
        }
        if(x ==  final)
        {
            send_str = "Goal Reached"
        }
    }
    res.json({ message: send_str });
})
.listen(PORT, () => console.log(`Listening on ${ PORT }`))