<template>
        <component class="w-9 h-9" :is="iconMap[icon]"></component>
</template>

<script setup lang="ts">

withDefaults(
    defineProps<{ icon?: string }>(), { icon: 'all' }
)
function createIcon(name: string) {
    return () => h('i', {
        class: `w-[30px] h-[30px] bg-[url('@/assets/icon/${name}.svg')] bg-center bg-no-repeat`
    })
}
const iconMap: Record<string, any> = {
    'add-tag': createIcon('add-tag')
}

</script>
<style lang="scss">
.a {
    .b {
        display: block;
    }
}
</style>
