"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setListenToPort = void 0;
function setListenToPort(app, port) {
    app.listen(port, function () {
        console.log("Server is running on port " + port);
    });
}
exports.setListenToPort = setListenToPort;
