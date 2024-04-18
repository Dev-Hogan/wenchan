<template>
  <div
    class="h-screen flex-1 flex flex-col justify-between items-center pb-[68px] pt-[110px] w-[360px] mx-auto"
  >
    <div class="space-y-[115px] text-center">
      <div v-if="!isRegister">
        <div class="text-[28px] font-semibold text-theme">问禅笔记</div>
        <div class="text-light-5 text-[14px]">通过问问题的方式来记录、学习、回顾知识</div>
      </div>
      <div v-else>
        <div class="text-[28px] font-semibold text-theme">输入验证码</div>
        <div class="text-light-5 text-[14px]">已向邮箱 wenchan@gmail.com发送验证</div>
      </div>
      <div v-if="!isRegister" class="space-y-[37px]">
        <NtInput
          v-model="account"
          :class="[
            'h-[42px] mx-auto border-0 text-light-3 text-[30px] font-medium !px-[31px]',
            'transition-colors'
          ]"
          input-class="placeholder:text-center text-[30px]"
          placeholder="邮箱或手机号"
        ></NtInput>
        <NtButton
          :disabled="!isWrite"
          :class="[
            'rounded-3 text-white bg-light-2 px-[150px] py-[12px] w-full text-[30px]',
            isWrite ? 'bg-theme' : ''
          ]"
          @click="handleContinue(account!)"
          >继续</NtButton
        >
      </div>
      <div
        v-else
        :class="['flex items-center justify-center space-x-[25px] [&>div]:flex [&>div]:space-x-2']"
      >
        <div>
          <NtInput
            :class="['_code-input', i === 4 ? '!ml-[20px]' : '']"
            v-for="i in 6"
            :key="i"
            v-model="verificationCode[i - 1]"
            :max-length="1"
            auto-complete="new-password"
          ></NtInput>
        </div>
      </div>
    </div>
    <div class="text-light-5 text-[12px] font-medium">
      点击登录即表示你同意我们的《用户协议》和《隐私政策》
    </div>
  </div>
</template>

<script setup lang="ts">
const account = ref<string>()
const isWrite = computed(() => !!account.value)
const isRegister = ref(false)

function handleContinue(val: string) {
  if (!val) return
  isRegister.value = true
}

const verificationCode = ref<string[]>([])
</script>
<style lang="scss" scoped>
:deep(input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill) {
  -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
  background-color: transparent !important;
  background-image: none;
  transition: background-color 50000s ease-in-out 0s; //背景色透明  生效时长  过渡效果  启用时延迟的时间
}
._code-input {
  @apply border-x-0 border-t-0 rounded-none w-[36px] text-[20px] text-center border-b-light-6 border-b-[3px];
}
</style>
