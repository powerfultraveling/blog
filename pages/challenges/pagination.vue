<template>
  <ChallengeInnerPageWrapper :title="$t('pagination')">
    <template #right>
      <ul>
        <li v-for="{ id, title } in dataToShow" :key="id">
          <div>{{ id }}</div>
          <div>{{ title }}</div>
        </li>
      </ul>
      <div class="pt-10">
        <SPagination :total="dataTotalAmount" :per-page="DATA_PER_PAGE" />
      </div>
    </template>
  </ChallengeInnerPageWrapper>
</template>

<script lang="ts" setup>
interface Post {
  id: string
  title: string
}

const { data } = await useAsyncData<Post[]>('pagination', () =>
  $fetch('https://jsonplaceholder.typicode.com/posts')
)

const dataTotalAmount = data.value?.length

const router = useRouter()
const currentPage = computed(() => Number(router.currentRoute.value.query.page || 1))

const DATA_PER_PAGE = 5

const dataToShow = computed(() => {
  return data.value?.slice(
    (currentPage.value - 1) * DATA_PER_PAGE,
    currentPage.value * DATA_PER_PAGE
  )
})
</script>

<style scoped>
ul {
  @apply space-y-4;

  li {
    @apply p-4 border border-gray;
  }
}
</style>
