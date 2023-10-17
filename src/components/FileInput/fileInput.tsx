"use client";
import { useCallback, useState } from "react";
import { DropzoneRootProps, useDropzone } from "react-dropzone";

export const FileInput = () => {

    const [file, setFile] = useState<File | null>(null);
    const onDrop = useCallback((files: File[]) => {
        setFile(files[0]);
    }, []);

    // if (file) return null;

    const dropzone = useDropzone({
        onDrop,
        accept: {
            'application/image': [".png, .jpg, .jpeg, .svg "],
        }
    });

    return (
        <div {...dropzone.getRootProps({}) as DropzoneRootProps} className="w-[full] h-full rounded-[16px] border-dashed border-2 bg-fc-color-90 border-fc-color-80 hover:border-fc-color-100 transition-all ">
            <label htmlFor="dropzone-file" className="w-full h-full cursor-pointer">
                <div className="flex flex-col items-center justify-center pt-5 pb-6 w-full h-full">
                    <p className="mb-2 text-sm text-fc-color-100">
                        <span className="font-bold ">
                            + Adicionar uma foto
                        </span>
                        ou arraste até aqui
                    </p>
                    <p className="">
                        png
                    </p>
                </div>
            </label>
            <input className="hidden" />
        </div>
    )
}