// const zamauser=new Object()///ye literals me hai 
// zamauser.id=844
// zamauser.name="arif"
// zamauser.islogged=false

//console.log(zamauser);
// const regularuser ={
//     email:"www.arif@gmsil.com",

//     fullname:{
//         userfullname:{
//             firstname:"arif",
//             lastname:"bmk"
//         }
//     }
// }
//console.log(regularuser.fullname.id);
const obj1={ 1:"a",2:"b"}
const obj2={3:"a",4:"m"}


//const obj3={ obj1,obj2 }
const obj3 = object.assign({},obj1,obj2)
console.log(obj3);