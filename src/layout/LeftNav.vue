<template>
  <el-menu active-text-color="#ffd04b" background-color="#545c64" text-color="#fff" @open="handleOpen"
    @close="handleClose" router :default-active="$route.path" style="width: 210px;">
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <DocumentCopy />
        </el-icon>
        <span>Vue3 API</span>
      </template>
      <el-menu-item-group title="Group Color">
        <el-menu-item index="/api/group_01/demo_01">舒服的颜色</el-menu-item>
        <el-menu-item index="/api/group_01/demo_02">立体重叠</el-menu-item>
        <!-- <el-menu-item index="/api/group_01/demo_03">html 模板</el-menu-item> -->
        <el-menu-item index="/api/group_01/demo_04">component 模板</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Ref">
        <el-menu-item index="/api/group_02/demo_01">ref管理对象</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { DocumentCopy } from "@element-plus/icons-vue";
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
