import { User } from "src/app/shared/models/user";

export class Challenge {
    constructor(
      public title: string,
      public type: string,
      public remarks: string,
      public solvers: User[],
      ) {
  
      }
  }