

export interface Login  {
    email?: string,
    contraseña?: string,
    permanecerConectado?: boolean,
    isOpen?: boolean,
    onClose?: () => void
}