const Router = require("koa-router");
const router = new Router();
const dayjs = require("dayjs");
const user = require("./user");
const basicAuth = require("./../filters/basic_auth");

router.get("/", basicAuth, ctx => {
  ctx.body = { time: dayjs().format("HH:mm:ss MM/DD/YYYY") };
});

router.use("/user", user.routes());

module.exports = router;