CREATE KEYSPACE troubleTicket WITH replication = {'class':'SimpleStrategy', 'replication_factor' : 3};
-----------------------
use troubleticket;
-----------------------
CREATE TABLE user("agentid" int,"email" varchar,"password" varchar,"isadmin" varchar,"status" varchar, "created_on" text, PRIMARY KEY("agentid"));
---------------------------
INSERT INTO troubleticket.user ("agentid","email","password","isadmin","status","created_on") VALUES(1,'shiva@linux.com','Admin@123','Y','ACTIVE','12/31/2022');
INSERT INTO troubleticket.user ("agentid","email","password","isadmin","status","created_on") VALUES(2,'srini@linux.com','Admin@123','Y','ACTIVE','12/31/2022');
--------------------------

CREATE TABLE accessToken("agentid" int,"token" varchar, PRIMARY KEY("token"));
--------------------------
INSERT INTO troubleticket.accessToken ("agentid","token") VALUES(1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiU2F0IERlYyAzMSAyMDIyIDExOjA1OjAwIEdNVCswNTMwIChJbmRpYSBTdGFuZGFyZCBUaW1lKSIsInVzZXJJZCI6MTIsImlhdCI6MTY3MjQ2NDkwMH0.9JXxjW_DHEAI0fmHTRe-QyOTu0V3WucTR5XbkPe_D3w');
INSERT INTO troubleticket.accessToken ("agentid","token") VALUES(2,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiU2F0IERlYyAzMSAyMDIyIDExOjA3OjIyIEdNVCswNTMwIChJbmRpYSBTdGFuZGFyZCBUaW1lKSIsInVzZXJJZCI6MTIsImlhdCI6MTY3MjQ2NTA0Mn0.G1roPP0LuF1yhCA4S_dZCjWfPVnKF1Su1jCNcv89Qzc');
--------------------------



