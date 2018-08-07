//var friendCloudStorage = wx.getFriendCloudStorage()


var array = [7,8,9]
console.log("for in no key")
for(var i in array)
{
  console.log(i)
}

console.log("for of no key")
for (var i of array) {
  console.log(i)
}


array.foo = "123123"
console.log("for in with key")
for (var i in array) {
  console.log(i)
}

console.log("for of with key")
for (var i of array) {
  console.log(i)
}
