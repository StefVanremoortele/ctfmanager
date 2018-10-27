import { Challenge } from "src/app/shared/models/challenge";

export class Hackathon {
  constructor(
    public name: string,
    public startDate?: Date,
    public endDate?: Date,
    public challenges?: Challenge[],
    
    ) {

    }
}


