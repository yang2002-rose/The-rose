<template>
  <div class="about">
<el-container>
  <el-header>
      <div>
          <img src="../../images/logos.png" class="zyimg1" />
          <span class="zyimg1-s">
              <el-button @click="drawer = true" type="primary" style="margin-left: -15px;font-size: 18px; font-weight:600;  background-color:#373d41; border:#373d41;">
                                      客户关系管理系统
</el-button>
<el-drawer
  title="我是标题"
  :visible.sync="drawer"
  :direction="direction"
  :with-header="false">
  <span>
      <el-row class="tac">
        <el-col :span="12">
    <h5 style="color:black; margin-left:32px; font-weight:600; font-size:18px">客户关系管理系统</h5>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
  </span>
</el-drawer>
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
    <el-dropdown-item command="d">退出系统</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
      </div>
      </div>
  </el-header>
  <div class="cx1">   
 <i class="el-icon-s-home"></i>&nbsp;
 <i class="el-icon-arrow-right"></i>
 <a>一级分类</a>
 <i class="el-icon-arrow-right"></i>
 <a>请假申请</a>
  </div>
  <div class="cxs1">
      <br>
      <div class="cxs1-1">
  <el-tabs v-model="activeName" @tab-click="handleClick" class="cxs1-1-1">
    <el-tab-pane label="请假申请" name="first">
      <div>
         
      </div>
        <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
     <el-table-column
      prop="type"
      label="请假类型"
      width="120">
    </el-table-column>
     <el-table-column
      prop="yuanyin"
      label="请假原因"
      width="120">
    </el-table-column>
    <!-- 开始时间 -->
    <el-table-column
      label="开始时间"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <!-- 结束时间 -->
    <el-table-column
      label="结束时间"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
      <el-table-column
      prop="day"
      label="请假天数"
      width="120">
    </el-table-column>
    <!-- 提交时间 -->
    <el-table-column
      label="提交时间"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="role"
      label="审批状态"
      width="120">
    </el-table-column>
     <el-table-column
     label="操作"
      width="120">
       <el-button @click="handleClick(scope.row)" icon="el-icon-edit" type="text" size="small">详情</el-button>
      
       <el-button  @click="open" class="red" icon="el-icon-delete" type="text" size="small">删除</el-button>
    </el-table-column>
     
  </el-table>
  <br>
  <p>
    <el-checkbox v-model="checked3" label="全选" border size="medium"></el-checkbox>
    <el-checkbox class="cxz1-1" v-model="checked4" label="反选" border size="medium"></el-checkbox>
    <el-dropdown>
  <el-button type="primary" size="medium" >
    更多操作<i class="el-icon-arrow-down el-icon--right"></i>
  </el-button>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>黄金糕</el-dropdown-item>
    <el-dropdown-item>狮子头</el-dropdown-item>
    <el-dropdown-item>螺蛳粉</el-dropdown-item>
    <el-dropdown-item>双皮奶</el-dropdown-item>
    <el-dropdown-item>蚵仔煎</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
  </p>
  <p class="czx1"><el-pagination
  background
  layout="prev, pager, next"
  :total="100">
</el-pagination></p>

    </el-tab-pane>
    <el-tab-pane label="出差申请" name="second">
          <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
     <el-table-column
      prop="days"
      label="出差天数"
      width="120">
    </el-table-column>
     <el-table-column
      prop="yuanyins"
      label="出差原因"
      width="120">
    </el-table-column>
    <!-- 开始时间 -->
    <el-table-column
      label="开始时间"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <!-- 结束时间 -->
    <el-table-column
      label="结束时间"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <!-- 提交时间 -->
    <el-table-column
      label="提交时间"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="role"
      label="审批状态"
      width="120">
    </el-table-column>
     <el-table-column
      prop="people"
      label="提交人员"
      width="120">
    </el-table-column>
     <el-table-column
     label="操作"
      width="120">
       <el-button @click="handleClick(scope.row)" icon="el-icon-edit" type="text" size="small">详情</el-button>
      
       <el-button  @click="open" class="red" icon="el-icon-delete" type="text" size="small">删除</el-button>
    </el-table-column>
     
  </el-table>
  <br>
  <p>
    <el-checkbox v-model="checked3" label="全选" border size="medium"></el-checkbox>
    <el-checkbox class="cxz1-1" v-model="checked4" label="反选" border size="medium"></el-checkbox>
    <el-dropdown>
  <el-button type="primary" size="medium" >
    更多操作<i class="el-icon-arrow-down el-icon--right"></i>
  </el-button>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>黄金糕</el-dropdown-item>
    <el-dropdown-item>狮子头</el-dropdown-item>
    <el-dropdown-item>螺蛳粉</el-dropdown-item>
    <el-dropdown-item>双皮奶</el-dropdown-item>
    <el-dropdown-item>蚵仔煎</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
  </p>
  <p class="czx1"><el-pagination
  background
  layout="prev, pager, next"
  :total="100">
</el-pagination></p>
    </el-tab-pane>
    <el-tab-pane label="借款申请" name="third">
         <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
     <el-table-column
      prop="typejiekuan"
      label="借款类型"
      width="120">
    </el-table-column>
     <el-table-column
      prop="yuanyinjiekuan"
      label="借款原因"
      width="120">
    </el-table-column>
    <!-- 开始时间 -->
   <el-table-column
      prop="guanlianyewu"
      label="关联业务"
      width="120">
    </el-table-column>
    <!-- 提交时间 -->
    <el-table-column
      label="提交时间"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="role"
      label="审批状态"
      width="120">
    </el-table-column>
     <el-table-column
      prop="people"
      label="提交人员"
      width="120">
    </el-table-column>
     <el-table-column
     label="操作"
      width="120">
       <el-button @click="handleClick(scope.row)" icon="el-icon-edit" type="text" size="small">详情</el-button>
      
       <el-button  @click="open" class="red" icon="el-icon-delete" type="text" size="small">删除</el-button>
    </el-table-column>
     
  </el-table>
  <br>
  <p>
    <el-checkbox v-model="checked3" label="全选" border size="medium"></el-checkbox>
    <el-checkbox class="cxz1-1" v-model="checked4" label="反选" border size="medium"></el-checkbox>
    <el-dropdown>
  <el-button type="primary" size="medium" >
    更多操作<i class="el-icon-arrow-down el-icon--right"></i>
  </el-button>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>黄金糕</el-dropdown-item>
    <el-dropdown-item>狮子头</el-dropdown-item>
    <el-dropdown-item>螺蛳粉</el-dropdown-item>
    <el-dropdown-item>双皮奶</el-dropdown-item>
    <el-dropdown-item>蚵仔煎</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
  </p>
  <p class="czx1"><el-pagination
  background
  layout="prev, pager, next"
  :total="100">
</el-pagination></p>
    </el-tab-pane>
    <el-tab-pane label="工作请示" name="fourth">
        <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
     <el-table-column
      prop="zt"
      label="紧急状态"
      width="120">
    </el-table-column>
     <el-table-column
      prop="qingshineirong"
      label="请示内容"
      width="120">
    </el-table-column>
    <!-- 开始时间 -->
   <el-table-column
      prop="guanlianyewu"
      label="关联业务"
      width="120">
    </el-table-column>
    <!-- 提交时间 -->
    <el-table-column
      label="提交时间"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="role"
      label="审批状态"
      width="120">
    </el-table-column>
     <el-table-column
      prop="people"
      label="提交人员"
      width="120">
    </el-table-column>
     <el-table-column
     label="操作"
      width="120">
       <el-button @click="handleClick(scope.row)" icon="el-icon-edit" type="text" size="small">详情</el-button>
      
       <el-button  @click="open" class="red" icon="el-icon-delete" type="text" size="small">删除</el-button>
    </el-table-column>
     
  </el-table>
  <br>
  <p>
    <el-checkbox v-model="checked3" label="全选" border size="medium"></el-checkbox>
    <el-checkbox class="cxz1-1" v-model="checked4" label="反选" border size="medium"></el-checkbox>
    <el-dropdown>
  <el-button type="primary" size="medium" >
    更多操作<i class="el-icon-arrow-down el-icon--right"></i>
  </el-button>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>黄金糕</el-dropdown-item>
    <el-dropdown-item>狮子头</el-dropdown-item>
    <el-dropdown-item>螺蛳粉</el-dropdown-item>
    <el-dropdown-item>双皮奶</el-dropdown-item>
    <el-dropdown-item>蚵仔煎</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
  </p>
  <p class="czx1"><el-pagination
  background
  layout="prev, pager, next"
  :total="100">
</el-pagination></p>
    </el-tab-pane>
    <el-tab-pane label="客户拜访" name="fourths">
         <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
     <el-table-column
      prop="baifang"
      label="拜访客户"
      width="120">
    </el-table-column>
     <el-table-column
      prop="shiyou"
      label="拜访事由"
      width="120">
    </el-table-column>
    <!-- 提交时间 -->
    <el-table-column
      label="拜访时间"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <!-- 提交时间 -->
    <el-table-column
      label="提交时间"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="role"
      label="审批状态"
      width="120">
    </el-table-column>
     <el-table-column
      prop="people"
      label="提交人员"
      width="120">
    </el-table-column>
     <el-table-column
     label="操作"
      width="120">
       <el-button @click="handleClick(scope.row)" icon="el-icon-edit" type="text" size="small">详情</el-button>
      
       <el-button  @click="open" class="red" icon="el-icon-delete" type="text" size="small">删除</el-button>
    </el-table-column>
     
  </el-table>
  <br>
  <p>
    <el-checkbox v-model="checked3" label="全选" border size="medium"></el-checkbox>
    <el-checkbox class="cxz1-1" v-model="checked4" label="反选" border size="medium"></el-checkbox>
    <el-dropdown>
  <el-button type="primary" size="medium" >
    更多操作<i class="el-icon-arrow-down el-icon--right"></i>
  </el-button>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>黄金糕</el-dropdown-item>
    <el-dropdown-item>狮子头</el-dropdown-item>
    <el-dropdown-item>螺蛳粉</el-dropdown-item>
    <el-dropdown-item>双皮奶</el-dropdown-item>
    <el-dropdown-item>蚵仔煎</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
  </p>
  <p class="czx1"><el-pagination
  background
  layout="prev, pager, next"
  :total="100">
</el-pagination></p>
    </el-tab-pane>
  </el-tabs>
      </div>
  </div>
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
    background-color: #D3DCE6;
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
  .zyimg1{
      margin: 10px;
      top: 15px;
  }
  .zyimg1-s{
      font-size: 18px;
      position:relative;
      font-weight:600; 
      top:-20px;
      cursor: pointer;
  }
  .zyimg1ss{
       position:relative;
      top:0px;
      left: 500px;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #E9EEF3;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .zyimg1sss{
 position:relative;
      top:-70px;
      left: 1230px;
  }
  .cx1{
   height: 40px;
  }
  .cx1 i{
      position:relative;
      top:10px;
      left: 35px;
  }
  .cx1 a{
      position:relative;
      top:7px;
      left: 35px;
      font-size: 12px;
      color: #999999;
  }
  .cxs1{
      width: 100%;
      height: 600px;
      background-color: #f0f2f5;
      
  }
  .cxs1-1{
      background-color: #f9f9f9;
      width: 90%;
      margin: 0 auto;
  }
  .cxs1-1-1{
      position:relative;
      left: 35px;
  }
  .czx1{
      position:relative;
      left: 570px;
      top:-40px;
  }
  .cxz1-1{
      position:relative;
      left: -20px;
  }
  .red{
      color: red;
  }
</style>
<script>
export default {
    data() {
      return { 
          drawer: false,
           direction: 'ltr',
          tableData: [{
              type:'事假',
              baifang:'深圳深信服',
              shiyou:'拜访事由',
              typejiekuan:'￥1,000.00',
              yuanyin:'请假原因',
               yuanyins:'出差原因',
               zt:'非常紧急',
               yuanyinjiekuan:'借款原因',
               guanlianyewu:'深圳深信服公司',
          date: '2016-05-03',
           qingshineirong:'请示内容',
          people:'二胖',
          role: '已通过',
          day:'半天',
          days:'半个月',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
            type:'事假',
            yuanyin:'请假原因',
            yuanyins:'出差原因',
            zt:'非常紧急',
             baifang:'深圳深信服',
              shiyou:'拜访事由',
            typejiekuan:'￥1,000.00',
             guanlianyewu:'深圳深信服公司',
              yuanyinjiekuan:'借款原因',
          date: '2016-05-02',
           day:'半天',
           days:'半个月',
            qingshineirong:'请示内容',
            people:'二胖',
          role: '待审批',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
            type:'事假',
            yuanyin:'请假原因',
            yuanyins:'出差原因',
             baifang:'深圳深信服',
              shiyou:'拜访事由',
            zt:'非常紧急',
            typejiekuan:'￥1,000.00',
             guanlianyewu:'深圳深信服公司',
              yuanyinjiekuan:'借款原因',
          date: '2016-05-04',
           people:'二胖',
           day:'半天',
           days:'半个月',
            qingshineirong:'请示内容',
          role: '被否决',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
            type:'事假',
            yuanyin:'请假原因',
            yuanyins:'出差原因',
            zt:'非常紧急',
             baifang:'深圳深信服',
              shiyou:'拜访事由',
             people:'二胖',
              guanlianyewu:'深圳深信服公司',
               yuanyinjiekuan:'借款原因',
             typejiekuan:'￥1,000.00',
          date: '2016-05-01',
           day:'半天',
           days:'半个月',
            qingshineirong:'请示内容',
          role: '被驳回',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
            type:'事假',
            yuanyin:'请假原因',
            yuanyins:'出差原因',
             baifang:'深圳深信服',
              shiyou:'拜访事由',
          date: '2016-05-08',
            yuanyinjiekuan:'借款原因',
            zt:'非常紧急',
           people:'二胖',
           typejiekuan:'￥1,000.00',
            guanlianyewu:'深圳深信服公司',
           day:'半天',
            qingshineirong:'请示内容',
           days:'半个月',
          role: '已撤销',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
            type:'事假',
            yuanyin:'请假原因',
            yuanyins:'出差原因',
          date: '2016-05-06',
          zt:'非常紧急',
           people:'二胖',
             yuanyinjiekuan:'借款原因',
           day:'半天',
           typejiekuan:'￥1,000.00',
            qingshineirong:'请示内容',
           days:'半个月',
          role: '已撤销',
           baifang:'深圳深信服',
              shiyou:'拜访事由',
           guanlianyewu:'深圳深信服公司',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
            type:'事假',
            yuanyin:'请假原因',
            yuanyins:'出差原因',
            zt:'非常紧急',
            qingshineirong:'请示内容',
             people:'二胖',
               yuanyinjiekuan:'借款原因',
          date: '2016-05-07',
          typejiekuan:'￥1,000.00',
           day:'半天',
           days:'半个月',
            baifang:'深圳深信服',
              shiyou:'拜访事由',
          role: '已撤销',
           guanlianyewu:'深圳深信服公司',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
        }
      },
          restaurants: [],
        state: '',
        timeout:  null,
        ruleForm: {
          pass: '',
          checkPass: '',
          age: '',
    },
    methods: {
       open() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
         toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
         handleCommand(command) {
        this.$message('click on item ' + command);
      },
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
      },
      loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
          { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
          { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
          { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
          { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
          { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
          { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
          { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
          { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
          { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
          { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
          { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
          { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
          { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
          { "value": "枪会山", "address": "上海市普陀区棕榈路" },
          { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
          { "value": "钱记", "address": "上海市长宁区天山西路" },
          { "value": "壹杯加", "address": "上海市长宁区通协路" },
          { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
          { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
          { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
          { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
          { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
          { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
          { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
          { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
          { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
          { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
          { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
          { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
          { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
          { "value": "浏阳蒸菜", "address": "天山西路430号" },
          { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
          { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
          { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
          { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
          { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
          { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
          { "value": "阳阳麻辣烫", "address": "天山西路389号" },
          { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
        ];
      },
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  };
</script>