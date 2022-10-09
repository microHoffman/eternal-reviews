import { DefaultService, OpenAPI } from "./generated";
import type { Project, Review, ReviewCreate } from "./generated";

export const setupBackendApi = (): void => {
  OpenAPI.BASE = "http://13.38.130.243";
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
