/**
 * Created by Administrator on 2016/8/3.
 */
class Student{
    fullname:string;
    constructor(public firstname,public middle,public lastname) {
        this.fullname = firstname + "" + middle + "" + lastname;
    }
}
interface  Person{
    firstname:string;
    lastname:string;
    fullname:string;
}
function greeter(person:Person){
    return "hello,"+person.fullname;
}
var user=new Student("jane","M","hu");
    document.body.innerHTML=greeter(user);
//接口
interface LabelledValue{
    label:string;
}
function printLabel(labelledObj:LabelledValue){
    console.log(labelledObj.label);
}
var myObj={size:10,label:"Size 10 Object"};
printLabel(myObj);
//可选属性接口
interface SquareConfig{
    color?:string;
    width?:number;
}
function createSquare(config:SquareConfig):{color:string;area:number}{
    var newAquare={color:"white",area:100};
    if(config.color){
        newAquare.color=config.color;
    }
    if(config.width){
        newAquare.area=config.width*config.width;
    }
    return newAquare;
}
var mySquare=createSquare({color:"blue",width:30});
console.log(mySquare);
//类 继承
class Animal{
    name:string;
    constructor(theName:string){
        this.name=theName;
    }
    move(meters:number=0){
        console.log(this.name+"move"+meters+"m");
    }
}
class Snake extends Animal{
    constructor(name:string){super(name);}
    move(meters=5){
        console.log("Slithering...");
        super.move(meters);
    }
}
class Horse extends Animal{
    constructor(name:string){super(name);}
    move(meters=45){
        console.log("Galloping...");
        super.move(meters);
    }
}
var sam=new Snake("Sammy the Python");
var tom:Animal=new Horse("Tommy the palomino");
class Greeter {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    }
}


//模块
interface StringValidator{
    isAcceptable(s:string):boolean;
}
var letterRegexp=/^[A-Za-z]+$/;
var numberRegexp=/^[0-9]+$/;
class LettersOnlyValidator implements  StringValidator{
    isAcceptable(s:string){
        return letterRegexp.test(s);
    }
}
class ZipCodeValidator implements StringValidator{
    isAcceptable(s:string){
        return s.length===5&&numberRegexp.test(s);
    }
}
var strings=['Hello','98052','101'];
var validators:{[s:string]:StringValidator;}={};
validators['ZIP code']=new ZipCodeValidator();
validators['Letter only']=new LettersOnlyValidator();
strings.forEach(s=>{
        for(var name in validators){
            console.log('"'+s+'"'+(validators[name].isAcceptable(s)?' matches ' : ' does not match ') + name)
        }
    });