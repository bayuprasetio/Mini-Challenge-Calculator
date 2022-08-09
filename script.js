const input=document.getElementById("inputtext");
const cekError=document.getElementById("cekError")

let calculate=(number)=> {
    input.value+=number;
}

let Result=()=>{
    try{
        if (input === "");
        if (isFinite(input));
        if (isNaN(input));
        input.value=eval(input.value)
    }
    catch(error){
        alert("NaN, Coba Lagi!!!")
    }
}

function clr(){
    input.value= " ";
}

