<template>
  <div class="about">
<Header></Header>
  <div class="cx1">   
 <i class="el-icon-s-home"></i>&nbsp;
 <i class="el-icon-arrow-right"></i>
 <a>一级分类</a>
 <i class="el-icon-arrow-right"></i>
 <a>回款管理</a>
  </div>
   <br>
  <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="180px" style="background-color: rgb(238, 241, 246); position:relative;left:-25px;">
   <Tags></Tags>
  </el-aside>
  
  <el-container>
  <div class="cxs1">
      <br>
      <div class="cxs1-1">
  <br>
        <!-- 搜索 -->
      <div>
          &nbsp;&nbsp;&nbsp;&nbsp;
         <el-input v-model="input" class="inputs1" placeholder="搜索关键词"></el-input>
         &nbsp;
    <el-select v-model="value" class="inputs1" placeholder="审批类型">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  &nbsp;
   <el-date-picker
      v-model="value1"
      class="inputs1"
      type="date"
      placeholder="提交时间">
    </el-date-picker>
  &nbsp;
    <el-date-picker
      v-model="value1"
      class="inputs1"
      type="date"
      placeholder="审批时间">
    </el-date-picker>
  &nbsp;
   <el-select v-model="value" class="inputs1" placeholder="提交人员">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
    &nbsp;
    <el-button type="primary" class="buts1" icon="el-icon-search">查询</el-button>
     <el-button class="buts1" icon="el-icon-refresh-right" plain>重置</el-button>
     <br>
     &nbsp;&nbsp;&nbsp;&nbsp;
      <el-button icon="el-icon-upload2">导出</el-button>
     &nbsp;
    
  
    
      <el-button icon="el-icon-s-unfold" class="gjms1">排序</el-button>
      <el-button icon="el-icon-film" class="gjms2">列表</el-button>
      </div>
      <br>
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
      prop="sjbt"
      label="回款编号"
      width="100">
    </el-table-column>
      <el-table-column
      prop="sjbt"
      label="关联订单"
      width="100">
    </el-table-column>
   <el-table-column
      label="回款日期"
      width="100">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="sjjd"
      label="回款期次"
      width="100">
    </el-table-column>
    <el-table-column
      prop="bjzje"
      label="付款方式"
      width="100">
    </el-table-column>
    <el-table-column
      prop="bjzje"
      label="审批类型"
      width="100">
    </el-table-column>
       <el-table-column
      prop="bjzje"
      label="回款金额"
      width="100">
    </el-table-column>
    <el-table-column
      prop="bjzje"
      label="提交日期"
      width="120">
    </el-table-column>
     <el-table-column
     label="操作"
      width="230">
       <el-button @click="handleClick(scope.row)" icon="el-icon-edit" type="text" size="small">编辑</el-button>
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
      </div>
  </div>
</el-container>
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
    height: 30px;
   position:relative;
      top:7px;
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
      width: 95%;
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
  .inputs1{
      width: 136px;
  }
  .buts1{
       position:relative;
      top:-15px;
  } 
  .gjsx{
       position:relative;
      top:-15px;
      font-size: 16px;
      left: 6px;
      font-weight: 600;
  }
  .gjms{
      position:relative;
      top:4px;
      left: 640px;
  }
  .gjms1{
      position:relative;
      left: 638px;
  }
  .gjms2{
      position:relative;
      left: 638px;
  }
</style>
<script>
  import Tags from '../../components/public/left/Tags'
import Header from '../../components/public/header/Header'
export default {
  components:{
    Header,
    Tags
  },
    data() {
      return { 
          drawer: false,
           direction: 'ltr',
          tableData: [{
              sjbt:'商机标题',
              glkh:'深圳深信服',
              sjjd:'初步洽谈',
              bjjl:'10条',
              bjzje:'￥10,000.00',
             date:'2019-9-16',
          day:'30',
        }, {
             sjbt:'商机标题',
              glkh:'深圳深信服',
              sjjd:'初步洽谈',
              bjjl:'10条',
              bjzje:'￥10,000.00',
             date:'2019-9-16',
          day:'30',
        },{
             sjbt:'商机标题',
              glkh:'深圳深信服',
              sjjd:'初步洽谈',
              bjjl:'10条',
              bjzje:'￥10,000.00',
             date:'2019-9-16',
          day:'30',
        } ],
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
          input:'',
           value: 3
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