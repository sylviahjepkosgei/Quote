export class Quote {
  public showDescription: boolean;
  upvote:number;
  downvote:number;
  constructor(public id: number,public name:string,public description: string,public completeDate:Date){
    this.showDescription = false;
    this.upvote=0;
    this.downvote=0;
  }
}
