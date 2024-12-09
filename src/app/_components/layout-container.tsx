import * as React from "react"
import { Slider } from "@/components/ui/slider"
import { LayoutStateProps } from "@/types/layout"
import LayoutControlsFlex from "./layout-controls-flex"
import LayoutControlsGrid from "./layout-controls-grid"

export default function LayoutContainer({
    layout,
    setLayout
  }: LayoutStateProps){
    return (
        <>
        {layout.display === "flex" && (
          <LayoutControlsFlex layout={layout} setLayout={setLayout} />
        )}
        {layout.display === "grid" && (
          <LayoutControlsGrid layout={layout} setLayout={setLayout}/>
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
        </>
    )
}