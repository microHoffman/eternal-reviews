<template>
  <div v-if="!isLoggedIn" class="alert alert-warning">
    Please log in first in order to be able to create a review.
  </div>
  <div v-else-if="!canUserCreateReview" class="alert alert-danger">
    You can not create a review since you have not interacted with protocol.
  </div>
  <div v-else>
    <div class="alert alert-success">
      You interacted with the protocol, so you are eligible to create a review.
    </div>
    <label class="input-wrapper">
      Please input score between 0-5.
      <input type="number" v-model="score" />
    </label>
    <label class="input-wrapper">
      Please write a text review.
      <input v-model="text" />
    </label>
    <button class="btn btn-primary" @click="sendCreateReview">
      Send review
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Review, ReviewCreate } from "@/backend/generated";
import { DefaultService } from "@/backend/generated";
import useWeb3 from "../composables/useWeb3";
import { onMounted, ref, watch } from "vue";
import { resolveAddress } from "@/utils/ens";
import to from "@/utils/await-to-js";
import useSingleProject from "@/composables/useSingleProject";

const { project } = useSingleProject();
const { userAddress, isLoggedIn } = useWeb3();

const canUserCreateReview = ref(false);

const checkIfUserCanReview = async (): Promise<void> => {
  if (!isLoggedIn.value) {
    canUserCreateReview.value = false;
    return;
  }

  // so far only checking specific ENS, later we should generalize it
  const [error, ensName] = await to(resolveAddress(userAddress.value));
  canUserCreateReview.value = Boolean(!error && ensName);
};
onMounted(async () => {
  await checkIfUserCanReview();
});

watch(userAddress, async (newUserAddress, oldUserAddress) => {
  await checkIfUserCanReview();
});

const score = ref<number>();
const text = ref<string>("");

const sendCreateReview = async (): Promise<Review | undefined> => {
  if (!userAddress.value || score.value === undefined) {
    return;
  }
  const newReview: ReviewCreate = {
    score: score.value,
    text: text.value,
    address: userAddress.value,
  };
  const createdReview =
    await DefaultService.createReviewProjectProjectIdCreateReviewPost(
      project.value.id,
      newReview
    );
  project.value.reviews.push(createdReview);
  score.value = null;
  text.value = "";
};
</script>

<style scoped>
.input-wrapper {
  display: block;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
