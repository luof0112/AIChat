/**
 * @Author       : luof
 * @Date         : 2024-09-24 11:21:17
 * @LastEditTime : 2024-09-24 11:21:24
 * @Description  : 
 * @FilePath     : \chatVue\src\components\ChatComponent.vue
 * Flush with the spring breeze, the horse's hooves fly fast; in a day, I have seen all of Chang'an.
/
<template>
  <div id="body">
    <div class="chat-container">
      <div class="message-out" ref="chatOutDiv">
        <div v-for="(message, index) in messageList" :key="index"
             :class="['message', message.role === 'user' ? 'user' : message.role === 'system' ? 'system' : 'bot']">
          <div v-if="message.role === 'system' && message.type === 'line'" class="divider-line">
            <a-divider>以上为历史对话记录</a-divider>
          </div>
          <div v-else-if="message.role === 'system' && message.type === 'error'">
            <div class="message bot">
              <div class="bubble bot">
                服务器端响应失败，请重试！
              </div>
            </div>
          </div>
          <div v-else :class="['bubble', message.role === 'user' ? 'user' : 'bot']">
            <div v-if="message.role === 'user'">
              {{ message.content }}
            </div>
            <div v-else>
              <div style="display: flex;align-items: center">
                <div>
                  <svg width="21" height="21" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"
                       class="h-12 w-12 " role="img">
                    <text x="-9999" y="-9999">ChatGPT</text>
                    <path
                        d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z"
                        fill="currentColor"></path>
                  </svg>
                </div>
                <div style="margin-left: 5px">
                  <span style="font-size: 12px">{{ message.time }}</span>
                </div>
              </div>
              <v-md-preview  :text="message.content" ></v-md-preview>
            </div>
          </div>
        </div>

        <div v-if="isLoading">
          <div class="message bot">
            <div class="bubble bot">
              <a-spin/>
            </div>
          </div>
        </div>

      </div>
      <div class="util-button-line">
        <div class="add-new-chat">
          <a-button type="primary" @click="addNewChat">
            <PlusSquareOutlined />
            新增会话
          </a-button>&nbsp;
          <a-popconfirm
              title="确认系统退出?"
              ok-text="Yes"
              cancel-text="No"
              @confirm="handleLogout"
          >
            <a-button type="primary">
              <template #icon><PoweroffOutlined /></template>
            </a-button>
          </a-popconfirm>
        </div>
      </div>
      <div class="message-input">
        <a-textarea :disable="isLoading" v-model:value="sendMessageStr" :rows="4"
                    placeholder="在此输入, shift + enter 换行"
                    :maxlength="10000" @keypress.enter="handleKeyDown"/>
        <div v-if="!isStreamOpen" class="send-button">
          <a-button  :disabled="!sendMessageStr.trim()" @click="sendMessage"  type="primary">
            <svg t="1726983750400" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="7571" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" style="margin-right: 8px;">
              <path d="M0 524.8l281.6 166.4 582.4-531.2L384 704l384 128 256-832zM384 985.6L512 832l-128-64z" fill="#fff"></path>
            </svg>
          </a-button>
        </div>
      </div>

    </div>
  </div>
</template>

<style src="./src/assets/chat.css"></style>

<script setup>
import {computed, getCurrentInstance, nextTick, onMounted, ref} from 'vue'
import {message} from 'ant-design-vue';
import {v4 as uuidv4} from 'uuid';
import {reqGenerateChat} from "@/api/zpAI.js";
import {useRouter} from "vue-router";
import { PoweroffOutlined,PlusSquareOutlined } from '@ant-design/icons-vue';

// 输入框文本
const sendMessageStr = ref("")
// 历史对话信息列表
const messageList = ref([])
// 当前对话信息列表
const currentMessageList = ref([])
// 是否在等待应答
const isLoading = ref(false)
// 请求流是否打开
const isStreamOpen = ref(false)
// 是否取消请求流
const isCancelStream = ref(false)
// chatOut的div高度
const chatOutDiv = ref(null)
// DOM 实例
const instance = getCurrentInstance();
// $cookies
const $cookies = instance.appContext.config.globalProperties.$cookies;
// 当前对话记录ID
const chatId = ref(null)
//
const router = useRouter()

onMounted(() => {
  const token = computed(() => {
    return localStorage.getItem('token')
  })
  if (token) {
    sendMessage()
  }
})


// 发送消息
async function sendMessage() {
  const uuid = uuidv4().replace("-", "");
  const userMessage = {
    id: uuid + "_q",
    content: sendMessageStr.value,
    role: "user",
    type: "chat",
    time: new Date().toLocaleString()
  };
  const botMessage = {id: uuid + "_a", content: "", role: "bot", type: "chat"};

  // 添加用户消息
  messageList.value.push(userMessage);
  currentMessageList.value.push(userMessage);

  // 添加一个空的 bot 消息用于后续流式更新
  messageList.value.push(botMessage);

  // 模拟逐步获取数据
  isStreamOpen.value = true;
  isLoading.value = true; // 请求开始,开始加载

  let isUserScrolling = false;
  let autoScrollEnabled = true; // 标志位，控制是否自动滚动

  // 重新设置滚动监听器
  function setScrollListener() {
    const scrollElem = chatOutDiv.value;
    chatOutDiv.value.removeEventListener('scroll', handleScroll); // 防止重复绑定监听器
    chatOutDiv.value.addEventListener('scroll', handleScroll); // 绑定新的监听器
  }

  // 滚动监听器函数
  function handleScroll() {
    const scrollElem = chatOutDiv.value;
    if (scrollElem.scrollHeight - scrollElem.scrollTop - scrollElem.clientHeight > 10) {
      isUserScrolling = true;
      autoScrollEnabled = false; // 禁用自动滚动
    } else {
      isUserScrolling = false;
      autoScrollEnabled = true; // 恢复自动滚动
    }
  }

  // 每次新消息时尝试滚动到页面底部
  function scrollToBottom() {
    if (autoScrollEnabled) {
      const scrollElem = chatOutDiv.value;
      scrollElem.scrollTo({top: scrollElem.scrollHeight, behavior: 'smooth'});
    }
  }

  // 发送消息后重置滚动状态，并绑定滚动监听器
  nextTick(() => {
    setScrollListener(); // 每次消息发送后重新绑定监听器
    scrollToBottom();    // 新消息后自动滚动到底部
  });

  const sendMessageString = sendMessageStr.value;
  sendMessageStr.value = '';

  try {
    let response = await reqGenerateChat({uuid, content: sendMessageString, time: new Date().toLocaleString()});
    isLoading.value = false; // 请求结束,结束加载

    const lines = response.data.replyContent;

    // 找到 botMessage 在 messageList 中的位置
    // messageList已存 在 botMessage 对象,查询对应index 用户更新内容
    const botMessageIndex = messageList.value.findIndex(message => message.id === botMessage.id);
    // console.log(messageList.value)
    // console.log(botMessageIndex)
    const time = new Date().toLocaleString();

    // 逐步处理数据流并逐字显示
    for (const line of lines) {
        await displayContent(line, botMessageIndex, time);
        await nextTick(() => {
          scrollToBottom(); // 新消息后再次滚动到底部
        });
    }
  } catch (error) {
    message.error('error', error);
    console.log(error);
  } finally {
    isStreamOpen.value = false; // 流结束
  }
}


// 逐字显示内容的函数
async function displayContent(content, botMessageIndex, time) {
  for (let i = 0; i < content.length; i++) {
    messageList.value[botMessageIndex].content += content[i];
    messageList.value[botMessageIndex].time = time;

    // 触发 Vue 响应式更新
    messageList.value = [...messageList.value];

    // 控制显示速度，10ms 显示一个字符
    await new Promise(resolve => setTimeout(resolve, 10));

  }

}


/**
 * 添加新聊天
 */
function addNewChat() {
  // console.log(messageList.value)
  messageList.value = []
  currentMessageList.value = []
  chatId.value = null
}

/**
 * 判断按键
 * @param e 按键事件
 */
function handleKeyDown(e) {
  if (isStreamOpen.value) return;
  if ((e.ctrlKey || e.shiftKey) && e.key === 'Enter') {
    insertNewLine(e);
  } else if (e.key === 'Enter' && !e.ctrlKey && !e.shiftKey) {

    if (e.isComposing) {
      return
    }
    nextTick(() => {
      let scrollElem = chatOutDiv.value;
      scrollElem.scrollTo({top: scrollElem.scrollHeight, behavior: 'smooth'});
    });
    e.preventDefault();
    sendMessage();
  }
}

// command + enter / shift + enter 换行输入
function insertNewLine(e) {
  const textareaEl = e.target;
  const start = textareaEl.selectionStart;
  const end = textareaEl.selectionEnd;
  if (e.shiftKey) {
    // shift + enter 自动带换行符
    sendMessageStr.value = sendMessageStr.value.substring(0, start) + sendMessageStr.value.substring(end);
  } else {
    sendMessageStr.value = sendMessageStr.value.substring(0, start) + '\n' + sendMessageStr.value.substring(end);
  }
  nextTick(() => {
    textareaEl.setSelectionRange(start + 1, start + 1);
  });
}

function handleLogout() {
  localStorage.clear()
  router.push('/login')
}
</script>
<style scoped>

:deep(.github-markdown-body) {
  padding: 10px 8px 10px;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  line-height: 1.5;
  word-wrap: break-word;
}
</style>
