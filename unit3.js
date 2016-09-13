function unit3() {
/*jshint multistr:true */
var text = "Veronika null null Veronika null null Veronika null null";
var myName = "Veronika";
var hits=[];
for(var i=0; i < text.length; i+=1){
if(text[i]=== myName[0]){
    for (var j = i; j < (i + myName.length); j++){
        hits.push(text[j]);
    }
}}
if (hits.length === 0) {
console.log("Your name wasn't found!");
}
else {
console.log(hits);
}
};