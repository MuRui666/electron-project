import echarts from 'echarts'
const myPluginEcharts = {}
const myPluginMixin = {}

myPluginEcharts.install = (Vue)=>{
        Vue.component('echarts',{
            mounted(){
                var myChart = echarts.init(this.$el);
                myChart.setOption(this.options)
            },
            computed:{
                style(){
                    return {
                        height:'1180px',
                        width:'380px'
                    }
                }
            },
            props:{
                options:{
                    type:Object,
                    default:function(){
                        return {}
                    }
                }
            },
            render(createElement){
               return createElement(
                   'div',
                   {
                       attrs:{
                           id:'myCharts'
                       },
                       style:this.style
                   }
               )
            }
        })
    }
myPluginMixin.install = (Vue)=>{
        Vue.mixin({
            created(){
                if(typeof this.reachBottom === 'function'){
                    window.addEventListener('scroll',()=>{
                        console.log(document.documentElement.offsetHeight,window.scrollY,window.screen.height)
                        const TREEHOLD = 50
                        const BOTTOMHEIGHT = document.documentElement.offsetHeight - (window.scrollY + window.screen.height)
                        console.log(BOTTOMHEIGHT)
                        if(BOTTOMHEIGHT < TREEHOLD){
                            this.reachBottom()
                        }
                    })
                }
            }
        })
    }

export{
    myPluginEcharts,
    myPluginMixin
}
