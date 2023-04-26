import React, { useState } from "react";
import Upload from "../../Component/Upload";
import { Input, Message, Select } from "../../Component/UserComment";
import SlideBar from "./SlideBar";
import { ImUpload } from "react-icons/im";
import UploadVideo from "../../Component/UploadVideo";
import UploadFiles from "../../Component/UploadFiles";
import { ImageReview } from "../../Component/ImageReview";
function AddLesson() {
  const [srcFilesPdf, setSrcFilesPdf] = useState([]);
  const [attachedFiles, setAttachedFiles] = useState([]);
  const [imgSrc, setImgSrc] = useState();
  const [video, setVideo] = useState("");

  console.log("srcFilesPDF", attachedFiles);
  console.log("srcFilesAtt", attachedFiles);
  console.log('video', video)

  return (
    <SlideBar>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Tạo mới bài viết</h2>
        {/* <div className="w-full grid md:grid-cols-2 gap-6">
          <Input
            label="Tên bài viết"
            placeholder="Nhập tên bài viết"
            type="text"
            bg={true}
          />
          <Input
            label="Tên bài viết"
            placeholder="Nhập tên bài viết"
            type="text"
            bg={true}
          />
        </div> */}
        <div className="w-full ">
          <Input
            label="Tên bài viết"
            placeholder="Nhập tên bài viết"
            type="text"
            bg={true}
          />

        </div>
        <div className="flex flex-col grid md:grid-cols-2 gap-6 w-full">
          <div>
          <p className="text-border font-semibold text-sm mb-2">Hình ảnh mô tả</p>
          <Upload setImageUrl={setImgSrc} />
          <ImageReview image={imgSrc} name={"Người dùng"} />
          </div>
          <div className="flex flex-col">
            <p className="text-border font-semibold text-sm mb-2">
              Thêm slide PDF file
            </p>
            <UploadFiles
              acceptText="Chỉ nhận định dạng pdf"
              acceptType={{ "application/pdf": [] }}
              setSrcFiles={setSrcFilesPdf}
            />
            {srcFilesPdf.map((item) => (
              <a
                href={item}
                target="_blank"
                rel="noreferrer"
                className="py-2 truncate underline cursor-pointer text-blue-600 hover:text-blue-100"
              >
                {item || "movielink.pdf"}
              </a>
            ))}
          </div>
        </div>
        <Message label="Nội dung" placeholder="Nhập nội dung khóa học" />
        <div className="text-sm w-full">
          <Select label="Chọn chủ đề bài viết" options={[]} />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <div>
          <label className="text-border font-semibold text-sm">
            Video cho bài viết
          </label>
          </div>
          <UploadVideo setLink={setVideo} acceptType="Chỉ nhận định dạng mp4" />
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
              Thêm tài liệu đính kèm
            </p>
            <UploadFiles
              acceptText={"Thả files đính kèm tại đây"}
              setSrcFiles={setAttachedFiles}
            />
            {attachedFiles.map((item) => (
              <a
                href={item}
                target="_blank"
                rel="noreferrer"
                className="py-2 truncate underline cursor-pointer text-blue-600 hover:text-blue-100"
              >
                {item || "movielink.pdf"}
              </a>
            ))}
          </div>
        </div>

        <button className="bg-subMain w-full flex-rows gap-6 font-medium text-white  py-4 rounded ">
          <ImUpload /> Đăng bài
        </button>
      </div>
    </SlideBar>
  );
}

export default AddLesson;
