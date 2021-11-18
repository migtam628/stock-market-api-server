"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setListenToPort = void 0;
function setListenToPort(app, port) {
    app.listen(port, function () {
        console.log("http://localhost:" + port);
    });
}
exports.setListenToPort = setListenToPort;
