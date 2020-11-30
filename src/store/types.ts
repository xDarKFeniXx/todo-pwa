export enum LoadingEnum{
    NEVER="NEVER",
    LOADING="LOADING",
    LOADED="LOADED"
}
export interface TodoI{
    userId:number,
    id: number,
    title:string,
    completed:boolean
}
