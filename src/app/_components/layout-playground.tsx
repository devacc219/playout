"use client"

import * as React from "react"
import { Copy, Grid, Layout } from 'lucide-react'
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LayoutControlsFn } from "./layout-controls"
import { LayoutPreview } from "./layout-preview"
import { LayoutControls as LayoutControlsType } from "@/types/layout"

export function AdvancedLayoutPlayground() {
  const [layout, setLayout] = React.useState<LayoutControlsType>({
    display: "flex",
    direction: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "nowrap",
    gap: 16,
    gridColumns: 3,
    gridRows: 2,
  })

  const [itemCount, setItemCount] = React.useState<number>(5)
  const [itemSize, setItemSize] = React.useState({ width: 100, height: 100 })
  const [itemColor, setItemColor] = React.useState("#f3f4f6")

  const [code, setCode] = React.useState<string>("")

  React.useEffect(() => {
    const cssCode = `
.container {
  display: ${layout.display};
  ${layout.display === "flex" ? `
  flex-direction: ${layout.direction};
  justify-content: ${layout.justifyContent};
  align-items: ${layout.alignItems};
  flex-wrap: ${layout.flexWrap};
  ` : `
  grid-template-columns: repeat(${layout.gridColumns}, 1fr);
  grid-template-rows: repeat(${layout.gridRows}, 1fr);
  `}
  gap: ${layout.gap}px;
}

.item {
  width: ${itemSize.width}px;
  height: ${itemSize.height}px;
  background-color: ${itemColor};
}`.trim()
    setCode(cssCode)
  }, [layout, itemSize, itemColor])

  const copyCode = () => {
    navigator.clipboard.writeText(code)
    toast.success("Code copied to clipboard")
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        {/* <h2 className="text-2xl font-bold">Advanced Layout Playground</h2> */}
        <div></div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setLayout(prev => ({ ...prev, display: "flex" }))}
          >
            <Layout className={`h-4 w-4 ${layout.display === "flex" ? "text-primary" : ""}`} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setLayout(prev => ({ ...prev, display: "grid" }))}
          >
            <Grid className={`h-4 w-4 ${layout.display === "grid" ? "text-primary" : ""}`} />
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[300px_1fr]">
        <Card className="p-4 space-y-4">
          <LayoutControlsFn
            layout={layout}
            setLayout={setLayout}
            itemCount={itemCount}
            setItemCount={setItemCount}
            itemSize={itemSize}
            setItemSize={setItemSize}
            itemColor={itemColor}
            setItemColor={setItemColor}
          />
        </Card>

        <Card className="p-4">
          <Tabs defaultValue="preview">
            <TabsList className="mb-4">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview">
              <LayoutPreview
                layout={layout}
                itemCount={itemCount}
                itemSize={itemSize}
                itemColor={itemColor}
              />
            </TabsContent>
            <TabsContent value="code">
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2"
                  onClick={copyCode}
                >
                  <Copy className="h-4 w-4" />
                </Button>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{code}</code>
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  )
}

