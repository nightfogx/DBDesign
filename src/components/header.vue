<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
                @select="handleSelect">
                <el-menu-item index="0" @click="tomain"> LOGO</el-menu-item>
                <el-col :span="16" :offset="2">
                    <div class="search">
                        <el-row>
                            <el-col :span="16" :offset="0">
                                <el-input v-model="input" placeholder="请输入" />
                            </el-col>
                            <el-col :span="4" :offset="0">
                                <el-button type="primary" class="search-btn">搜索</el-button>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
                <div class="flex-grow" />
                <el-menu-item index="1" @click="toevaluatepage">维修与回收</el-menu-item>
                <el-sub-menu index="2">
                    <template #title><router-link to="/profile">个人主页</router-link></template>
                    <el-menu-item index="2-1">item one</el-menu-item>
                    <el-menu-item index="2-2">item two</el-menu-item>
                    <el-menu-item index="2-3">item three</el-menu-item>
                    <el-sub-menu index="2-4">
                        <template #title>item four</template>
                        <el-menu-item index="2-4-1">item one</el-menu-item>
                        <el-menu-item index="2-4-2">item two</el-menu-item>
                        <el-menu-item index="2-4-3">item three</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
            </el-menu>
</template>

<script>
export default{
    // eslint-disable-next-line vue/multi-word-component-names
    name: "header",
    data(){
        return{
            input: '',
        }
    },
    methods:{
        tomain(){
            this.$router.push('/')
        },
        toevaluatepage(){
            this.$router.push('/evaluatepage')
        }
    }
}
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>