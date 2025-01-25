import { Building } from "@/types/buildings"

export interface Tree {
  id: number
  Building: typeof Building
  Name: string
  Description: string
  AKA: string
  Science_Name: string
  Family: string
  Image: string
}
