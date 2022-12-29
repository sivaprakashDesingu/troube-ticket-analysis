exports.test = function (req, res) {
    res.send('User controller!');
};


// async function fetchUSerData(emailId){
//     User.find({ emailId: emailId }, function (err, user) {
//         console.log(user)
//         return user[0]
//     })
// }


exports.isLoggedIn = function (request, response) {
    const { emailID } = request.query;
    console.log('Checking Is user already register or not =>', emailID);

    response
        .status(200)
        .json({
            "status": "Success",
            "message": "Valid User",
            "data": user
        });
    return
};

exports.register = function (request, response) {
    //console.log(request)
    const { emailId, fullName } = request.body;
    console.log('Register API CALL activated', emailId);
    response
        .status(200)
        .json({
            "status": "Success",
            "message": "Valid User",
            "data": user
        });
    return
};

exports.userDetails = function (request, response) {
    const { emailId } = request.userData
    console.log('Request to fetch Use data=>', emailId);
    /*User.find({ emailId: emailId }, function (err, user) {
        if (err || user.length == 0) {
            response
                .status(400)
                .json({
                    "status": "failed",
                    "message": "Invalid User",
                    "data": null
                });
            return
        } else {
            response
                .status(200)
                .json({
                    "status": "Success",
                    "message": "Valid User",
                    "data": user
                });
            return
        }

    });*/
}; 