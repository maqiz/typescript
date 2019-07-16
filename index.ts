#基础类型介绍


#布尔值
  let  isDone:boolean = false;

#数字
  let decLiteral: number = 6;
  let hexLiteral: number = 0xf00d;
  let binaryLiteral: number = 0b1010;
  let octalLiteral: number = 0o744;

#字符串
  let name:string = 'smith';

#数组
  let list:Array<number> = [1,2,3];
  let list: number[] = [1, 2, 3];

#元组Tuple
  let x:[sting, number] = ['test',1];

#枚举
  enum Color {Red, Green, Blue};
  let c:Color = Color.red    //0
  let b:Color = Color.Green    //1
  
#任何
  let notsure: any = 4;
  let notsure: any = 'this is any type';
  let notsure: any = false;
      notSure.toFixed();  //当定义的值没有这个方法的时候，也能通过编译，但是编译后的文件运行会报错

#Void
  let unusable: void = undefined || null;

#Null 和 Undefined
  let u: undefined = undefined;
  let n: null = null;

#Never
never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。
下面是一些返回never类型的函数：

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

#Object 除六中基本类型数据以外的类型
declare function create(o:object | null) : void;
create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error

#类型断言
let someValue: any = 'this is a string';
//第一种写法
let strLengt: number = (<string>someValue).length;
//第二种写法
let strLength: number = (someValue as string).length;
//你在TypeScript里使用JSX时，只有 as语法断言是被允许的。

#属性重命名
let o = {
  a: 'foo',
  b: 12
}
let {a:str,b:num} = o

#默认值
function keepWholeObject(wholeObject:{ a: string, b?: number }){
  let { a, b = 101 } = wholeObject
  console.log(a, b)
}










