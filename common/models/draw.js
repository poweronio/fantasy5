'use strict';
var Combinatorics = require('js-combinatorics');
var cmb, a;
var fs = require('fs');
var csv = require('csv-parser');


module.exports = function(Draw) {

    function drawCreate(a,cb){
        Draw.create({
            numbers:a,
            n1:a[0],
            n2:a[1],
            n3:a[2],
            n4:a[3],
            n5:a[4]
        },cb);
    }
    
    
    Draw.greet = function (cb) {
        cb(null, 'Greetings... ');

        cmb = Combinatorics.bigCombination([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36], 5);
    while(a = cmb.next()) 
    {
        drawCreate(a);
        console.log(a);
    }
  }

    // fs.createReadStream('ff.csv')
    // .on('open', function () {
    //   console.log('OPEN');
    // })
    // .pipe(csv())
    // .on('data',function(data){
    //   Draw.findOne({where:{
    //     n1:data.n1,
    //     n2:data.n2,
    //     n3:data.n3,
    //     n4:data.n4,
    //     n5:data.n5,
    //     numbers:[data.n1,data.n2,data.n3,data.n4,data.n5],
    //   }},function(err,data){
    //     if(!err){
    //         console.log('***');
    //       console.log(data);
    //     }
    //   });
    // })
    // .on('end',function(results){
    //     console.log(results);
    // })
    // .on('error',function(err){
    //   console.log(err);
    // });
    // }
    
    Draw.remoteMethod('greet', {
        returns: { arg: 'greeting', type: 'string' }
      });
};
