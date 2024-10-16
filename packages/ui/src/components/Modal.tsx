import React from 'react';

export type ModalProps = {
  open: boolean;
  children: React.ReactNode;
  onSubmit?: () => void;
  onClose?: () => void;
};
export const Modal: React.FC<ModalProps> = ({
  open,
  children,
  onSubmit,
  onClose,
}) => {
  return (
    <div className={`modal ${open && 'modal--open'}`}>
      <div className="modal__container">
        <div className="modal__header">{children}</div>
      </div>
    </div>
  );
};
