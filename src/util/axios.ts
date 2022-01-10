import axios from "axios";

const instance = axios.create({
  timeout: 30000,
  headers: { "X-Custom-Header": "trade" },
  withCredentials: true,
});

const urlFormat = (url: string, params: any) => {
  if (!params || params === {}) {
    return url;
  }

  let formatedUrl = url;
  let keys = Object.keys(params);
  for (let key of keys) {
    formatedUrl = formatedUrl.replace(
      new RegExp("\\{" + key + "\\}", "g"),
      params[key]
    );
  }
  return formatedUrl;
};

const sendRequest = (request: string, data: any) => {
  const env: string = getEnv();
  const requestParams = data.isParams
    ? {
        locale: "zh_cn",
        timezone: "",
        ...data.isParams,
      }
    : {
        locale: "zh_cn",
        timezone: "",
      };
  const url = urlFormat(request, data);
  console.log(url);
  return instance.request({ url, params: requestParams, data });
};

function getEnv(): string {
  const hostname = window.location.hostname;
  if (/localhost/i.test(hostname) || /127.0.0.1/i.test(hostname)) {
    return "dev";
  } else if (/^sit/i.test(hostname)) {
    return "sit";
  } else if (/^uat/i.test(hostname)) {
    return "uat";
  }
  return "dev";
}

export default sendRequest;
