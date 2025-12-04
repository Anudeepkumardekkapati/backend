

function getuserdetailes(id){
    return new Promise ((resolve,reject)=> {
        setTimeout(() => {      
            resolve({userid:"12345"});
        }, 2000);
    })
};
function getusersubjects(userid){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({subid:"en-1"});
        }, 2000);
    })
};
function getusermarks(subid){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(subid);
        }, 2000);
    })
};


const myfun = async () => {
    console.log("123");
    const result = await getuserdetailes("123");
    console.log(result);
    console.log("456");
    const result1=await getusersubjects(result.userid);
    console.log(result1);
    const result2=await getusermarks(result1.subid)
    console.log(result2);
};
myfun();
