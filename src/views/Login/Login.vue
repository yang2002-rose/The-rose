<template>
  <div class="dc">
<div>
    <img src="../../images/u6029.png" class="img-1s" />
    <img src="../../images/Logo.png" class="img-2s">
    <span>
        <a class="spans1">客户关系管理系统</a><br>
        <a class="spans2"> Customer Relationship Management</a>
        </span>
        <div class="domeis">  <div class="demo-type">
    <div>
      <el-input placeholder="请输入账号"  prefix-icon="el-icon-s-custom"  maxlength="11" v-model="input1" clearable> </el-input>
    </div>
    <br>
    <div>
      <el-input placeholder="请输入密码"  prefix-icon="el-icon-lock" v-model="input2" show-password></el-input>
    </div>
    <br>
    <el-button type="primary" class="xs1" @click="openFullScreen2">
         <router-link tag="p" to="/kuaijiecaidan">登录</router-link>
        </el-button>
  </div></div>
</div>
  </div>
</template>
<style scoped>
 .dc{
     width: 100%;
     height: 768px;
     background-image:url("../../images/login.png");
     background-repeat: no-repeat;
 }
 .img-1s{
     position: fixed;
     left: 410px;
     top: 60px;
 }
.img-2s{
     position: fixed;
     left: 430px;
     top: 120px;
 }
 .spans1{
     color:#0079fe;
     font-size: 40px;
     font-weight: 700;
     position: fixed;
     left: 507px;
     top: 250px;
 }
 .spans2{
     color:#0079fe;
     font-size: 18px;
     position: fixed;
     left: 510px;
     top: 308px;
 }
 .domeis{
     position: fixed;
     left: 510px;
     top: 358px;
     width: 315px;
 }
 .xs1{
     width: 315px;
 }
</style>
<script>
	export default {
		data() {
				return {
          fullscreenLoading: false,
					input1: '',
          input2: ''
         
        }
    },
       methods: {
      openFullScreen2() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
          this.$router.push({ path: '/kuaijiecaidan' });
        }, 2000);
      }
    }
	}
</script>
