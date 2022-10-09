import type { Review } from "./review";

export class Project {

    constructor(
        public name: string,
        public description: string,
        public slug: string,
        public reviews: Review[]
    ) {}
}
