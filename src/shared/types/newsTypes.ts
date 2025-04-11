export type NewsIdArrayType = number[]

export type NewsItemType = {
    by: "string"
    descendants: number
    id: number
    parent: number
    deleted: boolean
    kids: number[]
    score: number
    text: string
    time: number
    title: string
    type: string
    url: string
    comments: null | NewsItemType[]
}