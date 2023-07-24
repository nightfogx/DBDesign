import request from '@/utils/request'


export function getUserProfile(params) {
  return request({
    url: '/UserInfo/{id}',
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    params: {
      UserID: params.User_ID,
      UserName: params.UserName,
      Password: params.Password,
      UserLevel: params.UserLevel,
      Name: params.Name,
      Identity: params.Identity,
      Telephone: params.Telephone,
      Email: params.Email
    }
  });
}