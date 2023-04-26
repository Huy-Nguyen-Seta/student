import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi";
import storage from "../FireBase/firebaseConfig";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import Loader from "./Notifications/Loader";
import { toast } from "react-hot-toast";

function UploadFiles({ acceptType, setSrcFiles, acceptText }) {
  const [loading, setLoading] = useState(false);

  const handleOnDrop = async (acceptedFiles) => {
    try {
      setLoading(true);
      const promise = [];
      for (var i = 0; i < acceptedFiles?.length; i++) {
        const file = acceptedFiles[i];
        const storageRef = ref(storage, `/files/${file.name}`);
        promise.push(
          uploadBytes(storageRef, file).then((uploadResult) => {
            return getDownloadURL(uploadResult.ref);
          })
        );
        const photos = await Promise.all(promise);
        await console.log(photos);
        await setSrcFiles(photos);
        toast.success("Tải files thành công !");
      }
    } catch (err) {
      console.log("err", err);
      toast.error("Tải files thất bại !");
      setLoading(false);
    }
    await setLoading(false);
  };
  const { getRootProps, getInputProps } = useDropzone({
    multiple: true,
    onDrop: handleOnDrop,
    accept: acceptType,
  });

  return (
    <div className="w-full text-center flex-colo gap-6">
      {loading ? (
        <div className="px-6 w-full py-8 border-2 border-border border-dashed bg-dry rounded-md ">
          <Loader />
        </div>
      ) : (
        <div
          {...getRootProps()}
          className="px-6 w-full py-8 border-2 border-border border-dashed bg-main rounded-md cursor-pointer"
        >
          <input {...getInputProps()} />
          <span className="mx-auto flex flex-colo text-subMain text-3xl">
            <FiUploadCloud />
          </span>
          <p className="text-sm mt-2">Tải file lên</p>
          <em className="text-xs text-border">
            ({acceptText || "Chỉ nhận định dạng .mp4 và .png"} )
          </em>
        </div>
      )}
    </div>
  );
}

export default UploadFiles;
