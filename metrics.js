const client = require('prom-client');
const register = client.register;

client.collectDefaultMetrics();

exports.expressCreateServer = (hook, context) => {
    context.app.get('/metrics', async (req, res) => {
        res.set('Content-Type', register.contentType);
        res.end(await register.metrics());
        res.send();
    });
}