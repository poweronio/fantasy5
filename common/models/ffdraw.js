'use strict';
var Combinatorics = require('js-combinatorics');
var cmb, a;
module.exports = function(Ffdraw) {

    function drawCreate(a,cb){
        Ffdraw.create({
            numbers:a,
            n1:a[0],
            n2:a[1],
            n3:a[2],
            n4:a[3],
            n5:a[4]
        },cb);
    }
    
    
    Ffdraw.greet = function (cb) {
        cb(null, 'Greetings... ');

        cmb = Combinatorics.bigCombination([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36], 5);
    while(a = cmb.next()) 
    {
        drawCreate(a);
        console.log(a);
    }
    
    }
    
    Ffdraw.remoteMethod('greet', {
        returns: { arg: 'greeting', type: 'string' }
      });
};
