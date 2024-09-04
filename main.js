function equal(){
    var result = window.output-value;
    var eq=window.output;
    if(eq.innerHTML==''){
       
        result.innerHTML='error';
    }
}
let arr=['C','CE','%','+',7,8,9,'*',4,5,6,'/',1,2,3,'-','.',0,'(',')','='];

let calc= document.querySelector('.buttons');
let data='';
var out=document.getElementById('output-value');
for (let i = 0; i < arr.length; i++) {
    if(arr[i]=='=')
        data+=`
    <button class="op" onclick="equal()">${arr[i]}</button>
    `;
    else if(arr[i]=='C')
        data+=`
    <button class="op" onclick="clearn()">${arr[i]}</button>
    `;
    else if(arr[i]=='CE')
        data+=`
    <button class="op" onclick=" out.innerHTML=' '">${arr[i]}</button>
    `;
   else if( arr[i]==='%'|| arr[i]==='.'||arr[i]==='('||arr[i]===')')
        data+=`
    <button class="op" onclick="window.output.innerHTML+='${arr[i]}' ">${arr[i]}</button>
    `;
    else if(typeof arr[i]=='number')
    data+=`
    <button class="num" onclick="window.output.innerHTML+='${arr[i]}' ">${arr[i]}</button>
    `;
    else
    data+=`
    <button class="oparetor" onclick="window.output.innerHTML+='${arr[i]}'">${arr[i]}</button>
    `;
    
}
calc.innerHTML=data;

function equal(){

    var result = document.getElementById('output-value')
    var eq=document.getElementById('output')
    if(eq.innerHTML==''){
       
        result.innerHTML=`<p style=" color:red ;font-weight: bold;">ERROR</p>`;
    }
    else
    {
         result.innerHTML=eval(eq.innerHTML);
         eq.innerHTML='';
    
    }
} 
function clearn () {
   // var result = document.getElementById('output-value')
    var eq=document.getElementById('output').innerHTML;
    var r=document.getElementById('output');
    var t=(eq.length)-1;
    r.innerHTML= eq.slice(0,t);
   

}  