import { createApp, ref } from 'vue';
import App from './App.vue';

import router from "@/router"; //路由
import './utils/update.js' //代码更新提示

import 'ant-design-vue/dist/reset.css';
import VMdPreview from '@kangc/v-md-editor/lib/preview';

import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/style/preview.css';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import 'highlight.js/styles/github-dark.css'; // 引入暗色主题的 CSS

import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
import java from 'highlight.js/lib/languages/java';
import sql from 'highlight.js/lib/languages/sql';
import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';



hljs.registerLanguage('json', json);
hljs.registerLanguage('json', json);
hljs.registerLanguage('java', java);
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('vue', javascript);
hljs.registerLanguage('react', javascript);
hljs.registerLanguage('python', python);


// 默认主题
VMdPreview.use(githubTheme, {
    Hljs: hljs,
});

const app = createApp(App);

app.use(router);
app.use(VMdPreview);
app.mount('#app');
