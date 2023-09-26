import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 10000,
  duration: '60s',
};
export default function () {
  http.get('http://150.136.54.24/');
  sleep(1);
}
