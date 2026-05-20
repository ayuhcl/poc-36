module.exports = async function (context, req) {
    context.log('HTTP trigger function processed a request.');

    const name = req.query.name || "Guest";

    context.res = {
        body: "Hello " + name
    };
};
