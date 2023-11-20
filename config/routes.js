const setRoutes = (app) => {
    const todoRoute = require("../api/routes/TodoRoute");
    const priorityRoute = require("../api/routes/PriorityRoute");
    const statusRoute = require("../api/routes/StatusRoute");
    
    app.use("/api/todo", todoRoute);
    app.use("/api/priority", priorityRoute);
    app.use("/api/status", statusRoute);
}

module.exports = {
    setRoutes
}
