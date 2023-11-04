import { apiEndPoint } from "../const";
console.log(apiEndPoint, "api");
export const get = async (apiUri) => {
  // console.log("End point",apiUri)
  const res = await fetch(`${apiEndPoint}${apiUri}`, {
    method: "GET",
    mode: "cors",
  })
    .then(async (res) => {
      // console.log(t)
      const json = await res.json();
      // console.log("JSON", json);
      return [res?.status, json];
    })
    .then((res) => {
      return res;
    })
    .catch((error) => console.log(`error in api ${apiUri} >`, error));
  return res;
};
