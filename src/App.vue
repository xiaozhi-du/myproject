<template>
    <div class="app-container">
        <mt-header fixed title="黑马程序员"></mt-header>

		<transition>
			<router-view></router-view>
		</transition>

        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-m" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-m" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-m" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-m" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
        
    </div>
</template>
<script>
</script>

<style lang="scss" scoped>
.mint-header {
	z-index: 99
}
.app-container {
	//position: relative;
    padding-top: 40px; 
	overflow-x: hidden;
	padding-bottom: 50px;
}

.v-enter {
	opacity: 0;
	transform:translateX(100%);
	

}
.v-leave-to {
	opacity: 0;
	transform:translateX(-100%);
	position: absolute;
}

.v-enter-active,
.v-leave-active {
	transition: all 0.5s ease;
}

</style>



