<template>
    <NtHeader title="设置"></NtHeader>
    <NtContent contentClass="space-y-[40px]">
        <div class="flex items-center space-x-12">
            <NtAvatar class="w-[80px] h-[80px]">
                <img :src="avatar">
            </NtAvatar>
            <div>
                <div class="font-extrabold text-[22px]">Haaozhang</div>
                <div class="texts-[13px] text-light-5">加入问禅234天</div>
            </div>
            <NtButton class="border border-light-2 rounded-[34px]">编辑</NtButton>
        </div>
        <div class="flex justify-between gap-[60px]">
            <div class="flex flex-col w-[480px]">
                <div class="flex [&>div]:flex items-center justify-between">
                    <div>存储空间</div>
                    <div>
                        <div>15%</div>
                        <div>75/500M</div>
                    </div>
                </div>
                <NtProgress></NtProgress>
                <div class="font-medium text-[12px] text-light-5">
                    *开通会员即可获得10G每年的存储空间+原图上传，会员到期30天后超出500M的图片资源将可能被冻结<span
                        class="shrink-0 text-tag ont-medium text-[12px] underline ml-2 cursor-pointer">查看详情</span>
                </div>


            </div>
            <NtButton
                class="items-center min-h-0 border border-theme text-theme font-bold text-[14px] bg-theme-15 rounded-5 !px-8 py-5 h-[37px]">
                GO
                PREMIUM</NtButton>
        </div>
    </NtContent>
</template>

<script setup lang="ts">
import avatar from '@/assets/avatar.png';

</script>
