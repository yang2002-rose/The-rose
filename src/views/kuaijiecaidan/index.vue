<template>
    <div>
        <el-container style="height: 1000px; border: 1px solid #eee;">
            <el-aside width="220px" style="background-color: rgb(238, 241, 246);overflow-y:hidden; ">
                <div class="ss1">
                    <div class="ss1-1">
                        <img src="../../images/1.png">
                    </div>
                    
                        <div class="ss1-2" @click="tab" name="1" >
                            <i class="el-icon-s-unfold ss1-2-1"></i>
                            <p class="ss1-2-2">快捷菜单</p>
                            <i class="el-icon-caret-left ss1-2-3"></i>
                        </div>
                    
                    <div class="ss1-2">
                        <i class="el-icon-s-custom ss1-2-1"></i>
                        <p class="ss1-2-2">客户管理</p>
                        <i class="el-icon-caret-left ss1-2-3" style="display: none;"></i>
                    </div>
                    
                    <div class="ss1-2">
                        <i class="el-icon-discover ss1-2-1"></i>
                        <p class="ss1-2-2">商机管理</p>
                        <i class="el-icon-caret-left ss1-2-3" style="display: none;"></i>
                    </div>
                    <div class="ss1-2">
                        <i class="el-icon-document ss1-2-1"></i>
                        <p class="ss1-2-2">订单管理</p>
                        <i class="el-icon-caret-left ss1-2-3" style="display: none;"></i>
                    </div>
                    <div class="ss1-2" >
                        <i class="el-icon-date ss1-2-1"></i>
                        <p class="ss1-2-2">财务管理</p>
                        <i class="el-icon-caret-left ss1-2-3" style="display: none;"></i>
                    </div>
                    <div class="ss1-2">
                        <i class="el-icon-edit ss1-2-1"></i>
                        <p class="ss1-2-2">审批管理</p>
                        <i class="el-icon-caret-left ss1-2-3" style="display: none;"></i>
                    </div>
                    <div class="ss1-2">
                        <i class="el-icon-data-line ss1-2-1"></i>
                        <p class="ss1-2-2">统计报表</p>
                        <i class="el-icon-caret-left ss1-2-3" style="display: none;"></i>
                    </div>
                    <div class="ss1-2">
                        <i class="el-icon-edit-outline ss1-2-1"></i>
                        <p class="ss1-2-2">工单管理</p>
                        <i class="el-icon-caret-left ss1-2-3" style="display: none;"></i>
                    </div>
                    <div class="ss1-2">
                        <i class="el-icon-message ss1-2-1"></i>
                        <p class="ss1-2-2">办公申请</p>
                        <i class="el-icon-caret-left ss1-2-3" style="display: none;"></i>
                    </div>
                    <div class="ss1-2">
                        <i class="el-icon-s-platform ss1-2-1"></i>
                        <p class="ss1-2-2">办公管理</p>
                        <i class="el-icon-caret-left ss1-2-3" style="display: none;"></i>
                    </div>
                    <div class="ss1-2">
                        <i class="el-icon-service ss1-2-1"></i>
                        <p class="ss1-2-2">营销工具</p>
                        <i class="el-icon-caret-left ss1-2-3" style="display: none;"></i>
                    </div>
                </div>
                <template v-show="curId===0">
                   
                
                <div class="ss2">
                    <div class="ss2-1">
                        <p class="ss2-1-1">快捷菜单</p>
                        <i class="el-icon-s-tools ss2-1-2"></i>
                    </div>
                    <div class="ss2-2" @click="index1">
                        <p class="ss2-2-1">系统首页</p>                        
                    </div>
                    <div class="ss2-2" @click="index2">
                        <p class="ss2-2-1">客户列表</p>                        
                    </div>
                    <div class="ss2-2" @click="index3">
                        <p class="ss2-2-1">客户筛选</p>                        
                    </div>
                    <div class="ss2-2" @click="index4">
                        <p class="ss2-2-1">销售线索</p>                        
                    </div>
                    <div class="ss2-2" @click="index5">
                        <p class="ss2-2-1">全部商机</p>                        
                    </div>
                    <div class="ss2-2" @click="index6">
                        <p class="ss2-2-1">全部订单</p>                        
                    </div>
                    <div class="ss2-2" @click="index7">
                        <p class="ss2-2-1">回款管理</p>                        
                    </div>
                    <div class="ss2-2" @click="index8">
                        <p class="ss2-2-1">回款审批</p>                        
                    </div>
                    <div class="ss2-2">
                        <p class="ss2-2-1">报销审批</p>                        
                    </div>
                    <div class="ss2-2">
                        <p class="ss2-2-1">全部工单</p>                        
                    </div>
                    <div class="ss2-2">
                        <p class="ss2-2-1">系统公告</p>                        
                    </div>
                    <div class="ss2-2">
                        <p class="ss2-2-1">内部消息</p>                        
                    </div>
                    <div class="ss2-2">
                        <p class="ss2-2-1">业绩目标</p>                        
                    </div>
                    <div class="ss2-2">
                        <p class="ss2-2-1">营销活动</p>                        
                    </div>
                </div>
                </template>
                <template v-show="curId===1">
                <div>
                    <div class="ss2-2">
                        <p class="ss2-2-1">营销11111111111111111活动</p>                        
                    </div>
                </div>
                </template>
               
            </el-aside>
  
        <el-container>
    <el-header style=" font-size: 12px;background-color:#FFFFFF;position: relative;border-bottom: 1px solid #F2F2F2;">
        <el-dropdown>
            <span class="el-dropdown-link">
                <i class="el-icon-circle-plus"></i>快速新建
            </span>
            <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>新建任务</el-dropdown-item>
            <el-dropdown-item>新建跟进</el-dropdown-item>
            <el-dropdown-item>新建日程</el-dropdown-item>
            <el-dropdown-item disabled>新建工单</el-dropdown-item>
        </el-dropdown-menu>
        <!-- <div class="demo-input-suffix"> -->
    <el-input placeholder="请输入内容" v-model="input4" class="sc1">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <div class="sc3">
            <span class="sc3-1">
                <i class="el-icon-s-claim"></i>事项
            </span>
            
            <span class="sc3-1">
                <i class="el-icon-date"></i>日程
            </span>
            

            <span class="sc3-1">
                <i class="el-icon-message-solid"></i>消息
            </span>

            <span class="sc3-1">
                <i class="el-icon-unlock"></i>锁屏
            </span>

             <span class="sc3-1">
                <i class="el-icon-s-tools"></i>管理
            </span>


             <span class="sc3-1">
                <i class="el-icon-user-solid"></i>Admin
            </span>
</div>
<!-- </div> -->
  
</el-dropdown>
      
    </el-header>
    <el-header style=" font-size: 12px;background-color:#FFFFFF;position: relative;border-bottom: 1px solid #F2F2F2;">
        <el-dropdown>
            <div class="sc4">
                <i class="el-icon-s-home" style="float: left;">
                    <i class="el-icon-arrow-right">一级分类</i>
                    <i class="el-icon-arrow-right">系统首页</i>
                </i>
            </div>
            
            <div class="sc5">
                <i class="el-icon-arrow-left"></i>
                <i class="el-icon-refresh"></i>
            </div>
        </el-dropdown> 
    </el-header>

    <el-main class="sc6">
        <el-container style="width:1250px;margin-left: 190px;margin-top: 20px;">
            <el-header class="sc6-1" style="background-color: #F9F9F9;">
                <p class="sc6-1-1">快速新建</p>
            </el-header>
            <el-main>
                <div class="sc6-2">
                    <i class="el-icon-user sc6-2-1"></i>
                    <p class="sc6-2-2">新建客户</p>
                </div>
                <div class="sc6-2">
                    <i class="el-icon-s-opportunity sc6-2-1"></i>
                    <p class="sc6-2-2">新建线索</p>
                </div>
                <div class="sc6-2">
                    <i class="el-icon-discover sc6-2-1"></i>
                    <p class="sc6-2-2">新建商机</p>
                </div>
                <div class="sc6-2">
                    <i class="el-icon-document sc6-2-1"></i>
                    <p class="sc6-2-2">新建订单</p>
                </div>
                <div class="sc6-2">
                    <i class="el-icon-s-custom sc6-2-1"></i>
                    <p class="sc6-2-3">新建联系人</p>
                </div>
                <div class="sc6-2">
                    <i class="el-icon-edit sc6-2-1"></i>
                    <p class="sc6-2-2">写新跟进</p>
                </div>
                <div class="sc6-2">
                    <i class="el-icon-folder-checked sc6-2-1"></i>
                    <p class="sc6-2-2">新建任务</p>
                </div>
                <div class="sc6-2">
                    <i class="el-icon-document-checked sc6-2-1"></i>
                    <p class="sc6-2-2">新建工单</p>
                </div>
                <div class="sc6-2">
                    <i class="el-icon-document-copy sc6-2-1"></i>
                    <p class="sc6-2-3">新建回款单</p>
                </div>
                <div class="sc6-2">
                    <i class="el-icon-aim sc6-2-1"></i>
                    <p class="sc6-2-2">回款计划</p>
                </div>
            </el-main>

            <div style="width:1250px;margin-top: 20px;height: 400px;">
                <div style=" float: left;width:620px;margin-top: 0px;height: 400px;">
                    <div style=" float: left;width:620px;margin-top: 0px;background-color: #F9F9F9;height: 70px;">
                        <p class="biu1">数据简报</p>
                        <el-select v-model="select" class="biu2" slot="prepend" placeholder="公司简报">
                            <!-- <el-option label="餐厅名" value="1"></el-option>
                            <el-option label="订单号" value="2"></el-option>
                            <el-option label="用户电话" value="3"></el-option> -->
                        </el-select>
                        <el-select v-model="select" class="biu3" slot="prepend" placeholder="本周">
                            <!-- <el-option label="餐厅名" value="1"></el-option>
                            <el-option label="订单号" value="2"></el-option>
                            <el-option label="用户电话" value="3"></el-option> -->
                        </el-select>
                    </div>
                    <div style=" float: left;width:620px;margin-top: 0px;background-color: #FFF;height: 330px;">
                        <div class="biu4">
                            <p class="biu4-1">新增客户</p>
                            <p class="biu4-2">200</p>
                        </div>
                        <div class="biu4">
                            <p class="biu4-1">新增线索</p>
                            <p class="biu4-2">200</p>
                        </div>
                        <div class="biu4">
                            <p class="biu4-1">新增商机</p>
                            <p class="biu4-2">200</p>
                        </div>
                        <div class="biu4">
                            <p class="biu4-1">新增订单</p>
                            <p class="biu4-2">200</p>
                        </div>
                        <div class="biu4">
                            <p class="biu4-1">新增联系人</p>
                            <p class="biu4-2">200</p>
                        </div>
                        <div class="biu4">
                            <p class="biu4-1">跟进次数</p>
                            <p class="biu4-2">200</p>
                        </div>
                        <div class="biu4">
                            <p class="biu4-1">处理任务</p>
                            <p class="biu4-2">200</p>
                        </div>
                        <div class="biu4">
                            <p class="biu4-1">处理工单</p>
                            <p class="biu4-2">200</p>
                        </div>
                    </div>
                </div>
                <div style=" float: left;width:620px;margin-top: 0px;margin-left: 10px;background-color: #F9F9F9;height: 400px;">
                    <div style=" float: left;width:620px;margin-top: 0px;background-color: #F9F9F9;height: 70px;">
                         <p class="biu1">系统公告</p>
                         <el-popover placement="right" width="400" trigger="click" class="biu5">
                            <el-table :data="gridData">
                                <el-table-column width="150" property="date" label="日期"></el-table-column>
                                <el-table-column width="100" property="name" label="姓名"></el-table-column>
                                <el-table-column width="300" property="address" label="地址"></el-table-column>
                            </el-table>
                            <el-button slot="reference">
                                <i class="el-icon-plus"></i>
                                发布公告
                            </el-button>
                        </el-popover>
                        <el-button class="biu6">
                            查看更多
                            <i class="el-icon-arrow-right"></i>
                        </el-button>
                    </div>
                    <div style=" float: left;width:620px;margin-top: 0px;background-color: #FFF;height: 330px;">
                        <div class="biu10">
                        <span class="biu7">【内部分享】</span>
                        <p class="biu8">如何建立良好的客户关系</p>
                        <i class="el-icon-timer biu9">2019-04-10 09:00</i>
                        <el-divider class="biu10"></el-divider>
                        </div>
                        <div class="biu11">
                        <span class="biu7">【内部分享】</span>
                        <p class="biu8">如何建立良好的客户关系</p>
                        <i class="el-icon-timer biu9">2019-04-10 09:00</i>
                        <el-divider class="biu10"></el-divider>
                        </div>
                        <div class="biu11">
                        <span class="biu7">【内部分享】</span>
                        <p class="biu8">如何建立良好的客户关系</p>
                        <i class="el-icon-timer biu9">2019-04-10 09:00</i>
                        <el-divider class="biu10"></el-divider>
                        </div>
                        <div class="biu11">
                        <span class="biu7">【内部分享】</span>
                        <p class="biu8">如何建立良好的客户关系</p>
                        <i class="el-icon-timer biu9">2019-04-10 09:00</i>
                        <el-divider class="biu10"></el-divider>
                        </div>
                        <div class="biu11">
                        <span class="biu7">【内部分享】</span>
                        <p class="biu8">如何建立良好的客户关系</p>
                        <i class="el-icon-timer biu9">2019-04-10 09:00</i>
                        <el-divider class="biu10"></el-divider>
                        </div>
                        <div class="biu11">
                        <span class="biu7">【内部分享】</span>
                        <p class="biu8">如何建立良好的客户关系</p>
                        <i class="el-icon-timer biu9">2019-04-10 09:00</i>
                        </div>
                    </div>
                </div>
            </div>

            <div style="width:1250px;margin-top: 20px;height: 400px;">
                <div style=" float: left;width:620px;margin-top: 0px;height: 400px;">
                    <div style=" float: left;width:620px;margin-top: 0px;background-color: #F9F9F9;height: 70px;">
                         <p class="biu1">业绩目标</p>
                        <el-select v-model="select" class="biu2" slot="prepend" placeholder="公司目标">
                            
                        </el-select>
                        
                        <el-input placeholder="2019-05" suffix-icon="el-icon-date" class="biu3" v-model="input1">
                        </el-input>
                    </div>
                    <div style=" float: left;width:620px;margin-top: 0px;background-color: #FFF;height: 330px;">
                           <img src="../../images/2.png">
                    </div>
                </div>
                <div style=" float: left;width:620px;margin-top: 0px;margin-left: 10px;background-color: #F9F9F9;height: 400px;">
                    <div style=" float: left;width:620px;margin-top: 0px;background-color: #F9F9F9;height: 70px;">
                        <p class="biu1">业绩排行</p>
                        <el-select v-model="select" class="biu2" slot="prepend" placeholder="个人排行">
                            
                        </el-select>
                        
                        <el-input placeholder="2019-05" suffix-icon="el-icon-date" class="biu3" v-model="input1">
                        </el-input>
                    </div>
                    <div style=" float: left;width:620px;margin-top: 0px;background-color: #FFF;height: 330px;">
                           <img src="../../images/3.png">
                    </div>
                </div>
            </div>

            <div style="width:1250px;margin-top: 20px;height: 400px;">
                <div style=" float: left;width:620px;margin-top: 0px;height: 400px;">
                    <div style=" float: left;width:620px;margin-top: 0px;background-color: #F9F9F9;height: 70px;">
                        <p class="biu1">销售预测</p>
                        <el-select v-model="select" class="giao1" slot="prepend" placeholder="公司数据">
                            <!-- <el-option label="餐厅名" value="1"></el-option>
                            <el-option label="订单号" value="2"></el-option>
                            <el-option label="用户电话" value="3"></el-option> -->
                        </el-select>
                        
                    </div>
                    <div style=" float: left;width:620px;margin-top: 0px;background-color: #FFF;height: 330px;">
                            <img src="../../images/4.png">
                    </div>
                </div>
                <div style=" float: left;width:620px;margin-top: 0px;margin-left: 10px;background-color: #F9F9F9;height: 400px;">
                    <div style=" float: left;width:620px;margin-top: 0px;background-color: #F9F9F9;height: 70px;">
                        <p class="biu1">销售漏斗</p>
                        <el-select v-model="select" class="biu2" slot="prepend" placeholder="公司数据"></el-select>
                       <el-input placeholder="2019-05" suffix-icon="el-icon-date" class="biu3" v-model="input1">
                        </el-input>
                    </div>
                    <div style=" float: left;width:620px;margin-top: 0px;background-color: #FFF;height: 330px;">
                           <img src="../../images/5.png">
                    </div>
                </div>
            </div>

            <div style="width:1250px;margin-top: 20px;height: 400px;">
                <div style=" float: left;width:620px;margin-top: 0px;height: 400px;">
                    <div style=" float: left;width:620px;margin-top: 0px;background-color: #F9F9F9;height: 70px;">
                        <p class="biu1">工作报告</p>
                        <el-select v-model="select" class="giao2" slot="prepend" placeholder="提交给我的"></el-select>
                       <el-popover placement="right" width="400" trigger="click" class="giao3">
                            <el-table :data="gridData">
                                <el-table-column width="150" property="date" label="日期"></el-table-column>
                                <el-table-column width="100" property="name" label="姓名"></el-table-column>
                                <el-table-column width="300" property="address" label="地址"></el-table-column>
                            </el-table>
                            <el-button slot="reference">
                                <i class="el-icon-plus"></i>
                                写新报告
                            </el-button>
                        </el-popover>
                        <el-button class="biu6">
                            查看更多
                            <i class="el-icon-arrow-right"></i>
                        </el-button>
                    </div>
                    <div style=" float: left;width:620px;margin-top: 0px;background-color: #FFF;height: 330px;">
                        <div class="biu10">
                        <span class="giao4">2019-04-22 工作日报</span>
                        <el-avatar :size="size" :src="circleUrl" class="giao5"></el-avatar>
                        <p class="giao6">赵小刚</p>
                        <p class="giao7">未批阅</p>
                        <i class="el-icon-circle-plus giao8">详情</i>
                        <el-divider class="biu10"></el-divider>
                        </div>
                        <div class="biu11">
                        <span class="giao4">2019-04-22 工作日报</span>
                        <el-avatar :size="size" :src="circleUrl" class="giao5"></el-avatar>
                        <p class="giao6">赵小刚</p>
                        <p class="giao7">未批阅</p>
                        <i class="el-icon-circle-plus giao8">详情</i>
                        <el-divider class="biu10"></el-divider>
                        </div>
                        <div class="biu11">
                        <span class="giao4">2019-04-22 工作日报</span>
                        <el-avatar :size="size" :src="circleUrl" class="giao5"></el-avatar>
                        <p class="giao6">赵小刚</p>
                        <p class="giao7">未批阅</p>
                        <i class="el-icon-circle-plus giao8">详情</i>
                        <el-divider class="biu10"></el-divider>
                        </div>
                        <div class="biu11">
                        <span class="giao4">2019-04-22 工作日报</span>
                        <el-avatar :size="size" :src="circleUrl" class="giao5"></el-avatar>
                        <p class="giao6">赵小刚</p>
                        <p class="giao7">未批阅</p>
                        <i class="el-icon-circle-plus giao8">详情</i>
                        <el-divider class="biu10"></el-divider>
                        </div>
                        <div class="biu11">
                        <span class="giao4">2019-04-22 工作日报</span>
                        <el-avatar :size="size" :src="circleUrl" class="giao5"></el-avatar>
                        <p class="giao6">赵小刚</p>
                        <p class="giao7">未批阅</p>
                        <i class="el-icon-circle-plus giao8">详情</i>
                        <el-divider class="biu10"></el-divider>
                        </div>
                        <div class="biu11">
                        <span class="giao4">2019-04-22 工作日报</span>
                        <el-avatar :size="size" :src="circleUrl" class="giao5"></el-avatar>
                        <p class="giao6">赵小刚</p>
                        <p class="giao7">未批阅</p>
                        <i class="el-icon-circle-plus giao8">详情</i>
                       
                        </div>
                    </div>
                </div>
                <div style=" float: left;width:620px;margin-top: 0px;margin-left: 10px;background-color: #F9F9F9;height: 400px;">
                    <div style=" float: left;width:620px;margin-top: 0px;background-color: #F9F9F9;height: 70px;">
                        <p class="biu1">日程日历</p>
                        <el-select v-model="select" class="giao2" slot="prepend" placeholder="我的日程"></el-select>
                       <el-popover placement="right" width="400" trigger="click" class="giao3">
                            <el-table :data="gridData">
                                <el-table-column width="150" property="date" label="日期"></el-table-column>
                                <el-table-column width="100" property="name" label="姓名"></el-table-column>
                                <el-table-column width="300" property="address" label="地址"></el-table-column>
                            </el-table>
                            <el-button slot="reference">
                                <i class="el-icon-plus"></i>
                                新建日程
                            </el-button>
                        </el-popover>
                        <el-button class="biu6">
                            日程管理
                            <i class="el-icon-arrow-right"></i>
                        </el-button>
                    </div>
                    <div style=" float: left;width:620px;margin-top: 0px;background-color: #FFF;height: 330px;">
                        <!-- <el-calendar v-model="value"></el-calendar> -->
                           <img src="../../images/6.png">
                    </div>
                </div>
            </div>
            <div style="float: left;width:620px;margin-top: 15px;margin-left: 310px;height: 200px;position: relative;">
                <p class="s1">Copyright ? www.AxureUX.com, All Rights Reserved.</p>

                <p class="s2">助你快速打造友好美观的交互原型</p>
            </div>
        </el-container>
    </el-main>
  </el-container>
</el-container>
    </div>
</template>
<script>
  export default {
    data() {
        
    //   const item = {
    //     date: '2016-05-02',
    //     name: '王小虎',
    //     address: '上海市普陀区金沙江路 1518 弄',
   
        
    //   }
      return {
        // tableData: Array(20).fill(item),
         value: new Date(),
        name:0,
             input3: '',
      input4: '',
       circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        sizeList: ["large", "medium", "small"],
      gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
        
      }
    },
    methods: {
         index1:function(){
             this.$router.push('/index1')
        },
        index2:function(){
             this.$router.push('/index2')
        },
        index3:function(){
             this.$router.push('/index3')
        },
        index4:function(){
             this.$router.push('/index4')
        }
        ,index5:function(){
             this.$router.push('/index5')
        },
        index6:function(){
             this.$router.push('/index6')
        }
        ,
        index7:function(){
             this.$router.push('../qingjiashenqing')
        }
        ,
        index8:function(){
             this.$router.push('/index8')
        }
        
    }
  };
</script>
<style scoped>
.s1{
    position: absolute;
        font-size: 13px;
    top: 65px;
    left: 130px;
}
.s2{
    position: absolute;
    font-size: 13px;
    top: 100px;
    left: 190px;
}

/* ::v-deep.el-calendar__body{
    height: 300px !important;
}
::v-deep.el-calendar-table{
    height: 300px !important;
}
::v-deep.el-calendar-table__row{
    height:50px !important;
} */
.set-maxWidth{
    margin-right: auto;
    margin-left: auto;
    max-width: 1366px;
    width:100%;
}
.giao4{
    float: left;
    margin-top: 10px;
    margin-left: 10px;
}
.giao5{
    float: left;
   width: 20px;
    height: 20px;
    margin-top: 10px;
    margin-left: 90px;
}
.giao6{
    float: left;
    font-size: 13px;
    margin-top: 10px;
    margin-left: 5px;
}
.giao7{
    float: left;
    margin-top: 10px;
    margin-left: 100px;
}
.giao8{
     float: left;
    margin-top: 10px;
    margin-left: 90px;
}
.giao3{
        float: left;
    margin-top: 13px;
    
    margin-left: 10px;
}
.giao2{
        float: left;
    margin-top: 13px;
    width: 170px;
    margin-left: 100px;
}
.giao1{
        float: left;
    margin-top: 13px;
    width: 170px;
    margin-left: 350px;
}
.biu11{
     float: left;
    margin-top: -15px;
}
.biu10{
     float: left;
    margin-top: 0px;
}
.biu7{
    float: left;
    margin-top: 10px;
    margin-left: 5px;
    font-weight: bolder;
    color: black;
}
.biu8{
    float: left;
    margin-top: 10px;
    margin-left: 0px;
}
.biu9{
    float: left;
    margin-top: 10px;
    margin-left: 175px;
}
.biu6{
        float: left;
    margin-top: 13px;
   margin-left: 10px;
}
.biu5{
        float: left;
    margin-top: 13px;
    
    margin-left: 275px;
}
.sc6-2:hover{
    border: 1px solid #E4E4E4;
    background-color: #F9F9F9;
}
.biu4{
    float: left;
    width: 95px;
    height: 95px;
    margin-top: 50px;
    margin-left: 50px;
    cursor: pointer;
}
.biu4-1{
    text-align: center;
        font-size: 13px;

}
.biu4-2{
    text-align: center;
    font-size: 18px;
        line-height: 20px;
        font-weight: bolder;
}
.biu4-2:hover{
    color: black;
}
.biu2{
        float: left;
    margin-top: 13px;
    width: 170px;
    margin-left: 170px;
}
.biu3{
        float: left;
    margin-top: 13px;
    width: 170px;
    margin-left: 10px;
}
.biu1{
    float: left;
    margin-top: 25px;
    margin-left: 20px;
    color: black;
    font-weight: bold;
}

.sc6-2{
    float: left;
    width: 80px;
    height: 80px;
    border: 1px solid #FFFFFF;
    margin-top: 20px;
    margin-left: 35px;
    border-radius: 10px;
    cursor: pointer;
}
.sc6-2-1{
    font-size: 50px;
        float: left;
    margin-left: 15px;
    margin-top: 2px;
}
.sc6-2-2{
      float: left;
    margin-left: 10px;
    margin-top: 2px;
}
.sc6-2-3{
      float: left;
          font-size: 12px;
    margin-left: 10px;
    margin-top: 4px;
}
.sc6-1{
    position: relative;
}
.sc6-1-1{
    position: absolute;
   top: -15px;
    left: 20px;
}
.el-main {
    background-color: #FFFFFF;
    color: #999999;
   height: 150px;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
  .ss1{
      float: left;
      width: 70px;
      background: #333744;
        
      height: 1000px;
      
  }
  .ss1-1{
      float: left;
      margin-left: 5px;
      margin-top: 10px;
  }
  .ss1-2{
      float: left;
      width: 70px;
      height: 70px;
      /* border: 1px solid #FFF; */
      margin-top: 10px;
      position: relative;
      cursor: pointer;
  }
  .ss1-2-1{
      position: absolute;
      top: 10px;
      left: 25px;
      color: #FFF;
  }
  .ss1-2-2{
     position: absolute;
      top: 20px;
      left: 7px;
      color: #FFF;
      font-size: 13px;
  }
  .ss1-2-3{
      position: absolute;
      top: 20px;
      left: 59px;
      color: #FFF;
  }

  .ss2{
      float: left;
      width: 150px;
      background: #FCFCFC;
      height: 1000px;
      
  }
  .ss2-1{
      float: left;
      width: 150px;
      height: 40px;
      position: relative;
  }
  .ss2-1-1{
      position: absolute;
      top: -3px;
      left: 10px;
      font-size: 14px;
      font-weight: bold;
  }
  .ss2-1-2{
      position: absolute;
      top: 12px;
      left: 110px;
      cursor: pointer;
  }
  .ss2-2{
      float: left;
      width: 150px;
      height: 50px;
      position: relative;
      cursor: pointer;
  }
  .ss2-2-1{
      position: absolute;
      top: 1px;
      left: 30px;
      font-size: 14px;
      font-weight: bold;
  }
    .sc1{
           position: absolute;
    top: -5px;
    left: 961px;
    width: 240px;
    height: 40px;

    }
    .sc2{
        position: absolute;
        top: 0px;
        left: 0px;
    }
    .sc2 li{
        float: left;
        list-style: none;
    }
    .sc2 li i{
        float: left;
    }
    .sc2 li p{
        float: left;
    }
    .sc3{
        position: absolute;
        width: 410px;
        height: 40px;

        top: 0px;
        left: 1220px;
    }
    .sc3-1{
      float: left;
      margin-left: 20px;
    }
    .sc4{
        float: left;
       margin-top: 20px;
        margin-left: 10px;
        
    }
    .sc5{
        float: left;
        margin-top: -2px;
         margin-left: 1410px;
    }
    .sc6{
        background-color: #F0F2F5;
    }
</style>

