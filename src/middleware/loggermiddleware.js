const logger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method}${req.url}- User:${req.user?.role || "guest"}`)
    next();
}
module.exports = logger;