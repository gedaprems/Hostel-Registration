function isValidPrn(prn) {
    prn = prn.trim();
    if (prn === "") {
        // $("#error").html("Must Add PRN");
        alert("Must Add PRN");
        return false;
    } else if (isNaN(prn)) {
        alert("Not a number");
        return false;
    } else {
        if (prn.length != 16) {
            alert("size must be 16 digit");
            return false;
        } else {
            return true;
        }

    }

}

function isValidPhoneno(phoneno) {
    phoneno = phoneno.trim();
    if (phoneno == "") {
        alert("Phone number should not be empty");
        return false;

    } else if (isNaN(phoneno)) {
        alert("Enter valid phone number");
        return false;

    } else {
        if (phoneno.length != 10) {
            alert("Phone number length must be 10digit");
            return false;

        } else {
            return true;
        }
    }
}

function isValidName(name) {
    name = name.trim();
    var letters = /^[A-Za-z]+$/;
    if (name == "") {
        alert("Name should not be empty");
        return false;
    }else if (name.match(letters)) {
        
        return true;
    }
    else {
        alert("Invalid Name");
        return false;
    }
}

function isValidDob(date){
    if(date ==""){
        alert("dob is not set");
        return false;
    }else{
        // alert(date);
        return true;
    }
}

function isGenderSelected(male, female){
    if(male || female){
        return true;
    }
    alert("Please select gender");
    return false;
}
function isValidMarks(marks){
    marks = marks.trim();
    if(marks ==""){
        alert("Marks should not be empty");
        return false;
    }else if(isNaN(marks)){
        alert("Marks should be number");
        return false;
    }else{
        if(marks > 600){
            alert("Marks must be below 600");
            return false;
        }else{
            return true;
        }
    }
}

function isValidZip(zip){
    zip = zip.trim();
    if(zip ==""){
        alert("Zip should not be empty");
        return false;
    }else if(isNaN(zip)){
        alert("Zip should be number");
        return false;
    }else{
        if(zip.length != 6){
            alert("Zip length must be 6 digits");
            return false;
        }else{
            return true;
        }
    }
}


$("#submit").click(() => {

    let prn = $("#prn").val();
    let phoneno = $("#phoneno").val();
    let firstname = $("#firstname").val();
    let middlename = $("#middlename").val();
    let lastname = $("#lastname").val();
    let marks = $("#marks").val();
    let totalmarks = $("#totalmarks").val();
    let city = $("#city").val();
    let state = $("#state").val();
    let zip = $("#zip").val();
    let date = $("#date").val();
    let male = $("#male").is(':checked');
    let female = $("#female").is(':checked');

    if(isValidPrn(prn)){
        if(isValidPhoneno(phoneno)){
            if(isValidName(firstname)){
                if(isValidName(middlename)){
                    if(isValidName(lastname)){
                        if(isValidMarks(marks)){
                            if(isValidMarks(totalmarks)){
                                if(isValidName(city)){
                                    if(isValidName(state)){
                                        if(isValidZip(zip)){
                                            if(isValidDob(date)){
                                                if(isGenderSelected(male,female)){
                                                    $("#insidesubmit").click();
                                                }
                                            }
                                            
                                        }
                                    }
                                }
                            }
                        }

                    }
                }
            }
        }

    }

    



    




})


