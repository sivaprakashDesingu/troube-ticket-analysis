CREATE KEYSPACE troubleTicket WITH replication = {'class':'SimpleStrategy', 'replication_factor' : 3};
-----------------------
use troubleticket;
-----------------------
CREATE TABLE user("agentid" int,"email" varchar,"password" varchar,"isadmin" varchar,"status" varchar, "created_on" text, PRIMARY KEY("agentid"));
---------------------------
INSERT INTO troubleticket.user ("agentid","email","password","isadmin","status","created_on") VALUES(1,'shiva@linux.com','Admin@123','Y','ACTIVE','12/31/2022');
INSERT INTO troubleticket.user ("agentid","email","password","isadmin","status","created_on") VALUES(2,'srini@linux.com','Admin@123','Y','ACTIVE','12/31/2022');
--------------------------

