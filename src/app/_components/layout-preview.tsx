import * as React from "react"
import { LayoutControls } from "@/types/layout"

// const presetLayouts = [
//   { name: "Fill Space", icon: <LayoutGrid className="h-4 w-4" /> },
//   { name: "Stretch Middle", icon: <AlignHorizontalJustifyCenter className="h-4 w-4" /> },
//   { name: "HTML5", icon: <Layout className="h-4 w-4" /> },
//   { name: "Alternating Grid", icon: <Grid className="h-4 w-4" /> },
//   { name: "Masonry Column", icon: <AlignVerticalJustifyCenter className="h-4 w-4" /> },
//   { name: "Masonry Row", icon: <AlignHorizontalJustifyCenter className="h-4 w-4" /> },
// ]

interface LayoutPreviewProps {
  layout: LayoutControls
  itemCount: number
  itemSize: { width: number; height: number }
  itemColor: string
}

export function LayoutPreview({ layout, itemCount, itemSize, itemColor }: LayoutPreviewProps) {
  return (
    <>
      {/* <div className="mb-4 flex flex-wrap gap-2">
        {presetLayouts.map((preset, index) => (
          <Button key={index} variant="outline" size="sm" className="flex items-center gap-2">
            {preset.icon}
            {preset.name}
          </Button>
        ))}
      </div> */}
      <div
        className="min-h-[400px] border rounded-lg p-4"
        style={{
          display: layout.display,
          ...(layout.display === "flex"
            ? {
                flexDirection: layout.direction,
                justifyContent: layout.justifyContent,
                alignItems: layout.alignItems,
                flexWrap: layout.flexWrap,
              }
            : {
                gridTemplateColumns: `repeat(${layout.gridColumns}, 1fr)`,
                gridTemplateRows: `repeat(${layout.gridRows}, 1fr)`,
              }),
          gap: layout.gap,
        }}
      >
        {Array.from({ length: itemCount }).map((_, i) => (
          <div
            key={i}
            className="rounded-lg flex items-center justify-center"
            style={{
              width: itemSize.width,
              height: itemSize.height,
              backgroundColor: itemColor,
            }}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </>
  )
}

