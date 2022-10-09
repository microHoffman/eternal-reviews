import { ref } from "vue";
import { Project } from "@/backend/generated";

const project = ref<Project>();

export default function useSingleProject() {
  return {
    project,
  };
}
