import { cloneElement, use } from "react"
import { ModalContext } from "../context/modalContext"


export default function Modal({ children }) {

    return (
        <>{children}</>
    )
}


const OpenModal = ({ children }) => {
    const { openModal } = use(ModalContext)
    return (
        <div className="h-screen w-full grid items-center">
            <button onClick={openModal}>{children}</button>
        </div>
    )
}

const CloseModal = ({ children }) => {
    const { closeModal } = use(ModalContext)
    return (
        cloneElement(children, {
            onClick: closeModal
        })
    )
}

const ModalContent = ({ children }) => {
    const { isOpen, closeModal, } = use(ModalContext)
    if (!isOpen) return null
    return (
        <div className="modal-overlay">
            <div className="modal">
                <button onClick={closeModal} className="close-btn">X</button>
                <div>{children}</div>
            </div>
        </div>
    )
}

const ModalHeader = ({ children }) => {
    return (
        <div className="modal-header">{children}</div>
    )
}


const ModalBody = ({ children }) => {
    return (
        <div className="modal-body">{children}</div>
    )
}

const ModalFooter = ({ children }) => {
    return (
        <div className="modal-footer">{children}</div>
    )
}


Modal.Open = OpenModal
Modal.Close = CloseModal
Modal.Content = ModalContent
Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter

