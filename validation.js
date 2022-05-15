function submit() {
    var x=true;
    var date= new date();
    var name = document.getElementById("name").value;
    var family = document.getElementById("family").value;
    var pname = document.getElementById("pname").value;
    var birth = document.getElementById("birth").value;
    var codM = document.getElementById("codM").value;
    var sheba = document.getElementById("sheba").value;
    var email = document.getElementById("email").value;
    
    

    if (name == "") {
        document.getElementById("name").style.borderColor = "red";
        x=false;
    }
    if (family == "") {
        document.getElementById("family").style.borderColor = "red";
        x=false;
    }
    if (pname == "") {
        document.getElementById("pname").style.borderColor = "red";
        x=false;
    }
    if (birth == "" || birth=="0000-00-00" || birth==date) {
        document.getElementById("birth").style.borderColor = "red";
        x=false;
    }
    if (codM =="" || checkMelliCode == "false") {
        document.getElementById("codM").style.borderColor = "red";
        x=false;
    }
    if (sheba == "" ||  checksheba == "false") {
        document.getElementById("sheba").style.borderColor = "red";
        x=false;
    }
    if (email == "" || checkEmail == "false") {
        document.getElementById("email").style.borderColor = "red";
        x=false;
    }
    if (x==true) {
        alert("ثبت نام با موفقیت انجام شد");
    }
    else{
        alert("لطفا تمام فیلدها را پر کنید");
    }
function checkMelliCode(codM) {
    if (codM.length == 10) {
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
}};
function checksheba(sheba) {
    var shebaReg = "/^(?:IR)(?=.{24}$)[0-9]*$/";
    if (shebaReg.test(sheba)) {
        return true;
    }
    else {
        return false;
    }
}
function checkEmail(email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (emailReg.test(email)) {
        return true;
    }
    else {
        return false;
    }
}
checkMelliCode(codM);
checksheba(sheba);
checkEmail(email);