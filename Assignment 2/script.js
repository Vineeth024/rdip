//Survival Game
function checkSurvivor()
{
    var ob1 = document.getElementById("obj1").value;
    var ob2 = document.getElementById("obj2").value;
    
    let Mapping = new Map([['0','Human'],['1','Cockroach'],['2','Nuclear Bomb']]);
    if((ob1=='')||(ob2==''))
    {
        alert("Enter the OBJECTS!");
        return false;
    }
    ob1=parseInt(ob1);
    ob2=parseInt(ob2);
    var newOb1 = ((ob1)%3);
    var newOb2 = ((ob2)%3);
    var TIE = true;
    if(newOb1 == newOb2)
    {
        alert(" Both Objects are same\n So, Game is a TIE");
        return TIE;
    }
    if(((newOb1 == 0) && (newOb2 == 1)) || ((newOb1==1) && (newOb2==0)))
    {
        if((newOb1 ==0) && (newOb2==1))
        {
            alert(" Objects are "+ Mapping.get('0') +" and " + Mapping.get('1') +"\n So,"+ Mapping.get('0') +" SURVIVES.");
        }
        else
        {
            alert(" Objects are "+ Mapping.get('1') +" and " + Mapping.get('0') +"\n So,"+ Mapping.get('0') +" SURVIVES.");
        }
        return Mapping.get('0');
    }
    if(((newOb1 ==1) && (newOb2==2)) || ((newOb1==2) && (newOb2==1)))
    {
        if((newOb1 ==1) && (newOb2==2))
        {
            alert(" Objects are "+ Mapping.get('1') +" and " + Mapping.get('2')+"\n So,"+ Mapping.get('1') +" SURVIVES.");
        }
        else
        {
            alert(" Objects are "+ Mapping.get('2') +" and " + Mapping.get('1')+"\n So,"+ Mapping.get('1') +" SURVIVES.");
        }
        return Mapping.get('1');
    }
    if(((newOb1 ==0) && (newOb2==2)) || ((newOb1==2) && (newOb2==0)))
    {
        if((newOb1 ==0) && (newOb2==2))
        {
            alert(" Objects are "+ Mapping.get('0') +" and " + Mapping.get('2') +"\n So,"+ Mapping.get('0') +" DIES. ");
        }
        else
        {
            alert(" Objects are "+ Mapping.get('2') +" and " + Mapping.get('0') +"\n So,"+ Mapping.get('0') +" DIES. ");
        }
        return Mapping.get('2');
    }
}
function generateRandomNumbers(min,max)
{
    document.getElementById("obj1").value=Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("obj2").value=Math.floor(Math.random() * (max - min + 1)) + min;
    
}
// Validating a Form
function nameValidation(nameInput) 
{
    var nameRegex = /^[$a-zA-Z_][ 0-9A-Za-z_]*$/;
    return nameRegex.test(nameInput);
}
function emailValidation(emailInput) 
{
    var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailRegex.test(emailInput);
}
function phoneValidation(phNoInput) 
{
    var phoneRegex = /^(\+91-|\+91|0)?\d{10}$/; 
    return phoneRegex.test(phNoInput);
}

function Validate()
{
    var nameInput = document.getElementById("name").value;
    var emailInput = document.getElementById("email").value;
    var phNoInput = document.getElementById("phNo").value;
    if((!nameValidation(document.getElementById("name").value))&&(!emailValidation(document.getElementById("email").value))&&(!phoneValidation(document.getElementById("phNo").value)))
    {
        alert(" Enter valid Name (First letter should be a Letter)\n Enter a valid Email Id (must have '@' and '.')\n Enter a valid Phone number (must have 10 digits and no Alphabets allowed!)");
        return false;
    }
    if(nameValidation(document.getElementById("name").value) && emailValidation(document.getElementById("email").value) && phoneValidation(document.getElementById("phNo").value))
    {
            alert("HEY!, "+ document.getElementById("name").value +"\n Your Details are Validated");
    }
    if((!emailValidation(document.getElementById("email").value)) && (!phoneValidation(document.getElementById("phNo").value)))
    {
        alert(" Enter a valid Email Id (must have '@' and '.')\n Enter a valid Phone number (must have 10 digits and no Alphabets allowed!)");
        return false;
    }
    if((!nameValidation(document.getElementById("name").value))&&!phoneValidation(document.getElementById("phNo").value))
    {
        alert(" Enter valid Name(First letter should be a Letter)\n Enter a valid Phone number (must have 10 digits and no Alphabets allowed!)");
        return false;
    }
    if((!nameValidation(document.getElementById("name").value))&&(!emailValidation(document.getElementById("email").value)))
    {
        alert(" Enter valid Name (First letter should be a Letter)\n Enter a valid Email Id (must have '@' and '.') ");
        return false;
    }
    if(!nameValidation(document.getElementById("name").value))
    {
        alert(" Enter valid Name\n (First letter should be a Letter)\n");
        return false;
    }
    if(!emailValidation(document.getElementById("email").value))
    {
        alert(" Enter a valid Email Id\n (must have '@' and '.')");
        return false;
    }
    if(!phoneValidation(document.getElementById("phNo").value))
    {
        alert(" Enter a valid Phone number\n (must have 10 digits and no Alphabets allowed!)");
        return false;
    }
}
//Calculator 
function multiply()
{
    var mul;
    mul=Calculator.input.value + '*';
    console.log(mul);
    return mul;
}
function addition()
{   var add;
    add=Calculator.input.value + '+';
    console.log(add);
    return add;
}
function subtraction()
{var sub;
    sub=Calculator.input.value + '-';
    console.log(sub);
    return sub;
}
function decimal()
{   var decimal;
    decimal=Calculator.input.value + '.';
    if(((decimal).split('.').length>2) && ((decimal).indexOf('+') <1 && (decimal).indexOf('-') <1 && (decimal).indexOf('/') <1 && (decimal).indexOf('*') <1 ))
    {
        alert("invalid");
        return '0';
    }
    console.log(decimal);
    return decimal;
}
function absolute()
{   var abs;
    abs=(eval(Calculator.input.value))
    if(abs<0)
    {abs = Math.abs(abs);}
    console.log(abs);
    return abs;
}
function percent()
{var percent;
    percent = (Calculator.input.value/100);
    percent=percent+'*';
    console.log(percent);
    return percent;
}
function sqroot()
{   var sqroot;
    sqroot=(eval(Calculator.input.value))
    sqroot = (Math.sqrt(sqroot))

if((sqroot).toString().split('.').length==2){
    sqroot= sqroot.toFixed(3);
    }
    console.log(sqroot);
    return sqroot;

}
function eq()
{   var solve;
    solve=eval(Calculator.input.value);
    if(solve.toString().split('.').length ==2)
    {
        solve=solve.toFixed(3);
    }
    console.log(solve);
    return solve;
}
function division()
{
    var div;
    div=Calculator.input.value + '/';
    console.log(div);
    return div;
}
//Palindrome and anagram checking
function Palindrome()
{
    var str = document.getElementById('palindrome').value;
    var temp = str.toLowerCase();
    temp=temp.replace(/[^a-zA-Z0-9]+/g,'');
    if(temp == "")
    {
        alert("Enter a String to check whether its a palindrome");
        return false;
    }
    for(var i=0 ; i<temp.length ; i++)
    {
        if(temp[i]!=temp[temp.length -i-1])
        {
            alert(str + " is not a palindrome");
            return false;
        }
        else
        {
            alert(str + " is a palindrome");
            return true;
        }
    }
}
function Anagram()
{
    var string = document.getElementById('anagramString').value;
    var word = document.getElementById('anagramWord').value;
    var temp1 = string.toLowerCase();
    var temp2 = word.toLowerCase();
    temp1 = temp1.replace(/[^\w]/g, '');
    temp2 = temp2.replace(/[^\w]/g, '');
    temp1 = temp1.split('').sort().join('');
    temp2 = temp2.split('').sort().join('');
    if(temp1 == "" || temp2 == "")
    {
        alert("Enter a String and a Word to check Whether they are Anagrams!");
        return false;
    }
    if(temp1 === temp2)
    {
        alert(string + " and " + word + " are Anagrams!");
        return true;
    }
    else
    {
        alert(string + " and " + word + " are not Anagrams :(");
        return false;
    }
}