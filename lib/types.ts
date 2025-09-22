export type Edge = 'bezier' | 'step' | undefined
export type Stroke = 'solid' | 'dashed' | undefined

export interface ConnectWithProps {
  color?: string
  edge?: Edge
  stroke?: Stroke
  id: string
}

export interface ConnectElement {
  connectWith?: ConnectWithProps[]
  id: string
  label?: string
}

export type ConnectElementsReducerPayload = ConnectElement & {
  type: 'add' | 'remove'
  element?: HTMLElement | null
}

export type ConnectElementsDispatch = React.Dispatch<ConnectElementsReducerPayload>

export type ConnectElementsContextValue = {
  elements: ConnectElement[]
  dispatch: ConnectElementsDispatch
}
