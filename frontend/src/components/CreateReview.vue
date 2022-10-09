<template>

</template>

<script setup lang="ts">
import type {Review, ReviewCreate} from "../backend/generated";
import {DefaultService} from "../backend/generated";
import useWeb3 from "../composables/useWeb3";

interface Props {
  projectId: number
}
const props = defineProps<Props>()

const { userAddress, setUserAddress } = useWeb3()

const score = ref<number>()
const text = ref<string>("")

const sendCreateReview = async (): Promise<Review | undefined> => {
  if (!userAddress.value || score.value === undefined) {
    return
  }
  const newReview: ReviewCreate = {
    score: score.value,
    text: text.value,
    address: userAddress.value
  }
  return await DefaultService.createReviewProjectProjectIdCreateReviewPost(props.projectId, newReview)
}
</script>

<style scoped>

</style>