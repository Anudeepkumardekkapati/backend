function getuserdetailes(userId) {
    return new Promise((resolve,reject)=>{
        console.log("fun1 called");
        resolve({userid:"12345"});
    });
}
function getusersubjects(userid) {
    return new Promise((resolve,reject)=>{
        console.log("fun2 called");
        resolve({subid:"en-1"});

})
}
function getusermarks(subid) {
    return new Promise((resolve,reject)=>{
        console.log("fun3 called");
        resolve(subid)

        
})
}
getuserdetailes("123").then((result)=>{
    return getusersubjects(result.userid);

}).then((result)=>{
    return getusermarks(result.subid);

})
.then((result)=>
    console.log("final result",result))
    .catch((error)=>{
    console.log("error occured",error);

    })
