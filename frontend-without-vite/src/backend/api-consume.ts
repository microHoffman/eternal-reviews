import { DefaultService, OpenAPI } from "./generated";
import type { Project, Review, ReviewCreate } from "./generated";

export const setupBackendApi = (): void => {
  OpenAPI.BASE = "http://127.0.0.1:8000";
};

export const fetchProjects = async (): Promise<Project[]> => {
  return await DefaultService.readProjectsProjectsGet();
};

export const fetchSingleProject = async (
  projectId: number
): Promise<Project> => {
  return await DefaultService.readProjectProjectProjectIdGet(projectId);
};

export const createReview = async (
  projectId: number,
  review: ReviewCreate
): Promise<Review> => {
  return await DefaultService.createReviewProjectProjectIdCreateReviewPost(
    projectId,
    review
  );
};
