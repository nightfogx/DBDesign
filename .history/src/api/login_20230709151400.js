import request from '@/utils/request'

/*用户登录*/
export function login(params) {
  return request({
    url: '/Login/login',
    method: 'get',
    params: {
      user_id: params.user,
      password: params.pass
    }
  })
}


/*假设有管理员登陆 */
/*export function adminlogin(params) {
  return request({
    url: '/Login/adminlogin',
    method: 'get',
    params: {
      admin_id: params.user,
      password: params.pass
    }
  })
}*/


/*用户注册*/
export function adduser(params) {
  return request({
    url: '/Login/addnormal',
    method: 'post',
    params: {
      user_id: params.user_id,
      password: params.password,
      user_name: params.user_name,
      gender: params.gender,
      contact_info: params.contact_info,
      institution: params.institution,
      major: params.major,
      introduction: params.introduction
    }
  })
}


export function getuser() {
  return request({
    url: '/Login/SelectAlluser',
    method: 'get',
  })
}


/*组队需求的表格*/
export function isUseruni(params) {
  return request({
    url: '/Login/IsUserUni',
    method: 'get',
    params: {
      user_id: params.user_id,
    }
  })
}


/*需要发送验证码*/
export function SendMail(params) {
  return request({
    url: '/Login/SendMailUseZj',
    method: 'get',
    params: {
      aa: params.mail_id,
    }
  })
}


/*修改密码*/
export function ChangePass(params) {
  return request({
    url: '/Login/UpdateUser',
    method: 'post',
    params: {
      user_id: params.user_id,
      password: params.password,
    }
  })
}


/*验证邮箱用户是否正确*/
export function IftrueMail(params) {
  return request({
    url: '/Login/Iftruemail',
    method: 'get',
    params: {
      user_id: params.user_id,
      contact_info: params.contact_info,
    }
  })
}

//在注册时根据邮箱名获取验证码
export function getEmailCode(email) {
  return request({
    url: '/vue-admin-template/register/getEmailCode',
    method: 'post',
    email
  })
}

//提交注册
export function register(code, data) {
  return request({
    url: '/vue-admin-template/register?code=' + code,
    method: 'post',
    data
  })
}


