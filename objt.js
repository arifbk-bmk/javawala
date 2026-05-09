//throgh cunstructor =singleton 
//object litral = not singleton
//contructor ke through declare ---- const jsuser

const mysym = Symbol("key")
const bmk = {
    name1: "risfn",
    "fullname":"arif bapusab",
    age:545,
    [mysym]:"mykey1",
    lastlogin:["monday","tuesaday"],
    email:"hithesh"
}
console.log(bmk["mysym"]);
bmk.email ="arif"
Object.freeze(bmk)
bmk. greeting= function(){
    console.log("hello jsuser ");

}
console.log(bmk.greeting)