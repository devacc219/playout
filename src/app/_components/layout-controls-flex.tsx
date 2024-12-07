import { LayoutStateProps } from "@/types/layout";
import * as React from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

  
export default function LayoutControlsFlex({
    layout,
    setLayout
  }: LayoutStateProps){
    return (
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
    )
}