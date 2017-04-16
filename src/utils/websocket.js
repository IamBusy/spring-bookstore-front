/**
 * Created by william on 16/04/2017.
 */
let websocketRepository = [];

export default function socket(ws,onMsg) {
  let wsocket = new WebSocket (ws);
  wsocket.onmessage = onMsg;
  websocketRepository.push(wsocket);
  return wsocket;
}
