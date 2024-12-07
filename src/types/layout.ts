export interface LayoutControls {
  display: "flex" | "grid"
  direction: "row" | "column"
  justifyContent: "flex-start" | "center" | "flex-end" | "space-between" | "space-around"
  alignItems: "flex-start" | "center" | "flex-end" | "stretch"
  flexWrap: "nowrap" | "wrap" | "wrap-reverse"
  gap: number
  gridColumns: number
  gridRows: number
}



export interface LayoutStateProps {
  layout: LayoutControls
  setLayout: React.Dispatch<React.SetStateAction<LayoutControls>>
}

export interface LayoutChildStateProps{
  itemCount: number
  setItemCount: React.Dispatch<React.SetStateAction<number>>
  itemSize: { width: number; height: number }
  setItemSize: React.Dispatch<React.SetStateAction<{ width: number; height: number }>>
  itemColor: string
  setItemColor: React.Dispatch<React.SetStateAction<string>>
}

export interface LayoutControlsProps extends LayoutStateProps,LayoutChildStateProps {
  
}
