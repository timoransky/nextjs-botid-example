import { initBotId } from "botid/client/core";

initBotId({
  protect: [
    {
      path: "/",
      method: "POST",
    },
    {
      path: "/*/pages/*",
      method: "POST",
    },
    {
      path: "/pages/*",
      method: "POST",
    },
  ],
});
