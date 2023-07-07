<template>
  <div>
    <Headerr></Headerr>
    <MainSider></MainSider>
    <!-- 其他页面内容 -->
  </div>
</template>
  
<script>
import MainSider from './MainSider.vue';
import header from '../../../components/header.vue';

export default {
  components: {
    MainSider,
    "Headerr":header
  }//,
  // methods: {>
  //   handleSelect(name) {
  //     // 根据选中的菜单项名称做出相应的操作
  //     switch (name) {
  //       case 'myOrder':
  //         // 处理我的订单的逻辑
  //         break;
  //       case 'myShippingAddress':
  //         // 处理我的邮寄地址的逻辑
  //         break;
  //       case 'addShippingAddress':
  //         // 处理添加邮寄地址的逻辑
  //         break;
  //       case 'contact':
  //         // 处理联系客服的逻辑
  //         break;
  //       case 'help':
  //         // 处理帮助中心的逻辑
  //         break;
  //       case 'about':
  //         // 处理关于我们的逻辑
  //         break;
  //       case 'account':
  //         // 处理账户设置的逻辑
  //         break;
  //       default:
  //         break;
  //     }
  //   }
  // }
};
</script>