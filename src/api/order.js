import request from '@/utils/request'


export function getOrderInfo(params) {
  return request({
    url: '/RecycleOrder/{id}',
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    params: {
      OrderID: params.OrderID,
      Device: params.Device
    }
  });
}