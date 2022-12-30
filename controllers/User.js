const { cassandraConfig } = require("./../Config/Casendra");

exports.test = function (request, response) {
    response
        .status(200)
        .json({
            "status": "UP",
            "message": "User Test API",
            "data": "User Test API",
        });
    return
};


exports.isLoggedIn = function (request, response) {
    const { agentid } = request.body;
    const query = `SELECT * FROM user WHERE agentid = ${agentid}`;
    console.log('Checking Is user already register or not =>', agentid);

    cassandraConfig.execute(query)
        .then(result => {
            if (result && result.rowLength >= 1) {
                response
                    .status(200)
                    .json({
                        "status": "SUCCESS",
                        "message": "Valid User",
                        "data": result.rows
                    });
                return
            } else {
                response
                    .status(401)
                    .json({
                        "status": "FAILED",
                        "message": "Un Authorized User",
                        "data": []
                    });
                return
            }

        });
};

exports.register = function (request, response) {
    //console.log(request)
    const { emailId, fullName } = request.body;
    console.log('Register API CALL activated', emailId);
    response
        .status(200)/*User.find({ emailId: emailId }, function (err, user) {
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
        .json({
            "status": "Success",
            "message": "Valid User",
            "data": user
        });
    return
};

exports.userDetails = function (request, response) {
    const agentid = request.param('empID')
    console.log('Request to fetch User of --->', agentid);
    const query = `SELECT * FROM user WHERE agentid = ${agentid}`;
    cassandraConfig.execute(query)
        .then(result => {
            if (result && result.rowLength >= 1) {
                response
                    .status(200)
                    .json({
                        "status": "SUCCESS",
                        "message": "User Valid",
                        "data": result.rows
                    });
                return
            } else {
                response
                    .status(400)
                    .json({
                        "status": "FAILED",
                        "message": "User Not Available",
                        "data": []
                    });
                return
            }

        });
}; 