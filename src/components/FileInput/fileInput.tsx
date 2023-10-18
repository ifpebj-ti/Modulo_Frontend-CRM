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
                <div className="flex flex-col items-center justify-center pt-5 pb-6 w-full h-full text-fc-color-100 transition-all">
                    {isDragActive ? (
                        <p className="font-bold text-md text-fc-color-100"> Solte para adicionar </p>
                    ) : (
                        <div className="flex items-center justify-center flex-col">
                            <p className="mb-2 text-sm ">
                                <span className="font-bold"> + Adicionar uma foto </span>
                                <span>ou arraste até aqui</span>
                            </p>
                            <p className="text-[10px]">
                                .png, .jpg, .jpeg, .svg
                            </p>
                        </div>
                    )}

                </div>
            </label>
            <input {...getInputProps()} className="hidden" />
        </div>
    )
}

const HasFile = ({ file }: HasFileProps) => {
    return (
        <div className="w-[full] h-full rounded-[16px] border-dashed border-2 bg-fc-color-90 hover:border-fc-color-100 transition-all flex flex-col items-center justify-center gap-2">
            <FileIcon className="stroke-fc-color-100 h-[25px]" />
            <div className=" flex items-center justify-center gap-1 ">
                <span className="text-sm text-fc-color-100"> {file?.name}</span>
                <button>
                    <CloseIcon className="stroke-fc-color-100" />
                </button>
            </div>
        </div>
    )
}