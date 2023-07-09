<template>
  <seach/>
  
  <!-- 步骤条显示回收进度 -->
    <el-header style="margin-top: 20px;">
        <el-steps :active="2" align-center>
            <el-step title="Step 1" description="Some description" />
            <el-step title="Step 2" description="Some description" />
            <el-step title="Step 3" description="Some description" />
            <el-step title="Step 4" description="Some description" />
        </el-steps>
    </el-header>

  <div class="product-recycle">

    <div class="left-panel">
      <img :src="productImage" alt="Device Image" style="height: 400px; width: 400px;"/>
    </div>


    <div class="right-panel">
      <!-- 输入设备基本信息，品牌、型号 -->
        <div class="product-info">
            <h1 style="display: flex;">{{ productName }}</h1>
            <h2 style="display: flex;margin-bottom: 10px;">{{ productModel }}</h2>
            <p class="__services">
            <el-icon class="gray-icon"><Avatar /></el-icon><span class="gray-text">免费上门</span>
            <el-icon class="gray-icon"><Shop /></el-icon><span class="gray-text">价格合理</span>
            <el-icon class="gray-icon"><Management /></el-icon><span class="gray-text">品质服务</span>
            </p>
            <hr style="width: 370px;margin-left: 0px;"/>
        </div>
        
        <div class="storage-group" style="margin-top: 0px;">
            <h3 class="group-title">{{ title }}</h3>
            <div class="btn-group">
            <el-button
                v-for="(option, index) in options"
                :key="index"
                :type="selectedOption === option.value ? 'primary' : 'default'"
                @click="selectOption(option.value)"
            >{{ option.label }}</el-button>
            </div>
        </div>
      
  
      <div class="product-form">
        <el-form ref="productForm" :model="form" label-width="120px">
          
        <div style="margin-left: 50px;">
          <storage-group
            title="存储容量"
            :options="['64GB', '128GB', '256GB', '512GB']"
            @option-selected="handleOptionSelected"
          ></storage-group>
        </div>
          <el-form-item label="购买渠道">
            <div>
              <DropdownList :options="['自营门店', '官方门店', '网络门店']"></DropdownList>
            </div>
          </el-form-item>
          <el-form-item label="机身外观">
            <el-input class="input"  v-model="form.deviceAppearance"></el-input>
          </el-form-item>
          <el-form-item label="屏幕显示">
            <el-input  class="input" v-model="form.screenDisplay"></el-input>
          </el-form-item>
          <el-form-item label="屏幕外观">
            <el-input  class="input" v-model="form.screenAppearance"></el-input>
          </el-form-item>
          
    <!-- 其他页面内容 -->
          <div style="margin-left: 50px;">
            <RepairHistory title="维修历史"></RepairHistory>
          </div>  
          
        </el-form>

        

      </div>
    </div>
  </div>
</template>
  
  <script>
  import StorageGroup from '@/components/StorageGroup.vue'
  import RepairHistory from '@/components/RepairHistory.vue'
  import DropdownList from '@/components/DropdownList.vue';
  import header from '/src/components/header.vue'
  
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      options: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        productImage: require('/public/p.jpg'),
        productName: '设备名称',
        productModel: '设备型号',
        form: {
          storageCapacity: '',
          purchaseChannel: '',
          deviceAppearance: '',
          screenDisplay: '',
          screenAppearance: '',
          repairHistory: ''
        },
      };
    },
    methods: {
      selectOption(option) {
        this.selectedOption = option;
        this.$emit('option-selected', option);
      }
    },
    handleOptionSelected(option) {
        console.log('选中的存储容量:', option);
        // 在这里处理选中的存储容量
      },
    components: {
    "seach": header,
    StorageGroup,
    RepairHistory,
    DropdownList,
  
    }
  };
  </script>
  
  <style>
.__services{
    display: flex;
    margin-bottom: 20px;
}
  
.storage-group {
    margin-bottom: 20px;
}

.group-title {
font-size: 18px;
font-weight: bold;
}

.btn-group {
margin-top: 10px;
}

.product-recycle {
display: flex;
justify-content: space-between;
}

.container {
display: flex;
justify-content: center;
margin-top: 50px;
}

.centered-steps {
width: 50%;
}

.left-panel {
flex: 1;
margin-left: 400px;
margin-top: 100px;
}

.right-panel {
right: 100px;
flex: 2;
}

.gray-icon {
    color: #888;
    font-size: 18px;
    margin-right: 5px;
}

.gray-text {
color: #888;
font-size: 12px;
margin-right: 20px;
margin-bottom: 0px;
}

.product-info {
padding: 20px;
margin-left: 50px;
margin-bottom: 0%;
}

h1 {
font-size: 24px;
font-weight: bold;
}

h2 {
font-size: 18px;
}

.input{
width: 300px;
}

.product-form {
position: relative;
margin-top: 0px;;
margin-left: 20px;
}
</style>
  