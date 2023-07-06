<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
        <!--logo部分-->
            <el-menu-item index="0" @click="tomain">  <img :src="logo" style="width: 100px; height: 72px"/></el-menu-item>
        <el-col :span="16" >
            <!--搜索栏部分-->
            <div class="search">
                <el-row>
                    <el-col :span="16" :offset="2">
                        <el-input v-model="input" placeholder="请输入" />
                    </el-col>
                    <el-col :span="4" :offset="0">
                        <el-button type="primary" class="search-btn">搜索</el-button>
                    </el-col>
                </el-row>
            </div>
        </el-col>
        <!--右部菜单部分-->
        <div class="flex-grow" />
        <el-menu-item index="1" @click="toevaluatepage" style="margin-top: 15px ;">维修与回收</el-menu-item>
        <el-sub-menu index="2" style="margin-top: 15px ;">
            <template #title>个人主页</template>
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

<script >
import { ref } from 'vue'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "header",
    data() {
        return {
            activeIndex : ref('1'),
            logo: require("../assets/project.png"),
            input: '',
        }
    },
    methods: {
        handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
        tomain() {
            this.$router.push('/')
        },
        toevaluatepage() {
            this.$router.push('/evaluatepage')
        }
    }
}
</script>

<style scoped>
.search{
    margin-top: 20px;
}
.flex-grow {
    flex-grow: 1;
}
</style>