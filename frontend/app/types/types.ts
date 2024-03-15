import { type UUID } from "crypto"

export type Contact = {
  contact_id: number,
  contact_message: string,
  user_id: UUID,
}

export type Askus ={
  doubt_id: number,
  doubt_message: string,
  course_id: number,
  user_id: UUID,
}