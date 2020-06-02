//ES 5 class
function TestClass()
{

    this.TestPublicProperty=undefined;  //Public property
    let testPrivateProperty=undefined; //Private Property
    let selfObject=this;
    
    //Public method
    this.funcPublicMethodDemo=function ()  
    {

        console.log("Call Public Method");
        console.log("Inside Class:",this.TestPublicProperty);

        testPrivateProperty=10;//setter
        console.log(testPrivateProperty);

        //call private method
        funcPrivateMethodDemo();
    }

    //Private method
    let funcPrivateMethodDemo=function()
    {
        //private property
        console.log(testPrivateProperty);

        //Public Property
        //case 1
        console.log("Private Method Demo:",this.TestPublicProperty)

        //case 2
        console.log(selfObject.TestPublicProperty)
    }

}
//Instance or Object
let testClassObj=new TestClass();
testClassObj.TestPublicProperty="Hello";  //setter
console.log(testClassObj.TestPublicProperty); //getter
testClassObj.funcPublicMethodDemo(); //Call Public Method

//You can access private methods and property using class instance
testClassObj.testClassObj=null; //to destroy object
