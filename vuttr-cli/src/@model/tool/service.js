import { path, httpService } from '@http';

/////////////////////////////////////////////////////////////////////////////////
const args = { ...path, path: '/tools' };
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

export function deleteTool(id) {
  return httpService.del({ ...args, args: `/${id}` });
}