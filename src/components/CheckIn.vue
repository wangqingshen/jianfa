<template>
<div class="checkIn-box">
  <h1>{{title}}</h1>
  <p>{{tips}}</p>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
    <el-form-item prop="name">
      <el-input v-model="ruleForm.name" placeholder="请录入商户码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%">登记验证</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        title: '商户码登记',
        tips: '请刮开现金券的消费验证码',
        ruleForm: {
          name: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入商户码', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="less" scoped>
  .checkIn-box {
    form {
      width: 30%;
      min-width: 220px;
    }
    h1 {
      font-size: .22rem;
      color: #606266;
      text-align: left;
    }
    p {
      font-size: .18rem;
      text-align: left;
      margin: .25rem 0;
    }
  }
</style>