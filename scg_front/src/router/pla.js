process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
var enableEmail = process.argv[2];
//var boolEmail = (enableEmail == "true")
var boolEmail = eval(enableEmail);
console.log(boolEmail);
if(boolEmail !== false){
//If buildflow doesn't pass this parameter then default always send an email
enableEmail=true;
console.log("not success");
}
else if (enableEmail == null){
enableEmail=true;
}
else {
console.log("success");
}
