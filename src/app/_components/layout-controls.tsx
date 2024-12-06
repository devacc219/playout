import * as React from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { LayoutControls } from "@/types/layout"

interface LayoutControlsProps {
  layout: LayoutControls
  setLayout: React.Dispatch<React.SetStateAction<LayoutControls>>
  itemCount: number
  setItemCount: React.Dispatch<React.SetStateAction<number>>
  itemSize: { width: number; height: number }
  setItemSize: React.Dispatch<React.SetStateAction<{ width: number; height: number }>>
  itemColor: string
  setItemColor: React.Dispatch<React.SetStateAction<string>>
}

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
        {layout.display === "flex" && (
          <>
            <div className="space-y-2">
              <label className="text-sm font-medium">Direction</label>
              <Select
                value={layout.direction}
                onValueChange={(value: "row" | "column") =>
                  setLayout(prev => ({ ...prev, direction: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="row">Row</SelectItem>
                  <SelectItem value="column">Column</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Justify Content</label>
              <Select
                value={layout.justifyContent}
                onValueChange={(value: typeof layout.justifyContent) =>
                  setLayout(prev => ({ ...prev, justifyContent: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="flex-start">Start</SelectItem>
                  <SelectItem value="center">Center</SelectItem>
                  <SelectItem value="flex-end">End</SelectItem>
                  <SelectItem value="space-between">Space Between</SelectItem>
                  <SelectItem value="space-around">Space Around</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Align Items</label>
              <Select
                value={layout.alignItems}
                onValueChange={(value: typeof layout.alignItems) =>
                  setLayout(prev => ({ ...prev, alignItems: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="flex-start">Start</SelectItem>
                  <SelectItem value="center">Center</SelectItem>
                  <SelectItem value="flex-end">End</SelectItem>
                  <SelectItem value="stretch">Stretch</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Flex Wrap</label>
              <Select
                value={layout.flexWrap}
                onValueChange={(value: typeof layout.flexWrap) =>
                  setLayout(prev => ({ ...prev, flexWrap: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nowrap">No Wrap</SelectItem>
                  <SelectItem value="wrap">Wrap</SelectItem>
                  <SelectItem value="wrap-reverse">Wrap Reverse</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </>
        )}
        {layout.display === "grid" && (
          <>
            <div className="space-y-2">
              <label className="text-sm font-medium">Grid Columns</label>
              <Select
                value={layout.gridColumns.toString()}
                onValueChange={(value) =>
                  setLayout(prev => ({ ...prev, gridColumns: parseInt(value) }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2">2 Columns</SelectItem>
                  <SelectItem value="3">3 Columns</SelectItem>
                  <SelectItem value="4">4 Columns</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Grid Rows</label>
              <Select
                value={layout.gridRows.toString()}
                onValueChange={(value) =>
                  setLayout(prev => ({ ...prev, gridRows: parseInt(value) }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2">2 Rows</SelectItem>
                  <SelectItem value="3">3 Rows</SelectItem>
                  <SelectItem value="4">4 Rows</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </>
        )}
        <div className="space-y-2">
          <label className="text-sm font-medium">Gap ({layout.gap}px)</label>
          <Slider
            value={[layout.gap]}
            min={0}
            max={40}
            step={4}
            onValueChange={([value]) =>
              setLayout(prev => ({ ...prev, gap: value }))
            }
          />
        </div>
      </TabsContent>
      <TabsContent value="items" className="space-y-4">
        <div className="flex items-center space-x-2">
          <Switch id="auto-size" />
          <Label htmlFor="auto-size">Auto Size</Label>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Item Count</label>
          <Slider
            value={[itemCount]}
            min={1}
            max={12}
            step={1}
            onValueChange={([value]) => setItemCount(value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Width ({itemSize.width}px)</label>
          <Slider
            value={[itemSize.width]}
            min={50}
            max={300}
            step={10}
            onValueChange={([value]) => setItemSize(prev => ({ ...prev, width: value }))}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Height ({itemSize.height}px)</label>
          <Slider
            value={[itemSize.height]}
            min={50}
            max={300}
            step={10}
            onValueChange={([value]) => setItemSize(prev => ({ ...prev, height: value }))}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Color</label>
          <input
            type="color"
            value={itemColor}
            onChange={(e) => setItemColor(e.target.value)}
            className="w-full h-10 rounded-md"
          />
        </div>
      </TabsContent>
    </Tabs>
  )
}

