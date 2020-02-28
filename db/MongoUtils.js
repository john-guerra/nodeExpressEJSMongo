const MongoClient = require("mongodb").MongoClient;

function MongoUtils() {
  const mu = {},
    hostname = "localhost",
    port = 27017,
    dbName = "lotteryTests",
    colName = "grades";

  mu.connect = () => {
    const client = new MongoClient(`mongodb://${hostname}:${port}`, {
      useUnifiedTopology: true
    });
    return client.connect();
  };

  mu.grades = {};

  mu.grades.find = query =>
    mu.connect().then(client => {
      const gradesCol = client.db(dbName).collection(colName);

      console.log("query", query);

      return gradesCol
        .find(query)
        .limit(20)
        .sort({ timestamp: -1 })
        .toArray()
        .finally(() => client.close());
    });

  mu.grades.insert = grade =>
    mu.connect().then(client => {
      const gradesCol = client.db(dbName).collection(colName);

      return gradesCol.insertOne(grade).finally(() => client.close());
    });
  return mu;
}

module.exports = MongoUtils();
