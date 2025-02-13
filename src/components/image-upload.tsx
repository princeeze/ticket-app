"use client";

import { useState, useCallback } from "react";
import { useFormContext } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import type { FormData } from "@/lib/schema";
import download from "@/assets/download.svg";
import Image from "next/image";

export function ImageUpload() {
  const [uploading, setUploading] = useState(false);
  const { setValue, watch } = useFormContext<FormData>();
  const profilePhotoUrl = watch("profilePhotoUrl");

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (!file) return;

      setUploading(true);

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "Ticket App");

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/de3ocpvv8/image/upload`,
          {
            method: "POST",
            body: formData,
          },
        );

        const data = await response.json();
        setValue("profilePhotoUrl", data.url);
      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
        setUploading(false);
      }
    },
    [setValue],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="relative flex items-center justify-center">
      <div
        {...getRootProps()}
        className={`z-10 flex h-52 w-52 cursor-pointer items-center justify-center overflow-clip rounded-3xl border-4 bg-[#0E464F] transition-colors hover:border-[#24A0B5] ${
          isDragActive ? "border-[#24A0B5]" : "border-[#24A0B5]/50"
        }`}
      >
        <input {...getInputProps()} />
        {profilePhotoUrl ? (
          <Image
            src={profilePhotoUrl}
            width={208}
            height={208}
            alt="Profile"
            className="h-full w-full"
          />
        ) : (
          <div className="text-center">
            <Image
              src={download}
              alt="Download Icon"
              className="mx-auto h-8 w-8 text-[#FAFAFA]"
            />
            <p className="mt-3 font-light text-[#FAFAFA]">
              {uploading
                ? "Uploading..."
                : isDragActive
                  ? "Drop"
                  : "Drag & drop or click to upload"}
            </p>
          </div>
        )}
      </div>
      <div className="absolute h-40 w-full bg-black/10"></div>
    </div>
  );
}
