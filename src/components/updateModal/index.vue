<template>
  <div class="update-modal" ref="modal">
    <div class="title">
      系统更新🚀
    </div>
    <div class="content">
      系统已更新，请刷新页面（请在刷新前注意保存当前页面数据）。
    </div>
    <div class="actions">
      <button @click="handleIgnore">忽略</button>
      <button @click="refresh">刷新</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const modal = ref(null);

const handleIgnore = () => {
  if (modal.value) {
    // You can use `modal.value` to access the DOM element if needed
    modal.value.remove(); // Remove the modal from the DOM
  }
};

const refresh = () => {
  handleIgnore();
  // Reload the page with cache refresh
  window.location.reload(true);
};
</script>

<style scoped>
.update-modal {
  user-select: none;
  position: fixed;
  right: 20px;
  bottom: 20px;
  max-width: 300px;
  min-width: 250px;
  width: 50%;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 10px 15px;
  animation: shakeY 1.5s linear;
  z-index: 99999;
}
@keyframes shakeY {
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
}

.shakeY {
  animation-name: shakeY;
}
.update-modal .title {
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  margin-bottom: 10px;
}
.update-modal .content {
  text-indent: 2em;
  font-size: 16px;
}
.update-modal .actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
}
.update-modal .actions button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
  margin: 0 0 0 10px;
}
.update-modal .actions button:last-child {
  background-color: #409eff;
  color: #fff;
  border-color: #409eff;
}
</style>
