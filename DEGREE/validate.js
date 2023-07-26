const ethers =require('ethers');
var express = require('express');
const sha256 =require('js-sha256')
var bodyParser = require('body-parser');
var app = express();
const hbs=require('hbs')
var provider =ethers.getDefaultProvider('ropsten');
app.use(express.static('public'))
app.use(bodyParser());
app.set('view engine','hbs')
var mysql = require('mysql');
var roll=0;
//hbs.registerPartials(partialPath)
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Shadan#135november",
  database: "blockchain"
  
});


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    
    });

    var jsonParser = bodyParser.json();
 app.get('/', function(request, response) {
        response.sendFile(__dirname + '/views/validate.html');
      });

      app.post("/v",jsonParser,(request,response)=>{
        const rollNo=request.body.rollNo
        var hash1=""
        var st=""
        var a=""
        var b=""
        var c=""
        var d=""
        var e=""
        var g=""
        var f=""
        var a2=""
        var st2=""
        var b2=""
        var c2=""
        var d2=""
        var e2=""
        var f2=""
        var g2=""
        var hash2=""
        console.log('roll no',rollNo)
        var sql="Select * from student2 where rollno="+rollNo+";"

        con.query(sql,(error,data)=>
        {
          if(error)
          {
             console.log("No such student", error)
             response.send('please enter a valid roll number')
          }
          else if(data.length!=0)
          {
           const txhash=data[0].txhash
           a2=data[0].rollNo;
           b2=data[0].univName;
           c2=data[0].studName;
           d2=data[0].fatherName;
           e2=data[0].course
           f2=data[0].dateOfAward;
           g2=data[0].grade;
           st2=st2+a2+b2+c2+d2+e2+f2+g2;
           hash2=sha256(st2)
           console.log(a2)
           console.log(hash2+"hash2")
          }})
          //response.send(ans)
          var sql2='SELECT * FROM student  where rollNo= ("'+rollNo+'")';
          con.query(sql2,(error,data)=>
          {
          if(error)
          {
              return console.log("Record can't be fetched for further deployment!! Re-deploy or contact adminstrator.", error)
          }
          else {
           a=data[0].rollNo;
           b=data[0].univName;
           c=data[0].studName;
           d=data[0].fatherName;
           e=data[0].course
           f=data[0].dateOfAward;
           g=data[0].grade;
          st=st+a+b+c+d+e+f+g;
          console.log("Record to perform SHA is: "+st); 
          hash1=sha256(st);
          if (hash1==hash2) {
            response.render('aktu',{
            
                  name:c,
                  roll:a,
                  univ:b,
                  fatherName:d,
                  course:e,
                  date:f,
                  grade:g,
                  degree:"Degree",
                  uvi:"ABC Technical University"
                  
              })
          } else {
            response.render('aktu',{
                name:"Fake",
                roll:"Fake",
                univ:"Fake",
                fatherName:"Fake",
                course:"Fake",
                date:"Fake",
                grade:"Fake",
                degree:"Fake Degree",
                uvi:"Fake University"
              })
          }
          console.log("hash1",hash1)
          console.log("hash2",hash2)
          }

        })
          
          
        })
         


          // else{
          //   response.render('fake')
          // }
         
          //console.log(ethers.utils.toUtf8String(data),'absd')
          
      
    
    

      function hexToString (hex) {
        var string = '';
        for (var i = 0; i < hex.length; i += 2) {
          string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
        }
        return(string)
      }


      app.listen(3001);
      console.log("listening at port 3001")



      // provider.getTransaction(txhash).then((transactionCount) => {
          //   const data= transactionCount.data
          //   console.log(data);
          // var txData=data.substring(10,68)+data.substring(74,132)+data.substring(138,170);
          
          //    txData=hexToString(txData);

          //    txData1=txData.substring(0,64);

          // if(hash1==txData1)
          // {console.log('here')
          //   response.render('aktu',{
            
          //     name:c,
          //     roll:a,
          //     univ:b,
          //     fatherName:d,
          //     course:e,
          //     date:f,
          //     grade:g,
          //     degree:"Degree",
          //     uvi:"ABC Technical University"
              
          // })
          // }
          // else
          // {response.render('aktu',{
          //   name:"Fake",
          //   roll:"Fake",
          //   univ:"Fake",
          //   fatherName:"Fake",
          //   course:"Fake",
          //   date:"Fake",
          //   grade:"Fake",
          //   degree:"Fake Degree",
          //   uvi:"Fake University"
          // })
          // }
          // console.log(txData);
          // }).catch((error)=>{
          //   console.log("soemthing went wrong")
          // })

          // provider.getTransaction(txhash).then((transactionCount) => {
          //   const data= transactionCount.data
          //   console.log(data,"absd")
          // }) 