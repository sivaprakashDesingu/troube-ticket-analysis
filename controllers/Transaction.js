const { connection } = require("./../Config/Database");

exports.getChannelCount = function (request, response) {

    let sql = "select channel,count(*) as ticketcount from tbltroubleticket group by channel";
    connection.query(sql, (err, results) => {
        var tickcnt = [];
        var channel = [];
        if (err) throw err;
        Object.keys(results).forEach(function (key) {
            var row = results[key];
            tickcnt.push(row.ticketcount);
            channel.push(row.channel);
        });
        console.log(tickcnt);

        response.send({ "status": 200, "error": null, "data_xaxis": channel, "data_yaxis": tickcnt });
    });
};

exports.getMetrics = function (request, response) {
    let sql1 = "select count(*) ticketcount from tbltroubleticket";
    let sql2 = "select `call` as callcnt,email as emailcnt,`mobile-app` as mobilecnt,web as webcnt  from tblchannelmetrics where created_on=current_date()";
    totaltickets = 0
    todaytickets = 0
    connection.query(sql1, (err, results) => {
        if (err) throw err;
        console.log(results)
        totaltickets = results[0].ticketcount;
        query = conn.query(sql2, (err, results) => {
            if (err) throw err;
            console.log(results)
            callcnt = results[0].callcnt;
            emailcnt = results[0].emailcnt;
            mobilecnt = results[0].mobilecnt;
            webcnt = results[0].webcnt;
            response.send({ "status": 200, "error": null, "ticketcount": totaltickets, "callcnt": callcnt, "webcnt": webcnt, "mobilecnt": mobilecnt, "emailcnt": emailcnt });

        });

    });
};

exports.saveTickets = function (request, response) {
    console.log(req.body);
    var str = req.body.msg;
    var strdata = str.split("#")
    var channel = strdata[0]
    var priority = strdata[1]
    var calltype = strdata[2]
    var custid = strdata[3]
    var category = strdata[4]
    var subcategory = strdata[5]
    var agentid = strdata[6]
    var sql = "insert into tbltroubleticket(channel,calltype,agent_id,priority,cust_id,service_category,service_subcategory,service_id,tkt_status,resolve_status,created_on,updated_on) values('" + channel + "','" + calltype + "','" + agentid + "','" + priority + "','" + custid + "','" + category + "','" + subcategory + "','NA','open','pending',current_date(),current_date())"
    console.log(strdata);

    connection.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results.insertId);
        res.send({ "status": 200, "error": null, "result": results.insertId });
    });
};