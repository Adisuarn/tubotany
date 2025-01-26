"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import treeData from "../public/data/tree-data.json"
import Image from "next/image"
import { Tree } from "@/types/tree"
import { Building } from "@/types/buildings"
import { useSearchParams } from 'next/navigation'
import { cn } from "@/lib/utils"
import { useWindowDimensions } from "@/hooks/useWindowDimensions"

const trees: Tree[] = JSON.parse(JSON.stringify(treeData))

const generatePagination = (currentPage: number, totalPages: number) => {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages: (number | string)[] = [1];

  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);

  if (start > 2) {
    pages.push('...');
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (end < totalPages - 1) {
    pages.push('...');
  }

  pages.push(totalPages);
  return pages;
};

const TreeList = () => {

  const { width } = useWindowDimensions()
  const ITEMS_PER_PAGE = width > 768 ? 6 : 3
  
  const searchParams = useSearchParams()
  const name = searchParams.get('name')

  const [filter, setFilter] = useState<typeof Building | 'All' | undefined>()
  const [searchQuery, setSearchQuery] = useState(name || "")
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  const filteredTrees = trees
    .filter((tree) => {
      const locationMatch = !filter || filter === 'All' || tree.Building === filter
      const nameMatch = tree.Name.toLowerCase().includes(searchQuery.toLowerCase())
      return locationMatch && nameMatch
    })

  const totalPages = Math.ceil(filteredTrees.length / ITEMS_PER_PAGE)
  const pageStart = (currentPage - 1) * ITEMS_PER_PAGE
  const currentTrees = filteredTrees.slice(pageStart, pageStart + ITEMS_PER_PAGE)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mt-5 font-bold mb-6">พรรณไม้ในเตรียมอุดมศึกษา</h1>
      <div className="mb-4 w-full flex">
        <Select
          defaultValue="All"
          onValueChange={(value) => setFilter(value as typeof Building | 'All')}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem key="All" value="All">
              ทั้งหมด
            </SelectItem>
            {Object.values(Building).map((building) => (
              <SelectItem key={building} value={building}>
                {building}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          placeholder="ค้นหาต้นไม้"
          className="ml-4 placeholder:opacity-50"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentTrees.map((tree) => (
          <Card key={tree.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="w-[100px] h-[100px] relative">
                  <Image
                    key={tree.id}
                    src={tree.Image || "https://placehold.co/100x100/png"}
                    alt={tree.Name}
                    onLoad={() => setIsLoading(false)}
                    width={100}
                    height={100}
                    className={cn(
                      "rounded-full w-[100px] max-w-[100px] h-[100px] max-h-[100px] shadow-2xl",
                      isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-200",
                    )}
                  />
                </div>
                <div>
                  <CardTitle className="text-2xl">{tree.Name}</CardTitle>
                  <CardDescription className="text-lg">{tree.Science_Name}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              {tree.AKA && <p><strong>ชื่อท้องถิ่น :</strong> {String(tree.AKA)}</p>}
              <p><strong>สถานที่ :</strong> {String(tree.Building)}</p>
              <p className="mt-3">{tree.Description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                aria-disabled={currentPage === 1}
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>

            {generatePagination(currentPage, totalPages).map((page, i) => (
              <PaginationItem key={i}>
                {typeof page === 'number' ? (
                  <PaginationLink
                    onClick={() => setCurrentPage(page)}
                    isActive={currentPage === page}
                  >
                    {page}
                  </PaginationLink>
                ) : (
                  <span className="px-4 py-2">...</span>
                )}
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                aria-disabled={currentPage === totalPages}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

export default TreeList;
