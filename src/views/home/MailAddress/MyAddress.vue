<template>
    <div class="Myaddress">
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="收件人姓名" label="收件人姓名" width="250" />
            <el-table-column prop="电话号码" label="电话号码" width="250" />
            <el-table-column prop="地址标签" label="地址标签" width="250" />
            <el-table-column prop="地址" label="地址" />
        </el-table>
    </div>
</template>

<script>
import { ElMessageBox } from 'element-plus'
export default {
    setup() {
        const tableData = [
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
        return { tableData ,ElMessageBox }
    }
}

</script>

<style>
.Myaddress {
    font-size: 30px;
    position: absolute;
    top: 150px;
    left: 200px;
    right: 0;
    padding: 10px 0;
    margin: 0 auto;
    max-width: 1400px;
}
</style>