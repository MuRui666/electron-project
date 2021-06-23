<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: LiuXin
 * @Date: 2020-07-29 17:04:12
 * @LastEditors: LiuXin
 * @LastEditTime: 2021-06-23 10:35:09
-->
<template>
<div class='todos'>
   <h1>Todo List with electron</h1>
    <div>
    <input type="text" v-model="addMessage" />
    <button @click="addItem">新建</button>
    </div>
    <ul>
        <li v-for="item in listItem" :key="item.id">
            {{item.text}}
            <span @click="remove(item.id)">x</span>
        </li>
    </ul>
    <echarts :options = "options"></echarts>
</div>
</template>
<script>
export default {
    data(){
        return{
            addMessage:'',
            listItem:[]
        }
    },
    computed:{
         options(){
             return {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
             }
            },
    },
    methods: {
        addItem(){
            // this.listItem.push({
            //     text:this.addMessage,
            //     id:this.listItem.length
            // })
            // this.addMessage = ''
            this.$router.push('/hello')
        },
        remove(e){
            this.listItem.splice(e,1)
        },
        reachBottom(){
            console.log('到达底部，刷新')
        }
    },
}
</script>
<style scoped>
    h1{
        font-size: 25px;
    }
</style>