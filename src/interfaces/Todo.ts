export enum Status {
  Open,
  Closed
}

export interface Todo {
  id: number
  title: string
  description: string | null
  status: Status
}

export interface TodoDto {
  title: string
  description: string | null
  status: Status
}