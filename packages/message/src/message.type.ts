type IType = 'success' | 'warning' | 'info' | 'error'
export interface IMessageOptions {
  id?: string,
  message?: string,
  type?: IType,
  duration?: number,
  center?: boolean,
  onClose?: () => void
  offse?: number
}

export type IMessageParams = IMessageOptions | string