<template>
<div class="goodsinfo-container">
    <div class="mui-card">
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                <swiper :lunbotuList="lunbotu" :isfull="false"></swiper>
            </div>
        </div>
    </div>

    <div class="mui-card">
        <div class="mui-card-header">页眉</div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
            </div>
        </div>
    </div>

    <div class="mui-card">
        <div class="mui-card-header">页眉</div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
            </div>
        </div>
        <div class="mui-card-footer">页脚</div>
    </div>
</div>
</template>
<script>
import swiper from '../subcomponents/swiper.vue'
export default{
    data(){
        return {
            id:this.$route.params.id,
            lunbotu:[],
        }
    },
    created(){
        this.getLunbotu();
        //console.log(this.lunbotu);
    },
    methods:{
        getLunbotu(){
            this.$http.get("api/getthumimages/" + this.id).then(result=>{
                if(result.body.status === 0){
                    result.body.message.forEach(item=>{
                        item.img=item.src
                    })
                    this.lunbotu = result.body.message;
                }
            })
        }
    },
    components:{
        swiper
    }
}
</script>
<style lang="scss" scoped>
    .goodsinfo-container {
        background-color: #eee;
        //overflow: hidden;
    }
</style>
