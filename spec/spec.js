/*var app=require('../src/js/app.js');
describe("app", function(){
  it("it should call sayHello method", function(){
       // prepare
	   var result;
	   console.log('app', app);
	   //act
	   result=app.sayHello('Vasya')
	   //assert
	   
       expect(result).toBe('Hello,Vasya');
	   });
	   it("it should call sum method", function(){
       // prepare
	   var result;
	   console.log('app', app);
	   //act
	   result=app.sum(1,2);
	   //assert
	   
       expect(result).toBe(3);
	   });
	   });
*/
var mathPow = require('../src/js/pow.js');

describe('pow', function(){
  it('pow function', function(){
    //prepare
    var result;

    //act
    result = mathPow(2, 2);

    //assert
    expect(result).toBe(4);
  });

  it('pow function', function(){
    //prepare
    var result;

    //act
    result = mathPow(2, 3);

    //assert
    expect(result).toBe(8);
  });

  it('pow function', function(){
    //prepare
    var result;

    //act
    result = mathPow(2, 4);

    //assert
    expect(result).toBe(16);
  });
});