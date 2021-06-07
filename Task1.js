var date=prompt("Enter the Date");
var arr=date.split("/")
var d=Number(arr[0])
var m=Number(arr[1])
var y=Number(arr[2])
//console.log(d,m,y);
var mon = [ 0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4 ];
if(m<3)
{
    y=y-1;
}
var res = (y + y/4 - y/100 + y/400 + mon[m-1] + d) % 7;
//day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
if(Math.round(res)==0)
{
    console.log("Enjoy your weekend");
}
else{
    console.log("Have a great day at work");
}
