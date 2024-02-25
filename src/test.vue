<template>
  <div class="test">
    这是测试子文件的文件{{a}}{{x}}
  </div>
</template>

<script>
import './test.less'
const x = '定义的const常量'
export default {
  name: 'App',
  data () {
    return {
        a: "这是test组件",
        x
    }
  }
}
</script>