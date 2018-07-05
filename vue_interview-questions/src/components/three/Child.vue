<template>
  <div>
    <span>{{msg}}</span>
    <slot name="name"></slot >
    <slot name="age"></slot >
  </div>
</template>
<script>
  export default{
    props: ['msg'],
    mounted() {
      this.$emit('childEvent', { EnglishName: 'qietuniu'});
    }
  };
</script>

<style lang="less" scoped="scoped">

</style>