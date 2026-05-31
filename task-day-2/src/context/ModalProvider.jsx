import { useState } from 'react'
import { ModalContext } from './modalContext'

export default function ModalProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false)
    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    const modalInfo = { isOpen, setIsOpen, openModal, closeModal }
    return (
        <ModalContext value={modalInfo}>
            {children}
        </ModalContext>
    )
}
