var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function() {
    console.log(i);
  };
  console.log(i);
}
console.log("-------------");
// console.log(a);
console.log("-------------");
a[6]();
