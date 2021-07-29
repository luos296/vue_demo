<template>
    <div>
        <template>
            <v-tabs :value="0">
                <v-tab @click="$router.push({ name: 'Case' })">用例管理</v-tab>
                <v-tab @click="$router.push({ name: 'Task' })">任务管理</v-tab>
                <v-tab @click="$router.push({ name: 'Jenkins' })"
                    >Jenkins管理</v-tab
                >
                <v-tab @click="$router.push({ name: 'Report' })"
                    >测试报告</v-tab
                >
            </v-tabs>
        </template>
        <v-dialog v-model="dialog" max-width="500px">
            <v-card>
                <v-card-title> 添加测试用例 </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-text-field label="用例名称"></v-text-field>
                        <v-select
                            :items="selectItem"
                            label="用例类型"
                        ></v-select>
                        <v-textarea label="测试数据"></v-textarea>
                        <v-card-actions>
                            <v-btn @click="dialog=false">确定</v-btn>
                            <v-btn @click="dialog=false">取消</v-btn>
                        </v-card-actions>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-dialog>

        <v-btn class="btn" @click="dialog = true">添加用例</v-btn>
        <v-btn class="btn">生成任务</v-btn>

        <template>
            <v-data-table
                v-model="selected"
                :headers="headers"
                :items="desserts"
                item-key="name"
                show-select
                class="elevation-1"
            >
            </v-data-table>
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            selectItem: ['文本', '文件'],
            selected: [],
            headers: [
                {
                    text: 'id',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                { text: '用例名称', value: 'calories' },
                { text: '用例数据', value: 'fat' },
                { text: '操作', value: 'carbs' },
            ],
            desserts: [
                {},
            ],
        }
    },
}
</script>

<style scoped>
</style>