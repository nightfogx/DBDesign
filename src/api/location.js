import request from '@/utils/request'

//获取地址信息
export function getLocationInfo(params) {
  return request({
    url: '/ServiceLoc/{uid}',
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    params: {
    userid: params.userid,
    Location: params.Location,
    }
  });
}

export function addLocationInfo(params) {
    return request({
      url: '/ServiceLoc/{uid}',
      method: 'post',
      params: {
        Location_Name: params.Location_Name,
        Loc_Detail: params.Loc_Detail,
      }
    })
  }
  
  export function editLocationInfo(params) {
    return request({
      url: '/ServiceLoc/{uid}/{id}',
      method: 'post',
      params: {
        Location_Name: params.Location_Name,
        Loc_Detail: params.Loc_Detail,
      }
    })
  }