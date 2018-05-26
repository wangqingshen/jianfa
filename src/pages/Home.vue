<template>
	<el-container>
	  <el-header height="70px">
	  	<div class="header" >
        <div class="logo">{{title}}</div>
        <div class="handle">
          商户<span>{{username}}</span>，您好</div>
        </div>
      
	  </el-header>
	  <el-container>
	    <el-aside width="20%">
	    	<nav class="nav">
	    		<ul>
	    			<li v-for="(item, index) in navList">
	    				<router-link :to="item.path" >{{item.name}}</router-link>
	    			</li>
	            </ul>
	    	</nav>
	    </el-aside>
	    <el-main><router-view></router-view></el-main>
	  </el-container>
	</el-container>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data () {
    return {
      title: '鹭洲里现金券管理平台',
     	username: '渣渣辉',
     	navList: [
     		{'name': '商户码登记', 'path': '/home/checkIn'},
     		{'name': '已登记商户码查询', 'path': '/home/search'},
        {'name': '修改密码', 'path': '/home/changePwd'},
     	],
    }
  },
  mounted() {
   
  }, 
  methods: {
  
  }
}
</script>

<style lang="less">
  .el-container{
    height:100%;   
  }
  .el-header{
    background: url('../../static/images/bg_header.png') no-repeat center center;
    background-size: 100% 100%;
    .header {
      display:flex;
      justify-content: space-between;
      height: 100%;
      line-height: 70px;
      text-align: left;
      color: #fff;
      .logo {
        font-size: .25rem;
        text-shadow:5px 5px 5px #409eff;
        font-weight: 600;
      }
      .handle {
        font-size: .16rem;
      }
    }
  }  
  .el-aside {
    display:flex;
    height:100%;
    background: url('../../static/images/bg_nav.png') no-repeat center center;
    background-size: 100% 100%;
    max-width:120px;
    .nav {
      ul>li {
        font-size: .18rem;
        padding: 0 .15rem;
        >a {
          display: block;
          color: #fff;
          padding: .6rem 0;
          border-top: 1px solid rgba(255,255,255,.1);
          &.router-link-active {
            color: #409eff;
            font-weight: 600;
          }
        }
        &:first-child>a{
          border-top: 0;
        }
      }
    }
  }
</style>
