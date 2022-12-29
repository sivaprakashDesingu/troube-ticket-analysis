//require('dotenv').config();

const cassandra = require('cassandra-driver');
const authProvider = new cassandra.auth.PlainTextAuthProvider(
    process.env.CASSANDRA_USER,
    process.env.CASSANDRA_PASS,
);
const client = new cassandra.Client({
    contactPoints: ['127.0.0.1'],
    localDataCenter: 'datacenter1',
    authProvider,
    keyspace: 'empdb',
});

module.exports = {
    cassandraConfig: client
}