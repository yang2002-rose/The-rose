<template>
  <div class="about">
<el-container>
<el-header>
      <div>
          <img src="../../../images/logos.png" class="zyimg1" />
          <span class="zyimg1-s">
              {{title}}
          </span>
          <el-autocomplete class="zyimg1ss" v-model="state" :fetch-suggestions="querySearchAsync" suffix-icon="el-icon-search" placeholder="请输入内容" @select="handleSelect"></el-autocomplete>
      <div class="zyimg1sss">
          <el-dropdown @command="handleCommand">
  <span class="el-dropdown-link"><i class="el-icon-s-custom"></i>
    admin<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="a">修改资料</el-dropdown-item>
    <el-dropdown-item command="b">
      <router-link tag="p" to="/xiugaimima">修改密码</router-link>
    </el-dropdown-item>
    <el-dropdown-item command="c">修改头像</el-dropdown-item>
    <el-dropdown-item>
    <el-button type="text" @click="dialogVisible = true">退出系统</el-button>

<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>确定退出系统？</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">
       <router-link tag="p" to="/Login">确 定</router-link>
      </el-button>
  </span>
</el-dialog>

   </el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
      </div>
  
      </div>
  </el-header>
</el-container>
  </div>
</template>
<style scoped>
*{
    overflow-x: hidden;
     overflow-y: hidden;
}
  .el-header, .el-footer {
    background-color:#373d41;
    color: #e4e4e4;
    line-height: 50px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
<script>
export default {
name: "Header",
  props: {
    title:{
      type: String,
      default: "客户关系管理系统"
    }
  }
}
</script>