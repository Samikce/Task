var date = prompt("Enter the date!");
var arr=date.split("/")
var year = arr[2]
if ((year%4 == 0) && (year%100 != 0 )|| (year%400 == 0))
{
    alert(year+" is a leap year ");
}
else
{
    alert(year+" is not a leap year ");
}
