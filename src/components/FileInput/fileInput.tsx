"use client";
import { CloseIcon } from "@/Icons/CloseIcon";
import { FileIcon } from "@/Icons/FileIcon";
import { UploadIcon } from "@/Icons/UploadIcon";
import { useCallback, useState } from "react";
import { DropzoneRootProps, DropzoneState, useDropzone } from "react-dropzone";

interface InputProps {
    dropzone: DropzoneState;
}

interface HasFileProps {
    file: File | null;
}

export const FileInput = () => {

    const [file, setFile] = useState<File | null>(null);
    const onDrop = useCallback((files: File[]) => {
        setFile(files[0]);
    }, []);


    const dropzone = useDropzone({
        onDrop,
        accept: {
            'image/*': [".png", ".jpg", ".jpeg", ".svg"],
        },
    });

    if (file) return <HasFile file={file} />;

    return <Input dropzone={dropzone} />;
}

const Input = ({ dropzone }: InputProps) => {

    const { getRootProps, getInputProps, isDragActive } = dropzone;
    return (
        <div {...getRootProps()} className={`w-[full] h-full rounded-[16px] border-dashed border-2 bg-fc-color-90 hover:border-fc-color-100 transition-all
        ${isDragActive ? 'border-fc-color-100' : 'border-fc-color-80'}`}>
            <label htmlFor="dropzone-file" className="w-full h-full cursor-pointer">
                <div className="flex flex-col items-center justify-center pt-5 pb-6 w-full h-full">
                    <UploadIcon
                        className={`w-10 h-10 mb-3 ${isDragActive ? 'text-fc-color-100' : 'text-fc-color-80'}`}
                    />
                    {isDragActive ? (
                        <p className="font-bold text-lg text-fc-color-100"> Solte para adicionar</p>
                    ) : (
                        <>
                            <p className="mb-2 text-sm text-fc-color-100">
                                <span className="font-bold ">
                                    + Adicionar uma foto
                                </span>
                                ou arraste até aqui
                            </p>
                            <p className="">
                                png
                            </p>
                        </>
                    )}

                </div>
            </label>
            <input {...getInputProps()} className="hidden" />
        </div>
    )
}

const HasFile = ({ file }: HasFileProps) => {
    return (
        <div className="w-1/2 h-hull ">
            <div>
                <FileIcon />
                <span> {file?.name}</span>
                <button>
                    <CloseIcon />
                </button>
            </div>
        </div>
    )
}