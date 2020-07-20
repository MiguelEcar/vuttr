import { path, httpService } from '@http';
import qs from 'qs';

/////////////////////////////////////////////////////////////////////////////////
const args = { ...path, path: '/user' };
/////////////////////////////////////////////////////////////////////////////////

export function createUser(payload) {

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' };

  return httpService.reqOpen({method: 'post', headers, path: args, data: qs.stringify(payload)});

}
