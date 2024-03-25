<template>
    <div :class="['_common-card', isWrite ? '!py-0 !px-0' : '']" ref="cardRef">
        <div @click="click" v-show="!isWrite" class="text-[18px] font-medium text-light-7">
            <div>如何安装自定义字体到APP里？如何使用已安装的自定义字体额？</div>
        </div>
        <NtEditorContent v-model="text" v-show="isWrite" @push="push">
            <template #linkTags>
                <NtIconButton icon="link" class="px-3 py-2 bg-light rounded-2 text-[12px] text-tag font-medium">
                    基础知识
                </NtIconButton>
                <NtIconButton icon="link" class="px-3 py-2 bg-light rounded-2 text-[12px] text-tag font-medium">
                    UI相关
                </NtIconButton>
            </template>
        </NtEditorContent>
    </div>
</template>

<script setup lang="ts">
const text = defineModel<string>()
const isWrite = ref(false)
text.value = '如何安装自定义字体到APP里？如何使用已安装的自定义字体额？'
const cardRef = ref()



const clickCount = ref(0);
const timer = ref<number>();
function click() {

    clickCount.value++;
    if (clickCount.value === 1) {
        // 设置定时器，1秒后重置点击次数
        timer.value = window.setTimeout(() => {
            clickCount.value = 0;
        }, 1000);
    } else if (clickCount.value === 2) {
        // 清除定时器
        clearTimeout(timer.value);
        // 执行你想要的操作
        if (isWrite.value) {
            isWrite.value = false
        } else {
            isWrite.value = true
        }



        // 重置点击次数
        clickCount.value = 0;
    }

}
function push(txt: string) {
    if (isWrite.value) {
        isWrite.value = false
    }
    console.log(txt);

}

onBeforeUnmount(() => {
    // 组件卸载前清除定时器
    clearTimeout(timer.value);
});
</script>
<style scoped>
._common-card {
    @apply border border-transparent hover:border-light-2 hover:shadow-sm hover:drop-shadow-card py-[12px] pl-12 pr-6 rounded-4;
    @apply relative focus-within:border-theme focus:bg-theme-10 focus-within:bg-theme-10 transition-colors;
}
</style>
