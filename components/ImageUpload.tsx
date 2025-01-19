"use client";

import config from "@/lib/config";
import { IKImage, ImageKitProvider, IKUpload } from "imagekitio-next";
import { useRef } from "react";
import { useState } from "react";

const {
  env: {
    imagekit: { publicKey, privateKey, urlEndpoint },
  },
} = config;

const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);

    if (!response.ok) {
      const errorText = await response.text();

      throw new Error(
        `Request failed with status ${response.status}: ${errorText} `
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;

    return { token, signature, expire };
  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error.message} `);
  }
};

const ImageUpload = () => {
  const ikUploadRef = useRef(null);
  const [file, setFile] = useState<{ filepath: string } | null>(null);

  const onError = () => {};
  const onESuccess = () => {};

  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <IKUpload
        className="hidden"
        ref={ikUploadRef}
        onError={onError}
        onSuccess={onESuccess}
        fileName="test-upload.png"
      />

      <button className="upload-btn"></button>
    </ImageKitProvider>
  );
};

export default ImageUpload;
