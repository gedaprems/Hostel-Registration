
const bodyToObj = (body) =>{
    const data = {
        firstName: body.firstname,
        middleName: body.middlename,
        lastName: body.lastname,
        prn: body.prn,
        phoneno: body.phoneno,
        dob: body.date,
        gender: body.gender,
        branch: body.branch,
        academicyear: body.academicyear,
        marks: body.marks,
        totalMarks: body.totalmarks,
        city: body.city,
        state: body.state,
        zip: body.zip
    }

    return data;

}

module.exports = bodyToObj;
