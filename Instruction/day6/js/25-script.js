let x = 10;

x=null//false
x=undefined//false
x=NaN//false
x=5//true
x="Hello"
x=true
x=false
x={name: 'John'}
x={ }
x=[5,3,1,5]
x=[ ]
x=""
x=" "

if (x) {
  console.log(`Hello ${x}`);
}


/* null
undefined
NaN
5
"Hello"
true
false
{name: ‘John’}
{ }
[5,3,1,5]
[ ]
 */