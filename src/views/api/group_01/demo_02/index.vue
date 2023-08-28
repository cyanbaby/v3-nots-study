<template>
  <div class="color-combinations">
    <div v-for="(combination, index) in colorCombinations" :key="index" class="color-combination">
      <div class="color-group">
        <div v-for="(color, layer) in combination" :key="layer"
          :style="{ backgroundColor: color, zIndex: layer, transform: `translate(${layer * 20}px, ${layer * 20}px)` }"
          class="color-layer">
          <div class="color-label">{{ color }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      // colorCombinations: [
      //   ['#8CC7B5', '#A0EEE1', '#D1BA74'],
      //   ['#8CC7B5', '#E6CEAC', '#F4606C'],
      //   ['#A0EEE1', '#D1BA74', '#ECAD9E'],
      //   ['#A0EEE1', '#E6CEAC', '#ECAD9E'],
      //   ['#BEE7E9', '#D1BA74', '#F4606C'],
      //   ['#BEE7E9', '#E6CEAC', '#ECAD9E'],
      //   ['#BEEDC7', '#D1BA74', '#F4606C'],
      //   ['#BEEDC7', '#E6CEAC', '#ECAD9E'],
      //   ['#D6D5B7', '#A0EEE1', '#F4606C'],
      //   ['#D6D5B7', '#E6CEAC', '#ECAD9E']
      // ]
      colorCombinations: [
        ['#D1BA74', '#A0EEE1', '#8CC7B5'],
        ['#F4606C', '#E6CEAC', '#8CC7B5'],
        ['#ECAD9E', '#D1BA74', '#A0EEE1'],
        ['#ECAD9E', '#E6CEAC', '#A0EEE1'],
        ['#F4606C', '#D1BA74', '#BEE7E9'],
        ['#ECAD9E', '#E6CEAC', '#BEE7E9'],
        ['#F4606C', '#D1BA74', '#BEEDC7'],
        ['#ECAD9E', '#E6CEAC', '#BEEDC7'],
        ['#F4606C', '#A0EEE1', '#D6D5B7'],
        ['#ECAD9E', '#E6CEAC', '#D6D5B7']
      ]

    };
  }
};
</script>
  
<style>
.color-combinations {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.color-combination {
  width: 200px;
  height: 200px;
}

.color-group {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.color-layer {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 5px;
  opacity: 0.8;
  transition: transform 0.2s ease;
}

.color-label {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
}
</style>
  