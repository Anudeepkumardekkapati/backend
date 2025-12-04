function getuserdetails(Id, studentdetailes) {
    console.log("Fetching user details for ID:", Id);
    getusersubjects({userroll:"123"})
}
function getusersubjects(userroll, getsubjects){
    console.log("Fetching subjects for user roll:", userroll);
    getusermarks({subid:"456"});
}
function getusermarks(subid, getmarks){
    console.log("Fetching marks for subject ID:", subid);
  
}
getuserdetails("123", function(studentdetailes){
    getusersubjects(userroll, function(getsubjects){
        getusermarks(subid)
    })
})

