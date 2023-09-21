import React from "react";
import {closeModal} from "../store/reducers/WeatherSlice.ts";
import {useAppDispatch} from "../hooks/redux.ts";

interface ModalProps {
    children: React.ReactNode
    title: string
}

export function Modal({children, title}: ModalProps) {
    const dispatch = useAppDispatch();

    const handleClose = () => {
        dispatch(closeModal(false))
    };

    return (
        <>
            <div className="fixed bg-black/50 top-0 right-0 left-0 bottom-0"/>
            <div className={"w-[300px] md:w-[500px] p-5 rounded-2xl bg-white absolute top-10 left-1/2 -translate-x-1/2"}>
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
                    onClick={handleClose}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <h1 className="text-center pb-4 text-4xl">{title}</h1>
                {children}
            </div>
        </>
    )
}
