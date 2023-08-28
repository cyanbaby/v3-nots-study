<template>
  <div class="app-main container">
    <div class="rectangle rectangle1"></div>
    <div class="rectangle rectangle2"></div>
    <div class="rectangle rectangle3"></div>

    <hr />

    <div class="color-container" style="margin-top: 200px; width: 100%; padding-left: 50px;">
      <div class="color-row">
        <div v-for="(color, index) in firstRowColors" :key="index" class="color-box" :style="{ background: color.code }">
          <div class="color-info">
            <span class="color-name">{{ color.name }}</span>
            <span class="color-code">{{ color.code }}</span>
          </div>
        </div>
      </div>
      <div class="color-row">
        <div v-for="(color, index) in secondRowColors" :key="index" class="color-box" :style="{ background: color.code }">
          <div class="color-info">
            <span class="color-name">{{ color.name }}</span>
            <span class="color-code">{{ color.code }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstRowColors: [
        { code: "#19CAAD", name: "蓝绿色" },
        { code: "#8CC7B5", name: "青碧色" },
        { code: "#A0EEE1", name: "蓝宝石绿" },
        { code: "#BEE7E9", name: "蔚蓝色" },
        { code: "#BEEDC7", name: "薄荷绿" },
      ],
      secondRowColors: [
        { code: "#D6D5B7", name: "米色" },
        { code: "#D1BA74", name: "土黄色" },
        { code: "#E6CEAC", name: "肉色" },
        { code: "#ECAD9E", name: "浅桃红" },
        { code: "#F4606C", name: "樱桃红" },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  height: 200px;
  position: relative;
  background-color: #E0E0E0;
}

.rectangle {
  position: absolute;
  width: 100px;
  height: 100px;
  opacity: 0.7;
}

.rectangle1 {
  background-color: #D7385E;
  top: 50px;
  left: 50px;
}

.rectangle2 {
  background-color: #05A8AA;
  top: 30px;
  left: 70px;
}

.rectangle3 {
  background-color: #4C6085;
  top: 70px;
  left: 90px;
}
</style>

<style scoped>
.color-container {
  display: flex;
  flex-direction: column;
}

.color-row {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin-bottom: 10px;
}

.color-box {
  flex: 0 0 auto;
  width: 100px;
  height: 100px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.color-info {
  text-align: center;
}

.color-name {
  font-size: 14px;
  font-weight: bold;
}

.color-code {
  font-size: 12px;
}
</style>
  