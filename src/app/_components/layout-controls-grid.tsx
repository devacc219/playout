
import { LayoutStateProps } from "@/types/layout";
import * as React from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LayoutControlsGrid({
    layout,
    setLayout
  }: LayoutStateProps){
    return(
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
    )
}