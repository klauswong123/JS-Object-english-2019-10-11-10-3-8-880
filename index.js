//1.
const user = {
  name: "John",
  surname: "Mike",
};
user.name="Peter"
console.log(user)
delete user
//2.
var fruit = {
apple: 20,
pear: 20,
peach: 10
};
function sum(obj) {
  return Object.keys(obj).reduce((sum,key)=>sum+parseFloat(obj[key]||0),0);
}
console.log(sum(fruit))
// write your code here...
