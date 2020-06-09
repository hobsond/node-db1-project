const server = require("./api/server.js");
const accountRoutes = require('./data/accountRoutes')

const PORT = process.env.PORT || 5000;
server.use('/api/accounts/', accountRoutes)
server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`);
});
