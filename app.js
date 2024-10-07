let arr=[19,23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,]
let primeArray=[]
for (let i=0; i<arr.length; i++)
{
    let count =0
    for(let j=1; j<=arr[i];j++)
    {
        if(arr[i]%j==0)
            count+=1
    }
    if(count==2)
        primeArray.push(arr[i])
}
console.log(primeArray)

let max=primeArray[0]
let min=primeArray[0]
let sum=0
for (let i=0; i<primeArray.length ; i++)
{
    sum+=arr[i]
    if(arr[i]>max)
        max=arr[i]
    else if (arr[i]<min)
        min=arr[i]
}
console.log("max:",max, "min:",min, "sum:",sum)