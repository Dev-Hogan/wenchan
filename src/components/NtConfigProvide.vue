<template>
    <ConfigProvider :theme="{
        token: {
            colorPrimary: '#FFAC0A'
        }
    }">
        <slot></slot>
    </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue';
</script>
