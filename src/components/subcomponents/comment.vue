<template>
<div class="comment-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要评论的内容（不超过120字）"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-list">
        <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
            <div class="cmt-title">第{{ i+1 }}楼&nbsp;&nbsp;用户：{{item.username}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}</div>
            <div class="cmt-body"> {{ item.content === "undefined" ?  "啥都没说" :item.content }}</div>
        </div>
        
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</div>
</template>
<script>
import { Toast } from 'mint-ui'
export default{
    data(){
        return {
            pageIndex:1,
            comments:[]
        }
    },
    created(){
        this.getComments()
    },
    methods:{
        getComments(){
            this.$http.get("api/getcomments/" + this.sonid + "?pageindex=" + this.pageIndex)
            .then(result=>{
                if(result.body.status===0){
                    this.comments = this.comments.concat(result.body.message)
                }else{
                    Toast ('获取评论失败')  
                }
            })
        },
        getMore(){
            this.pageIndex ++;
            this.getComments()
        }
    },
    props:['sonid']
}
</script>
<style lang="scss" scoped>
.comment-container{
    .cmt-list {
        margin: 5px 0;
        .cmt-item {
            font-size: 13px;
            .cmt-title {
                background-color: #ccc;
                line-height: 30px;
            }
            .cmt-body {
                line-height: 35px;
                text-indent: 2em;
            }
        }
    }
    h3{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
}

}
</style>
