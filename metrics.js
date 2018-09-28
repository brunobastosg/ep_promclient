const client = require('prom-client');
const register = client.register;

client.collectDefaultMetrics();

exports.expressCreateServer = function(hook, context) {
    context.app.get('/metrics', function (req, res) {
        res.set('Content-Type', register.contentType);
        res.end(register.metrics());
    });
}