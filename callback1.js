function getuser(id, callback) {
    console.log("fetching the use data");
    callback({userid:"12345"})
}
function getcart(userid,callback){
    console.log("fecth cart for ",userid);
    callback({cartid:"67898"})

}
function getproducts(cartid,callback){
    console.log("fetching products for",cartid);
    callback({productid:"abcde"})
    
}
