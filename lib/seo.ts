import { type Metadata } from "next";
import favicon from "@/public/favicon.ico"

export const seo: Metadata = {
  title: "TU Botany",
  description: "A collection of trees on the Triam Udom Suksa School",
  keywords: "Botany, Triam Udom Suksa School, Trees, Triam Udom Suksa, Thailand, School",
  authors: [{ name: "Adisuarn Wuttikul" }],
  icons: [{ rel: 'icon', url: favicon.src }]
}
