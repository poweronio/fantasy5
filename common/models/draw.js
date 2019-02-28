'use strict';
var Combinatorics = require('js-combinatorics');
var cmb, a;
var fs = require('fs');
var csv = require('csv-parser');


module.exports = function(Draw) {

    function drawCreate(a,cb){
        Draw.create({
          numbers:JSON.stringify(a),
          n1:a[0],
          n2:a[1],
          n3:a[2],
          n4:a[3],
          n5:a[4],
          d1:a[1]-a[0],
          d2:a[2]-a[1],
          d3:a[3]-a[2],
          d4:a[4]-a[3]
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

  Draw.locate = function(cb){

  

    fs.createReadStream('ff.csv')
    .on('open', function () {
      console.log('OPEN');
    })
    .pipe(csv())
    .on('data',function(data){
      // console.log(parseInt(data.n1));
      Draw.findOne({where:{
        numbers:data.numbers
      }},function(err,_data){
        if(!err){
            console.log('***');
          console.log(_data.id);
          Draw.patch({id:_data.id},{consumed:true});
        }else console.log(err)
      });
    })
    .on('end',function(results){
        console.log(results);
    })
    .on('error',function(err){
      console.log(err);
    });
    }

    Draw.remoteMethod('locate', {
      returns: { arg: 'greeting', type: 'string' }
    });
    
    Draw.remoteMethod('greet', {
        returns: { arg: 'greeting', type: 'string' }
      });
};
