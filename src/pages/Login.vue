<template>
<div class="login-box">
	<div class="login-inner">
		<h1 class="login-title">{{title}}</h1>
		<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
		  <el-form-item prop="cardNo">
		    <el-input type="text" v-model="ruleForm.cardNo" auto-complete="off" placeholder="请输入商户编号"></el-input>
		  </el-form-item>
		  <el-form-item prop="pass">
		    <el-input type="password" v-model="ruleForm.pass" auto-complete="off" placeholder="请输入登录密码"></el-input>
		  </el-form-item>
		  <el-form-item style="text-align:right;margin-top: -30px;margin-bottom: 22px !important">
		  	<a href="javascript:void(0)" class="forget" @click="forgetEvt">忘记密码?</a>
		  </el-form-item>
		  <el-form-item>
		  	<el-button id="login" @click="check('ruleForm')" style="width:100%" type="primary">登录</el-button>
		  </el-form-item>
		</el-form>
	</div>
</div>
</template>

<script>
export default {
  	name: 'Login',
  	data () {
  		var validateNo = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请输入商户编号'));
	        } else {
	          // if (this.ruleForm2.checkPass !== '') {
	          //   this.$refs.ruleForm2.validateField('checkPass');
	          // }
	          callback();
	        }
	    };
	    var validatePass = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请输入登陆密码'));
	        } else {
	          callback();
	        }
	    };
    	return {
      		title: '鹭洲里现金券登记验证',
      		tip: '请拨打电话100-100-201',
      		ruleForm: {
	          cardNo: '',
	          pass: ''
	        },
	        rules: {
	          cardNo: [
	            { validator: validateNo, trigger: 'blur' }
	          ],
	          pass: [
	            { validator: validatePass, trigger: 'blur' }
	          ]
	        }
    	}
  	},
  	methods : {  
	    check : function(formName){  
	    	this.$refs[formName].validate((valid) => {
	          if (valid) {
	            $.ajax({  
		            url : 'login',  
		            type : 'post',  
		            data : {  
		                name : name,  
		                password : password  
		            },  
		            success : function(data) {  
		                var result = data.result;  
		                if(result == 'true' || result == true){  
		                    alert("登录成功");  
		                }else {  
		                    alert("登录失败");  
		                }  
		                this.$router.push({
						  	path:'/dinner'
						})
		            },  
		            error : function(data) {  
		                alert(data);  
		            },  
		            dataType : 'json',  
		        })  
	          } else {
	            console.log('error submit!!');
	            return false;
	          }
	        });
    	},

    	forgetEvt () {
    		this.$alert(this.tip, '忘记密码',{
	            confirmButtonText: '确定',
	            // showClose:false,
	            // confirmButtonClass:'confirmInput'
	        })
    	} 
    }  
}
</script>

<style lang="less" scoped>

.login-box {
	width: 100%;
	height: 100%;
	background: url(../../static/images/bg-1.jpg) no-repeat 0px 0px;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    .login-inner {
    	margin: auto;
    	width: 26%;
    	padding-top:15%;
	    h1 {
	    	font-size: .28rem;
	    	color: #fff;
	    	margin-bottom: .5rem;
	    }
	    .forget {
	    	font-size: .14rem;
	    	color: #fff;
	    	text-decoration: none;
	    }
    }
	
}

@media screen and (max-width: 1024px) and (min-width: 600px) {
	.login-inner {
		width: 40% !important;
	}
}

@media screen and (max-width: 599px) {
	.login-inner {
		width: 70% !important;
	}
}
</style>