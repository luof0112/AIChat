/**
* @author luof
* @date 2024/9/19 11:17
*/
<template>
  <div>
    <a-modal v-model:open="open" title="登录项" @ok="handleOk" :footer="null" @cancel="handleOk"
             :maskClosable="false"
             :keyboard="false"
             :closable="false"
    >
      <div v-if="login==='login'">
        <a-form :model="formState" name="normal_login" class="login-form" @finish="onLogin">
          <a-form-item name="username" :rules="[{ required: true, message: '请输入用户名!' }]">
            <a-input allowClear v-model:value="formState.username" placeholder="请输入用户名">
              <template #prefix>
                <UserOutlined class="site-form-item-icon"/>
              </template>
            </a-input>
          </a-form-item>
          <a-form-item name="password" :rules="[{ required: true, message: '请输入密码!' }]">
            <a-input-password allowClear v-model:value="formState.password" placeholder="请输入密码">
              <template #prefix>
                <LockOutlined class="site-form-item-icon"/>
              </template>
            </a-input-password>
          </a-form-item>

          <a-form-item>
            <div style="text-align: center">
              <a-button :loading="loading" type="primary"
                        style="height: 32px;"
                        html-type="submit" class="login-form-button">
                登录
              </a-button>
              <div @click="handleRegister">
                <a @click="login='register'">
                  前往注册
                </a>
              </div>
            </div>
          </a-form-item>
        </a-form>
      </div>
      <div v-else>
        <a-form :model="formState" name="normal_logout" class="logout-form">
          <a-form-item name="username" :rules="[{ required: true, message: '请输入用户名!' }]">
            <a-input allowClear v-model:value="formState.username" placeholder="请输入用户名">
              <template #prefix>
                <UserOutlined class="site-form-item-icon"/>
              </template>
            </a-input>
          </a-form-item>
          <a-form-item name="username" :rules="[{ required: true, message: '请输入密码!' }]">
            <a-input allowClear v-model:value="formState.password" placeholder="请输入密码">
              <template #prefix>
                <LockOutlined class="site-form-item-icon"/>
              </template>
            </a-input>
          </a-form-item>
          <a-form-item name="username" :rules="[{ required: true, message: '请输入邮箱!',type:'email' }]">
            <div style="display: flex;">
              <a-input style="width: 70%;margin-right: 5px" allowClear v-model:value="formState.email"
                       placeholder="请输入邮箱">
                <template #prefix>
                  <UserOutlined class="site-form-item-icon"/>
                </template>
              </a-input>
              <a-button style="height: 42px;">获取验证码</a-button>
            </div>

          </a-form-item>
          <a-form-item name="username" :rules="[{ required: true, message: '请输入验证码!' }]">
            <a-input allowClear v-model:value="formState.code" placeholder="请输入验证码">
              <template #prefix>
                <UserOutlined class="site-form-item-icon"/>
              </template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <div style="text-align: center">
              <a-button type="primary"
                        style="height: 32px;"
                        html-type="submit" class="logout-form-button">
                注册
              </a-button>
              <a @click="login='login'">
                已有账号?
              </a>
            </div>
          </a-form-item>
        </a-form>
      </div>
    </a-modal>
  </div>
</template>
<script setup>
import {ref} from 'vue';
import {LockOutlined, UserOutlined} from '@ant-design/icons-vue';
import {message} from 'ant-design-vue';
import {reqUserLogin} from "@/api/user.js";
import {useRouter} from "vue-router";

const emit = defineEmits(['close', 'isLogout'])
const props = defineProps(['open'])
const open = ref(true);
const formState = ref({
  username: '',
  password: ''
});

const router = useRouter()
const loading = ref(false)
const login = ref('login')

async function onLogin() {
  try {
    loading.value = true
    const res = await reqUserLogin({
      username: formState.value.username,
      password: formState.value.password
    })
    if (res.code === 200) {
      message.success('用户登录成功');
      localStorage.setItem('token', res.data)
      handleOk()
      await router.push('/chat')
    } else {
      message.error('用户登录失败,请检查用户名与密码');
    }
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}


function handleOk() {
  open.value = false;
  emit('close', true);
}


function handleRegister() {
  message.error('暂时不支持注册', 0);
}
</script>

<style>
.login-form, .logout-form {
  width: 100%;
  max-width: 400px;
  padding: 24px;
  margin: 10px auto;
  border-radius: 8px;
}

.login-form-button, .logout-form-button {
  width: 100%;
}

.login-form .ant-input, .logout-form .ant-input {
  height: 32px;
  padding: 5px;
}


.login-form-item, .logout-form-item {
  margin-bottom: 16px;
}

a-space {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

a {
  color: #1890ff;
  cursor: pointer;
}

a:hover {
  text-decoration: underline;
}

.login-form input::placeholder, .logout-form input::placeholder {
  color: #bfbfbf;
}

.ant-input-prefix {
  margin-right: 8px;
}

</style>
