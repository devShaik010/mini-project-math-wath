function close()
{
       document.getElementById('table').style.display = 'none';
       document.getElementById('con').style.display = 'none';
}
close();
function table_click()
{
       document.getElementById('table').style.display = 'block';  
}

function table_print()
{
    let a = Number(document.getElementById('n1').value);
    let b = Number(document.getElementById('n2').value);
    
    document.getElementById('con').style.display = 'block';
    document.getElementById('v1').value=a+' x '+1+' = '+(a*1);
    document.getElementById('v2').value=a+' x '+2+' = '+(a*2);
    document.getElementById('v3').value=a+' x '+3+' = '+(a*3);
    document.getElementById('v4').value=a+' x '+4+' = '+(a*4);
    document.getElementById('v5').value=a+' x '+5+' = '+(a*5);
    document.getElementById('v6').value=a+' x '+6+' = '+(a*6);
    document.getElementById('v7').value=a+' x '+7+' = '+(a*7);
    document.getElementById('v8').value=a+' x '+8+' = '+(a*8);
    document.getElementById('v9').value=a+' x '+9+' = '+(a*9);
    document.getElementById('v10').value=a+' x '+10+' = '+(a*10);
    document.getElementById('v11').value='🥰 sorry i am working on range feature . ';
    
}