function checkcost(){
    var pkms = document.getElementById("planekms").value;

  var ckms = document.getElementById("carkms").value;

  var bkms = document.getElementById("bikekms").value;
  console.log(pkms);
  console.log(ckms);
  console.log(bkms);
    // !=plane=>600,car=200,bike=150
    var resp=pkms*600;
    console.log(resp)
    var resc=ckms*200;
    console.log(resc)
    var resb=pkms*1500;
    console.log(resb)


    var op = document.getElementById("outputb")
    var oc = document.getElementById("outputc")
    var ob = document.getElementById("outputb")

    op.innerHTML='travel cost will be ${resp}'
    oc.innerHTML='travel cost will be ${resc}'
    ob.innerHTML='travel cost will be ${resb}'
}


function subscribers(){
    
    var usermail=document.getElementById("usermail").value;
    console.log(usermail);
    var listsubscribers=[];
    listsubscribers.push(usermail)

    function sublist(){
        
        
        var res= this.username===listsubscribers.includes();
        if(res===false){

            listsubscribers.push();
            console.log(listsubscribers)

        }
        else{
            console.log("Aleady present")
        }
        
    }
    
    sublist();

}
function subscribers(){
    
    var usermail=document.getElementById("usermail").value;
    console.log(usermail);
    var listsubscribers=new Array();
    listsubscribers.push(usermail);
    var char="TRAVO2023";
    var len=char.length;
    for(i=0;i<=3;i++){
        otp += char[Math.floor(Math.rendom()*len)]
    }
    alert('otp valid for 30 sec only ${otp}')
    var userotp=prompt("enter otp given")
    if(otp==userotp){
        alert("Subscribed")
    }
    else{
        alert("invalid otp")
    }
    

    

}