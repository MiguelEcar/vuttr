import { path, httpService } from '@http';

/////////////////////////////////////////////////////////////////////////////////
const args = { ...path, path: '/tool' };
/////////////////////////////////////////////////////////////////////////////////

export function createTool(payload) {
  return httpService.post(args, payload);
}

export function updateTool(payload) {
  const { id } = payload

  return httpService.put({ ...args, args: `/${id}` }, payload);
}

export function listTool() {
  return httpService.get(args);
}

export function findTool(id) {
  return httpService.get({ ...args, args: `/${id}` });
}

export function deleteTool(id) {
  return httpService.del({ ...args, args: `/${id}` });
}