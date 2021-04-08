export type Itype = 'success' | 'warning' | 'info' | 'error'
export interface IMessageOptions {
  id?: string,
  message?: string,
  type?: Itype,
  duration?: number,
  center?: boolean,
  onClose?: () => void
  offset?: number
}

export type IMessageParams = IMessageOptions | string