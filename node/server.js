var connect = require('connect');

connect.createServer(
    connect.static("../../EmpProdJS")

).listen(5000);
