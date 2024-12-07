import * as React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LayoutControlsProps } from "@/types/layout"
import LayoutContainer from "./layout-container"
import LayoutChild from "./layout-child"

// export interface LayoutControlsProps {
//   layout: LayoutControls
//   setLayout: React.Dispatch<React.SetStateAction<LayoutControls>>
//   itemCount: number
//   setItemCount: React.Dispatch<React.SetStateAction<number>>
//   itemSize: { width: number; height: number }
//   setItemSize: React.Dispatch<React.SetStateAction<{ width: number; height: number }>>
//   itemColor: string
//   setItemColor: React.Dispatch<React.SetStateAction<string>>
// }

export function LayoutControlsFn({
  layout,
  setLayout,
  itemCount,
  setItemCount,
  itemSize,
  setItemSize,
  itemColor,
  setItemColor
}: LayoutControlsProps) {
  return (
    <Tabs defaultValue="container">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="container">Container</TabsTrigger>
        <TabsTrigger value="items">Items</TabsTrigger>
      </TabsList>

      <TabsContent value="container" className="space-y-4">
        <LayoutContainer layout={layout} setLayout={setLayout} />
      </TabsContent>

      <TabsContent value="items" className="space-y-4">
        <LayoutChild itemCount={itemCount} setItemCount={setItemCount} itemColor={itemColor} setItemColor={setItemColor} itemSize={itemSize} setItemSize={setItemSize} />
      </TabsContent>
    </Tabs>
  )
}

