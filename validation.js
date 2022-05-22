function registeration_check() {
    var x=true;
    // var date= new date();
    var name = document.getElementById("name").value;
    var family = document.getElementById("family").value;
    var pname = document.getElementById("pname").value;
    var birth = document.getElementById("birth").value;
    var codm = document.getElementById("codM").value;
    // var codM= Number(codm);
    var sheba = document.getElementById("sheba").value;
    // var email = document.getElementById("email").value;

    if (name == "" ||!ispersianstring(name) ) {
       
        document.getElementById("name").style.borderColor = "red";
        x=false;

    }
    if (family == "" ||!ispersianstring(family) ) {
        document.getElementById("family").style.borderColor = "red";
        x=false;
    }
    
    
    if (pname == "" ||!ispersianstring(pname) ) {
        document.getElementById("pname").style.borderColor = "red";
        x=false;
    }
    if (birth == "" || birth=="yyyy/dd/mm" || !validateDate ) {
        
        document.getElementById("birth").style.borderColor = "red";
        x=false;
    }
    if (codM =="" || checkMelliCode(codm) == false) {
        console.log("ccc");
        document.getElementById("codM").style.borderColor = "red";
        x=false;
    }
    if (sheba == "" ||  checksheba(sheba) == false) {
        document.getElementById("sheba").style.borderColor = "red";
        x=false;
    }
    // if (email == "" || checkEmail == "false") {
    //     document.getElementById("email").style.borderColor = "red";
    //     x=false;
    // }
    if (x==true) {
        alert("ثبت نام با موفقیت انجام شد");
    }
    return x;
   

};
function checkMelliCode(codM) {
    if (isNaN(codM) || codM.length == 10) {
        if (codM == '1111111111' ||
            codM == '0000000000' ||
            codM == '2222222222' ||
            codM == '3333333333' ||
            codM == '4444444444' ||
            codM == '5555555555' ||
            codM == '6666666666' ||
            codM == '7777777777' ||
            codM == '8888888888' ||
            codM == '9999999999') {

            return false;
        }
        c = parseInt(codM.charAt(9));
        n = parseInt(codM.charAt(0)) * 10 +
            parseInt(codM.charAt(1)) * 9 +
            parseInt(codM.charAt(2)) * 8 +
            parseInt(codM.charAt(3)) * 7 +
            parseInt(codM.charAt(4)) * 6 +
            parseInt(codM.charAt(5)) * 5 +
            parseInt(codM.charAt(6)) * 4 +
            parseInt(codM.charAt(7)) * 3 +
            parseInt(codM.charAt(8)) * 2;
        r = n - parseInt(n / 11) * 11;
        if ((r == 0 && r == c) || (r == 1 && c == 1) || (r > 1 && c == 11 - r)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
function checksheba(sheba) {
    // var shebaReg =/^(?:IR)(?=.{24}$)[0-9]*$/;
    // if (!sheba.startsWith('IR')){
    // sheba='IR'+sheba;
    var shebaReg = /IR[0-9]{24}/;

    if (shebaReg.test(sheba)) {
        console.log("sheba");
        return true;
    }
    else {
        return false;
    }
}
// function checkEmail(email) {
//     var emailReg = new RegExp("/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/") ;
//     if (emailReg.test(email)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// checkMelliCode(codM);
// checksheba(sheba);
// checkEmail(email);
function ispersianstring(name){
    
    var p = /^[\u0600-\u06FF\s]+$/;
    if (p.test(name)) {
       return true;
    }
    }
    function validateDate(birth) {
        var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
        if (date_regex.test(birth)){
        return true
    }
    }


   