import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import treeData from '@/public/data/tree-data.json'
import { Tree } from '@/types/tree'

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
      <div className="flex w-full flex-col items-center md:grid md:grid-cols-2 md:gap-5">
        {randomTreeData(amount).map((tree, index) => (
          <Card
            key={index}
            className="group relative my-2 flex w-full flex-col items-center justify-between rounded-2xl border p-5 transition-all duration-300 hover:bg-black/10"
          >
            <CardContent className="flex flex-col items-center">
              <Image
                src={tree.Image}
                alt={tree.Name}
                width={150}
                height={150}
                className="h-14 w-14 rounded-full"
              />
              <CardTitle>
                <h1 className="mt-5 text-center font-bold">{tree.Name}</h1>
              </CardTitle>
              <CardDescription className="text-center">
                <p className="mt-2 text-center">
                  {tree.Science_Name && tree.Science_Name !== '-' ? `${tree.Science_Name}` : ''}
                </p>
              </CardDescription>
            </CardContent>
            <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform items-center opacity-0 transition-all duration-500 group-hover:flex group-hover:opacity-100">
              <Button
                className="transform rounded-2xl bg-[#AD8B73] px-3 py-2 text-[#E3CAA5] transition-all duration-300 hover:bg-[#967E76] group-hover:scale-105"
                asChild
              >
                <Link href={`/trees?name=${tree.Name}`}>ดูเพิ่มเติม</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default RandomBotany
