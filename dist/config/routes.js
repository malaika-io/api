"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodes_controller_1 = require("../controllers/nodes.controller");
class Routes {
    constructor() {
        this.nodesController = new nodes_controller_1.NodesController();
    }
    routes(app) {
        //app.route("/").get(this.nodesController.index);
        app.route("/nodes")
            .get(this.nodesController.index)
            .post(this.nodesController.create);
        app.route("/nodes/:id")
            .get(this.nodesController.show)
            .put(this.nodesController.update)
            .delete(this.nodesController.delete);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map