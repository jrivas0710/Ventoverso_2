

export interface Login  {
    email?: string,
    password?: string,
    permanecerConectado?: boolean,
    isOpen?: boolean,
  onClose?: () => void
}