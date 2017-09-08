import { check } from "k6";
import http from "k6/http";

let urlbase = "http://8.19.32.173:3080";

export let options = {
  vus: 100
};

export function user_login(debug) {
	let url = urlbase + "/api/login";
	var payload = JSON.stringify(credentials[__VU-1]);
  var params =  { headers: { "Content-Type": "application/json" } };
	var res = http.post(url, payload, params);
	if (typeof debug !== 'undefined')
		console.log("Login: status = " + String(res.status) + "  Body = " + res.body);
	return res;
};

export function sendSaveForm(token) {
  let url = urlbase + "/api/v1/saveFormList";
  let payload = generateSaveFormPayLoad();
  let params =  { headers: { "Content-Type": "application/json", "X-Auth-Token": token } };
  let res = http.post(url, payload, params);
	if (typeof debug !== 'undefined')
		console.log("Payload to send: " + payload);
	return res;
};

export default function() {
  let res_login = user_login();
  let res_json = JSON.parse(res_login.body);
  let token = res_json['access_token'];
  console.log("VU " + __VU + "    TOKEN " + token);

  let res_saveForm = sendSaveForm(token);
};
