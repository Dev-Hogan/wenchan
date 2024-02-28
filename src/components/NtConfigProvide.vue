<template>
    <ConfigProvider>
        <slot></slot>
    </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue';
</script>
