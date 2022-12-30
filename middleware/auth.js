const jwt = require('jsonwebtoken');
const { cassandraConfig } = require("./../Config/Casendra");
module.exports = {
    authendicate: function (request, response, next) {
        const { accesstoken } = request.headers;
        console.log('Checking Is user is Authorized or Not =>', accesstoken);

        if (accesstoken) {
            const query = `SELECT * FROM accesstoken WHERE token = ${accesstoken}`;
            cassandraConfig.execute(query)
                .then(result => {
                    if (result && result.rowLength >= 1) {
                        console.log("Authorized User.........")
                        request.userData = result.rows[0];
                        return next();
                    } else {
                        console.log("UnAuthorized User.........")
                        return response
                            .status(400)
                            .json({
                                "status": "UNAUTHORISED",
                                "message": "INVALID USER",
                                "data": []
                            });
                    }

                });
        } else {
            return response
                .status(400)
                .json({
                    "status": "UNAUTHORISED",
                    "message": "INVALID USER",
                    "data": []
                });
        }


    }
}