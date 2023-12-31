<template>
  <div class="flex justify-center">
    <div class="flex items-center space-x-4">
      <button @click="toPrev">
        <SIcon name="chevron-back-sharp" />
      </button>
      <ul class="page-numbers">
        <li v-if="hasFirstEclipse" @click="changePage(FIRST_PAGE)">
          <div class="page-item" :class="{ active: currentPage === FIRST_PAGE }">
            {{ FIRST_PAGE }}
          </div>
        </li>
        <li v-if="hasFirstEclipse">...</li>
        <li
          v-for="page in pages"
          :key="page"
          class="page-item"
          :class="{ active: currentPage === page }"
          @click="changePage(page)"
        >
          <div>{{ page }}</div>
        </li>
        <li v-if="hasLastEclipse">...</li>
        <li v-if="hasLastEclipse" @click="changePage(pageCount)">
          <div class="page-item" :class="{ active: currentPage === pageCount }">
            {{ pageCount }}
          </div>
        </li>
      </ul>
      <button type="button" @click="toNext">
        <SIcon name="chevron-forward-sharp" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  total: number
  perPage?: number
}

const props = withDefaults(defineProps<Props>(), {
  perPage: 10
})

const router = useRouter()

const FIRST_PAGE = 1
const NUMBER_FOR_ECLIPSE = 5

const currentPage = computed(() => Number(router.currentRoute.value.query.page) || FIRST_PAGE)
const pageCount = computed(() => Math.round(props.total / props.perPage))
const hasPrev = computed(() => currentPage.value > FIRST_PAGE)
const hasNext = computed(() => currentPage.value < pageCount.value)

const hasFirstEclipse = computed(() => currentPage.value >= NUMBER_FOR_ECLIPSE)
const hasLastEclipse = computed(
  () => pageCount.value > 8 && currentPage.value <= pageCount.value - NUMBER_FOR_ECLIPSE
)

function buildPages(min: number, max: number) {
  const arr = []

  for (let i = min; i <= max; i++) {
    arr.push(i)
  }

  return arr
}

const pages = computed(() => {
  const current = currentPage.value

  if (currentPage.value < NUMBER_FOR_ECLIPSE) {
    const max = pageCount.value <= 8 ? pageCount.value : 8

    return buildPages(FIRST_PAGE, max)
  }

  if (current >= pageCount.value - NUMBER_FOR_ECLIPSE) {
    return buildPages(pageCount.value - 8, pageCount.value)
  }

  if (currentPage.value >= NUMBER_FOR_ECLIPSE && currentPage.value < pageCount.value) {
    return buildPages(currentPage.value - 2, currentPage.value + 2)
  }
})

function changePage(page: number) {
  if (!page) {
    return
  }

  router.replace({ query: { page } })
}

function toPrev() {
  if (!hasPrev.value) {
    return
  }

  const previous = currentPage.value - 1
  changePage(previous)
}

function toNext() {
  if (!hasNext.value) {
    return
  }

  const nextPage = currentPage.value + 1
  changePage(nextPage)
}
</script>

<style scoped>
.page-numbers {
  @apply flex items-center space-x-4;

  /* FIXME: when current > 5, transition would be lag */
  .page-item {
    @apply w-10 h-10 font-sans cursor-pointer transitable duration-1000;
    @apply flex items-center justify-center rounded-full;

    &.active {
      @apply bg-info;
    }
  }
}
</style>
