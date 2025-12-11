function addnum(n1,n2) {
  return n1+n2;
}

function printname(name) {
  return "Hello " + name;
}

function evenodd(n) {
 if(n%2==0)
 {
    return "even";
 }
 return "odd";
}

function ctf(celsius) {
  return (celsius * 9/5) + 32;
}

function maxnum(n1,n2,n3) {
  if(n1 > n2 && n1 > n3) return n1;
  if(n2 > n1 && n2 > n3) return n2;
  return n3;
}

function len(str) {
  return str.length;
}

function toggle(b) {
  return !b;
}

function concat(str1,str2) {
  return str1 + str2;
}

function val(num) {
  if(num > 0) return "positive";
  if(num < 0) return "negative";
  return "zero";
}

function table(num) {
  for(let i = 1; i <= num; i++) {
    console.log(num * i);
  }
}

function nat() {
  let sum = 0;
  for(let i = 1; i <= 10; i++) {
    sum += i;
  }
  return sum;
}

function check(day) {
  switch(day) {
    case "monday": console.log("Found, its Monday"); break;
    case "tuesday": console.log("Found, its Tuesday"); break;
    case "wednesday": console.log("Found, its Wednesday"); break;
    case "thursday": console.log("Found, its Thursday"); break;
    case "friday": console.log("Found, its Friday"); break;
    case "saturday": console.log("Found, its Saturday"); break;
    case "sunday": console.log("Found, its Sunday"); break;
    default: console.log("Invalid");
  }
}

function fact(num) {
  let fac = 1;
  for(let i = 1; i <= num; i++) fac *= i;
  return fac;
}

function voter(age) {
  return age >= 18 ? "eligible" : "ineligible";
}
function prime(num)
{
    if (num < 2) {
        return "Not Prime";
    }
    for(let i=2;i<=Math.sqrt(num);i++)
    {
        if(num%i==0)
        {
            return "Not Prime";
        }
    }
    return "Prime";
}
function digsum(num)
{
    let sum=0;
    while(num>0)
    {
       let r=num%10;
       sum=sum+r;
       num=num/10;
    }
    return sum;
}
function rev(str)
{
    let i=0;
    let j=str.length-1;
    let res="";
    while(j>=i)
    {
        res=res+str.charAt(j);
        j--;
    }
    return res;
}
function cvowels(str)
{
    let count=0;
    let vowels="aeiouAEIOU";
    for(let i=0;i<str.length;i++)
    {
        if(vowels.includes(str.charAt(i)))
        {
            count++;
        }
    }
    return count;
}
function arm(num)
{
    temp=num;
    let res=0;
    let count=0;
    while(temp>0)
    {
        count++;
        temp=temp/10;
    }
    temp=num;
    while(temp>0)
    {
        let r=temp%10;
        res=res+(Math.pow(r,count));
        temp=temp/10;
    }
    if(res==num)
    {
        return true;
    }
    return false;
}
console.log(addnum(23,89));
console.log(printname("Sanskriti"));
console.log(evenodd(76));
console.log(ctf(99));
console.log(maxnum(11,54,23));
console.log(len("HELLOSANSKRITIHERE"));
console.log(toggle(false));
console.log(concat("Welcome","Here"));
console.log(val(-100));
table(29);  
console.log(nat());
check("saturday");
console.log(fact(6));
console.log(voter(13));
console.log(prime(13));
console.log(digsum(6534));
console.log(rev("EveryOne"));
console.log(cvowels("Hello Sanskriti Here"));
console.log(arm(231));

