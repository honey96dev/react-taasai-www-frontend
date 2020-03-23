import {PROJECT} from "core/globals";

export default {
  baseUrl: PROJECT.IS_DEV ? "http://192.168.40.131:7080/api/" : "/api/",
  assetsBaseUrl: PROJECT.IS_DEV ? "http://192.168.40.131:7080/assets/" : "/assets/",

  footers: {
    list: "footers/list",
    get: "footers/get",
  },
}
