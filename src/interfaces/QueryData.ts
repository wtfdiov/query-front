export enum QueryStatus {
    New = "new",
    Active = "active",
    Done = "done"
}

export type QueryData = {
    id: string,
    key: string,
    status: QueryStatus,
    urls: string[]
}