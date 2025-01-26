import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import treeData from '@/public/data/tree-data.json'
import { Tree } from '@/types/tree'
import Link from 'next/link'

type Props = {
  amount: number
}

const trees = JSON.parse(JSON.stringify(treeData))

const randomTreeData = (amount: number) => {
  const randomTrees = []
  for (let i = 0; i < amount; i++) {
    const randomIndex = Math.floor(Math.random() * trees.length)
    randomTrees.push(trees[randomIndex])
  }
  return randomTrees as Tree[]
}

const RandomBotany = ({ amount }: Props) => {
  return (
    <div className="md:w-[80%]">
      <div className="w-full flex flex-col items-center md:grid md:grid-cols-2 md:gap-5">
        {randomTreeData(amount).map((tree, index) => (
          <Card key={index} className="w-full relative flex flex-col items-center justify-between p-5 border rounded-2xl my-2 group hover:bg-black/10 transition-all duration-300">
            <CardContent className="flex flex-col items-center">
              <Image src={"https://placehold.co/150/png"} alt={tree.Name} width={150} height={150} className="w-14 h-14 rounded-full" />
              <CardTitle>
                <h1 className="mt-5 font-bold text-center">{tree.Name}</h1>
              </CardTitle>
              <CardDescription className="text-center">
                <p className="mt-2 text-center">{(tree.Science_Name && tree.Science_Name !== '-') ? `${tree.Science_Name}` : ''}</p>
              </CardDescription>
            </CardContent>
            <div className="items-center opacity-0 group-hover:opacity-100 hidden group-hover:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500">
              <Button
                className="px-3 py-2 bg-[#AD8B73] text-[#E3CAA5] rounded-2xl hover:bg-[#967E76] transform group-hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link
                  href={`/trees?name=${tree.Name}`}
                >
                  ดูเพิ่มเติม
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default RandomBotany
