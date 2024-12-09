import * as React from "react"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { LayoutChildStateProps } from "@/types/layout"

export default function LayoutChild({
    itemCount,
    setItemCount,
    itemSize,
    setItemSize,
    itemColor,
    setItemColor
  }: LayoutChildStateProps){
    return(
        <>
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
        </>
    )
  }