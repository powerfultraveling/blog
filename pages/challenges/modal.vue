<template>
  <ChallengeInnerPageWrapper title="Modal">
    <template #right>
      <div>
        <button class="btn" @click="$modal.open('test')">open</button>
        <FModal name="test" />
      </div>
    </template>
  </ChallengeInnerPageWrapper>
</template>

<script lang="ts" setup></script>
