var a=[];
var size=prompt("Enter the size of the array");
for(let i=0;i<size;i++){
		a[i]=prompt("Enter the"+(i+1)+"value");
}
document.write("Given array is "+a+"<br>");

var b=prompt("Enter the position to delete");
var del=prompt("Enter the how many element to delete");
c=a.splice(b,del);
document.write(a);