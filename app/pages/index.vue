<template>
  <UCard class="w-full h-full flex items-center justify-center">
    <UForm
      :state="state"
      class="space-y-4"
      @submit="onSubmit"
    >
      <UFormField
        label="Username"
        name="username"
        type="text"
      >
        <UInput v-model="state.username" />
      </UFormField>
      <UFormField
        label="Password"
        name="password"
        type="password"
      >
        <UInput v-model="state.password" />
      </UFormField>

      <UButton type="submit">
        Submit
      </UButton>
    </UForm>
  </UCard>
</template>

<script lang="ts" setup>
import type { SignInInput } from '~~/api/generated/api'

const { $api } = useNuxtApp()

const state = ref<SignInInput>({
  username: '',
  password: ''
})

const onSubmit = async () => {
  const { data } = await $api.signIn.signInCreate({
    username: state.value.username,
    password: state.value.password
  })

  console.log(data)
}
</script>
