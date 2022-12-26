var array=[5,10,15,20,25,30];
function fodd(x)
{
	var odd=[];
	var even=[];
	for (i=0;i<x.length;i++)
	{
		if (x[i]%2==0)
		{
			even.push(x[i]);
		}
		else
		{
			odd.push(x[i]);
		}
	}
    document.write("<h1>ODD NUMBERS:</h1>",odd);
	var sum=0;
    for (i=0;i<odd.length;i++)
    {
	sum=sum+odd[i];
    }
	document.write("<h4>GIVEN SUM OF ODD ARRAYS: </h4>",sum);
}
fodd(array);	
	
