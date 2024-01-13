/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];
let arr2 = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  var map=arr.map(item=>{
    if(item.profession==="developer")
    {
      return item;
    }
  });
  console.log(map);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((item)=>{
    if(item.profession==="developer")
    {
     console.log(item);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  const data_to_add={ id:4, name:"susan", age:"20", profession:"intern"} ;
  arr.push(data_to_add);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr=arr.filter(item=>item.profession!=="admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  arr2.forEach((item)=>arr.push(item));
  console.log(arr);
}
