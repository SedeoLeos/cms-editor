import React, { createContext, useState, useContext } from 'react';

// Définir le contexte du Modal
interface ModalContextType {
    showModal: (content: React.ReactNode) => void;
    hideModal: (key: string) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
interface IModal {
    key: string,
    content: React.ReactNode
}

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [modals, setModals] = useState<IModal[]>([]);

    const showModal = (content: React.ReactNode) => {
        const key = Math.random().toString(36).substring(2, 9);
        setModals((prevModals) => [...prevModals, { key, content }]);
    };

    const hideModal = (key: string) => {
        setModals((prevModals) => prevModals.filter((modal) => modal.key !== key));
    };

    return (
        <ModalContext.Provider value={{ showModal, hideModal }}>
            {children}
            {modals.map(({content,key}, index) => (
                <div key={index} className="modal absolute bg-gray-800/10 top-0 bottom-0 left-0 right-0 z-20">
                    {React.cloneElement(content as React.ReactElement, { close: key })}
                </div>))}
        </ModalContext.Provider>
    );
};
