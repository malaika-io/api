"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_model_1 = require("../models/node.model");
const mqtt = require("mqtt");
const fs = require("fs");
const path = require("path");
const CERT = fs.readFileSync(path.join('/home/karim/ssl/Authority/ca.crt'));
const optionsMqtt = {
    host: "mqtt.malaika.io",
    cert: CERT,
    rejectUnauthorized: true,
    protocol: 'mqtts',
    username: "karim",
    password: "Lyna2009"
};
class NodesController {
    constructor() {
        this.client = mqtt.connect(optionsMqtt);
        this.client.on('connect', () => {
            this.client.subscribe('test');
        });
        this.client.on('message', function (topic, message) {
            let context = message.toString();
            console.log(context);
        });
    }
    index(req, res) {
        node_model_1.Node.findAll({})
            .then((nodes) => res.json(nodes))
            .catch((err) => res.status(500).json(err));
    }
    create(req, res) {
        const params = req.body;
        node_model_1.Node.create(params)
            .then((node) => res.status(201).json(node))
            .catch((err) => res.status(500).json(err));
    }
    show(req, res) {
        const nodeId = req.params.id;
        node_model_1.Node.findByPk(nodeId)
            .then((node) => {
            if (node) {
                res.json(node);
            }
            else {
                res.status(404).json({ errors: ["Node not found"] });
            }
        })
            .catch((err) => res.status(500).json(err));
    }
    update(req, res) {
        const nodeId = req.params.id;
        const params = req.body;
        const update = {
            where: { id: nodeId },
            limit: 1
        };
        node_model_1.Node.update(params, update)
            .then(() => res.status(202).json({ data: "success" }))
            .catch((err) => res.status(500).json(err));
    }
    delete(req, res) {
        const nodeId = req.params.id;
        const options = {
            where: { id: nodeId },
            limit: 1
        };
        node_model_1.Node.destroy(options)
            .then(() => res.status(204).json({ data: "success" }))
            .catch((err) => res.status(500).json(err));
    }
}
exports.NodesController = NodesController;
//# sourceMappingURL=nodes.controller.js.map