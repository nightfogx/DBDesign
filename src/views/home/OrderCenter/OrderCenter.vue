<template>
    <div class="ordering">
        <div>订单列表</div>
    </div>
    <div class="OrderDetails">
        <el-table :data="res" style="width: 100%">
            <el-table-column font-size="20px" prop="details" label="订单详情" width="280" />
            <el-table-column prop="time" label="订单时间" width="280" />
            <el-table-column prop="state" label="订单状态" width="280" />
            <el-table-column prop="money" label="订单金额" />
            <el-table-column fixed="right" label="操作" width="120">
                <template #default>
                    <el-button link type="primary" size="middle" @click="detailClick = true">详情</el-button>

                    <el-button link type="primary" size="middle" @click="deleteClick = true">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <p></p>
        <div class="pageChange">
            <el-pagination background layout="prev,pager,next" :total="100" current-page="1"
                @current-change="currentChange">
            </el-pagination>
        </div>
    </div>
    <!-- 详情弹窗 -->
    <el-dialog v-model="detailClick" title="OrderDetail">
        <el-table :data="gridData">
            <el-table-column property="date" label="Date" width="150" />
            <el-table-column property="name" label="Name" width="200" />
            <el-table-column property="address" label="Address" />
        </el-table>
    </el-dialog>

    <!-- 删除弹窗 -->
    <el-dialog v-model="deleteClick" title="Tips" width="30%" :before-close="handleClose">
    <span>确定要删除这条订单信息吗？</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="deleteClick = false">确定</el-button>
        <el-button @click="deleteClick = false">取消</el-button>
      </span>
    </template>
  </el-dialog>

</template>

<script>
import { reactive, ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import { getOrderInfo } from '@/api/order.js'
const detailClick = ref(false)
const deleteClick = ref(false)
export default {
    create() {
        console.log("尝试拿到订单信息")
        //请求地址,this和vm指的是全局
        getOrderInfo().then((res) => {
            console.log(res.data)
            if (res.data === false) {
                console.log("拿数据失败")
            }
            else {
                console.log("拿数据成功")
            }
        })
    },
    setup() {
        const res = reactive([
            {
                details: '购买设备',     //订单详情
                time: '2023-7-5',  //订单时间
                state: '已完成',    //订单状态
                money: '120元'      //订单金额
            },
            {
                details: '维修设备',     //订单详情
                time: '2023-7-5',  //订单时间
                state: '待完成',    //订单状态
                money: '40元'      //订单金额
            }
        ])

        const gridData = [
            {
                date: '2016-05-02',
                name: 'John Smith',
                address: 'No.1518,  Jinshajiang Road, Putuo District',
            },
            {
                date: '2016-05-04',
                name: 'John Smith',
                address: 'No.1518,  Jinshajiang Road, Putuo District',
            },
            {
                date: '2016-05-01',
                name: 'John Smith',
                address: 'No.1518,  Jinshajiang Road, Putuo District',
            },
            {
                date: '2016-05-03',
                name: 'John Smith',
                address: 'No.1518,  Jinshajiang Road, Putuo District',
            },
        ]

        function currentChange(e) {
            console.log(e)
        }
        return { res, currentChange, gridData, detailClick ,ElMessageBox ,deleteClick}
    }
}


</script>

<style>
.el-button--text {
    margin-right: 15px;
}

.el-select {
    width: 300px;
}

.pageChange {
    display: flex;
    justify-content: center;
}

.ordering {
    font-size: 30px;
    position: absolute;
    top: 150px;
    left: 200px;
    right: 0;
    padding: 10px 0;
    margin: 0 auto;
    max-width: 1400px;
}

.OrderDetails {
    font-size: 25px;
    position: absolute;
    top: 130px;
    left: 200px;
    right: 0;
    padding: 10px 0;
    margin: 0 auto;
    max-width: 1400px;
}

.dialog-footer button:first-child {
  margin-right: 10px;
}

</style>