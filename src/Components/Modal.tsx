import * as React from "react";

// TODO: Pass Components we should provide props - there is reserved 
// field name - "children", title is dynamic, onClose closes modal view on click

interface ModalProps {
  children: React.ReactNode
  title: string
  onClose: () => void;
}

//TODO: Pass props "children" with type "ModalProps" to make possible Modal to keep other Components
export function Modal({ children, title, onClose }: ModalProps) {
  return (
    // "fragment" <> unites several <div>s
    <>
      <div className="fixed bg-black/50 top-0 right-0 bottom-0 left-0" onClick={onClose}/>

      <div className="w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2">
        <h1 className="text-2xl text-center mb-2">{ title}</h1>
        {children}
      </div>
    </>
  );
}
