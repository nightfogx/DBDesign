<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template>
    <el-container>
        <!--搜索栏部分-->
        <el-header>
            <seach />
        </el-header>
        <el-container>
            <!--边栏部分-->
            <el-aside width="200px">
                <div class="side">
                    <el-aside>
                        <el-row class="tac">
                            <el-col :span="26">
                                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen"
                                    @close="handleClose">
                                    <el-menu-item index="1">
                                        <el-icon>
                                            <setting />
                                        </el-icon>
                                        <span>Navigator one</span>
                                    </el-menu-item> <el-menu-item index="2">
                                        <el-icon>
                                            <setting />
                                        </el-icon>
                                        <span>Navigator two</span>
                                    </el-menu-item> <el-menu-item index="3">
                                        <el-icon>
                                            <setting />
                                        </el-icon>
                                        <span>Navigator three</span>
                                    </el-menu-item> <el-menu-item index="4">
                                        <el-icon>
                                            <setting />
                                        </el-icon>
                                        <span>Navigator four</span>
                                    </el-menu-item>
                                    <el-menu-item index="5">
                                        <el-icon>
                                            <setting />
                                        </el-icon>
                                        <span>Navigator Five</span>
                                    </el-menu-item>
                                    <el-menu-item index="6">
                                        <el-icon>
                                            <setting />
                                        </el-icon>
                                        <span>Navigator Six</span>
                                    </el-menu-item>
                                    <el-menu-item index="7">
                                        <el-icon>
                                            <setting />
                                        </el-icon>
                                        <span>Navigator Seven</span>
                                    </el-menu-item>
                                    <el-menu-item index="8">
                                        <el-icon>
                                            <setting />
                                        </el-icon>
                                        <span>Navigator Eight</span>
                                    </el-menu-item>
                                    <el-menu-item index="9">
                                        <el-icon>
                                            <setting />
                                        </el-icon>
                                        <span>Navigator Nine</span>
                                    </el-menu-item>
                                    <el-menu-item index="10">
                                        <el-icon>
                                            <setting />
                                        </el-icon>
                                        <span>Navigator Ten</span>
                                    </el-menu-item>
                                    <el-menu-item index="11">
                                        <el-icon>
                                            <setting />
                                        </el-icon>
                                        <span>Navigator Eleven</span>
                                    </el-menu-item>
                                </el-menu>
                            </el-col>
                        </el-row>
                    </el-aside>
                </div>
            </el-aside>
            <el-container>
                <!--具体部分-->
                <el-main>
                    <div id="Specific">
                        <el-main>
                            <el-col :span="55">
                                <el-table ref="singleTableRef" :data="tableData" highlight-current-row style="width: 100%"
                                    @current-change="handleCurrentChange">
                                    <el-table-column prop="name" label="Name" width="420" />
                                    <el-table-column fixed prop="date" label="Date" width="420" />
                                    <el-table-column prop="address" label="address" width="420" />
                                </el-table>
                            </el-col>
                        </el-main>
                    </div>
                </el-main>
                <!--机型部分-->
                <el-footer>
                    <div class="type">
                        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
                            @select="handleSelect">
                            <el-col :span="4" :offset="1">
                                <el-menu-item index="1">笔记本</el-menu-item>
                            </el-col>
                            <el-col :span="4">
                                <el-menu-item index="2">手机</el-menu-item>
                            </el-col>
                            <el-col :span="4">
                                <el-menu-item index="3">平板</el-menu-item>
                            </el-col>
                            <el-col :span="4">
                                <el-menu-item index="4">耳机</el-menu-item>
                            </el-col>
                            <el-col :span="4">
                                <el-menu-item index="5">手表</el-menu-item>
                            </el-col>
                            <el-col :span="3">
                                <el-menu-item index="6">智能眼镜</el-menu-item>
                            </el-col>
                        </el-menu>
                    </div>
                </el-footer>
            </el-container>
        </el-container>
    </el-container>
    <!--导航栏部分-->
</template>

<script>
import header from '../components/header.vue'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "evaluatepage",

    data() {
        return {
            input: '',
            tableData: [
                {
                    date: '2016-05-03',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles',
                },
                {
                    date: '2016-05-02',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles',
                },
                {
                    date: '2016-05-04',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles',
                },
                {
                    date: '2016-05-01',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles',
                },
            ]
        }
    },
    components: {
        "seach": header,
    },
    methods: {

    }
}
</script>
.el-row {
    margin-bottom: 20px;
  }
  .type {
    flex-grow: 1;
  }
<style scoped></style>

