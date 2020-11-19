<template>
    <div class="tags">
        <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-document-copy"></i>
          <span>快捷菜单</span>
        </template>
        <el-menu-item-group>
          <template slot="title">快捷菜单</template>
          <el-menu-item index="1-1"><router-link tag="p" to="/kuaijiecaidan">系统首页</router-link></el-menu-item>
          <el-menu-item index="1-2"><router-link tag="p" to="/kehuliebiao">客户列表</router-link></el-menu-item>
          <el-menu-item index="1-3">客户筛选</el-menu-item>
          <el-menu-item index="1-4"><router-link tag="p" to="/xiaoshouxiansuo">销售线索</router-link></el-menu-item>
          <el-menu-item index="1-5"><router-link tag="p" to="/quanbushangji">全部商机</router-link></el-menu-item>
          <el-menu-item index="1-6"><router-link tag="p" to="/quanbudingdan">全部订单</router-link></el-menu-item>
          <el-menu-item index="1-7"><router-link tag="p" to="/huikuanguanli">回款管理</router-link></el-menu-item>
          <el-menu-item index="1-8"><router-link tag="p" to="/huikuanshenpi">回款审批</router-link></el-menu-item>
          <el-menu-item index="1-9"><router-link tag="p" to="/baoxiaoshenpi">报销审批</router-link></el-menu-item>
          <el-menu-item index="1-10"><router-link tag="p" to="/quanbugongdan">全部工单</router-link></el-menu-item>
          <el-menu-item index="1-12"><router-link tag="p" to="/xitonggonggao">系统公告</router-link></el-menu-item>
          <el-menu-item index="1-13">内部消息</el-menu-item>
          <el-menu-item index="1-14">业绩目标</el-menu-item>
          <el-menu-item index="1-15">营销活动</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span>客户管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">客户管理</template>
          <el-menu-item index="1-1">客户列表</el-menu-item>
          <el-menu-item index="1-2">公海客户</el-menu-item>
          <el-menu-item index="1-3">垃圾客户</el-menu-item>
          <el-menu-item index="1-4">客户筛选</el-menu-item>
          <el-menu-item index="1-5">销售线索</el-menu-item>
          <el-menu-item index="1-6">公共线索</el-menu-item>
          <el-menu-item index="1-7">联系人列表</el-menu-item>
          <el-menu-item index="1-8">跟进记录</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-position"></i>
          <span>商机管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">商机管理</template>
          <el-menu-item index="1-1">全部商机</el-menu-item>
          <el-menu-item index="1-2">我的商机</el-menu-item>
          <el-menu-item index="1-3">下属商机</el-menu-item>
          <el-menu-item index="1-4">我协作的</el-menu-item>
          <el-menu-item index="1-5">下属协作</el-menu-item>
          <el-menu-item index="1-6">成交商机</el-menu-item>
          <el-menu-item index="1-7">添加商机</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">订单管理</template>
          <el-menu-item index="1-1">全部订单</el-menu-item>
          <el-menu-item index="1-2">我的订单</el-menu-item>
          <el-menu-item index="1-3">下属订单</el-menu-item>
          <el-menu-item index="1-4">我协作的</el-menu-item>
          <el-menu-item index="1-5">下属协作</el-menu-item>
          <el-menu-item index="1-6">添加订单</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-notebook-2"></i>
          <span>财务管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">财务管理</template>
          <el-menu-item index="1-1">回款计划</el-menu-item>
          <el-menu-item index="1-2">回款管理</el-menu-item>
          <el-menu-item index="1-3">发票管理</el-menu-item>
          <el-menu-item index="1-4">费用管理</el-menu-item>
          <el-menu-item index="1-5">报销管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-edit"></i>
          <span>审批管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">审批管理</template>
          <el-menu-item index="1-1">订单审批</el-menu-item>
          <el-menu-item index="1-2">回款审批</el-menu-item>
          <el-menu-item index="1-3">退款审批</el-menu-item>
          <el-menu-item index="1-4">报销审批</el-menu-item>
          <el-menu-item index="1-5">请假审批</el-menu-item>
          <el-menu-item index="1-6">出差审批</el-menu-item>
          <el-menu-item index="1-7">借款审批</el-menu-item>
          <el-menu-item index="1-8">请示审批</el-menu-item>
          <el-menu-item index="1-9">拜访审批</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-s-marketing"></i>
          <span>统计报表</span>
        </template>
        <el-menu-item-group>
          <template slot="title">统计报表</template>
          <el-menu-item index="1-1">全部工单</el-menu-item>
          <el-menu-item index="1-2">我发起的</el-menu-item>
          <el-menu-item index="1-3">我处理的</el-menu-item>
          <el-menu-item index="1-4">抄送给我的</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="8">
        <template slot="title">
          <i class="el-icon-edit-outline"></i>
          <span>工单管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">工单管理</template>
          <el-menu-item index="1-1">全部工单</el-menu-item>
          <el-menu-item index="1-2">我发起的</el-menu-item>
          <el-menu-item index="1-3">我处理的</el-menu-item>
          <el-menu-item index="1-4">抄送给我的</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="9">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>办工申请</span>
        </template>
        <el-menu-item-group>
          <template slot="title">办工申请</template>
          <el-menu-item index="1-1"><router-link tag="p" to="/qingjiashenqing">请假申请</router-link></el-menu-item>
          <el-menu-item index="1-2">出差申请</el-menu-item>
          <el-menu-item index="1-3">借款申请</el-menu-item>
          <el-menu-item index="1-4">工作请示</el-menu-item>
          <el-menu-item index="1-5">客户拜访</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
        </el-container>
    </div>
</template>

<script>
    import bus from '../../public/bus';
    export default {
        data() {
            return {
                tagsList: []
            }
        },
        methods: {
          
        }
    }

</script>


<style>
     .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
     }
</style>
