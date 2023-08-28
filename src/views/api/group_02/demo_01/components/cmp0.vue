<template>
  <div class="cmp-0">
    <div class="cmp-0__info flex">
      <div>
        <dl>
          <dt class="font-bold">数据</dt>
          <dd>
            <pre>{{ user }}</pre>
          </dd>
        </dl>
        <dl class="mt-4">
          <dt class="font-bold">视图</dt>
          <dd>{{ user.name }}</dd>
          <dd>{{ user.age }}</dd>
          <dd>{{ user.price }}</dd>
        </dl>
      </div>
      <dl>
        <dt class="font-bold">操作</dt>
        <dd>
          <button class="ml-1 text-blue-500" @click="changeUserName">改变用户名</button>
          <button class="ml-1 text-blue-500" @click="addUserPrice">新增普通属性</button>
          <button class="ml-1 text-blue-500" @click="">占占占占占位</button>
          <button class="ml-1 text-blue-500" @click="addUserChildren">新增数组属性</button>
        </dd>
        <dd>
          <button class="ml-1 text-blue-500" @click="">占占占占位</button>
          <button class="ml-1 text-blue-500" @click="">占占占占占位</button>
          <button class="ml-1 text-blue-500" @click="">占占占占占位</button>
          <button class="ml-1 text-blue-500" @click="replaceUserChildren">替换数组属性</button>
        </dd>
        <dd>
          <button class="ml-1 text-blue-500" @click="">占占占占位</button>
          <button class="ml-1 text-blue-500" @click="">占占占占占位</button>
          <button class="ml-1 text-blue-500" @click="">占占占占占位</button>
          <button class="ml-1 text-blue-500" @click="modifyUserChildren">修改数组属性</button>
        </dd>
      </dl>
    </div>

    <cmp1 />


  </div>
</template>

<script>
import cmp1 from './cmp1.vue'
import { ref } from 'vue';
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default {
  components: {
    cmp1,
  },
  setup() {
    const user = ref({
      name: '张三',
      age: 18
    });

    const changeUserName = () => {
      user.value.name = user.value.name === '张三' ? '李四' : '张三';
    };

    const addUserPrice = () => {
      user.value.price = 100
    }

    const addUserChildren = () => {
      user.value.children = ['小白', '大黄', '二狗']
    }

    const replaceUserChildren = () => {
      user.value.children = ['AAA', 'BBB', 'CCC']
    }

    const modifyUserChildren = () => {
      user.value.children.push(getRandomInt(1, 100))
    }

    return {
      user,
      changeUserName,
      addUserPrice,
      addUserChildren,
      replaceUserChildren,
      modifyUserChildren
    };
  },
};
</script>

<style scoped>
.cmp-0__info {
  position: absolute;
  left: calc(5rem + 16px);
  top: calc(5rem + 16px);
}
</style>
