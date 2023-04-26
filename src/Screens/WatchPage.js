import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import { BiArrowBack } from "react-icons/bi";
import { FaCloudDownloadAlt, FaHeart, FaPlay } from "react-icons/fa";
import Title from "../Component/Title";
import { HiDocumentDownload, HiDocumentText } from "react-icons/hi";
import { FaHandPointRight } from "react-icons/fa";
import ListLesson from "../Component/Single/ListLesson";
import { useDispatch, useSelector } from "react-redux";
import { getDetailsLessonAction } from "../Redux/Actions/lessonActions";
import { IfCourseLiked, likeCourse } from "../Context/Functionalties";

function WatchPage() {
  const [play, setPlay] = useState(false);
  const { id } = useParams();
  const { isLoading, isError, course } = useSelector(
    (state) => state.listLessonById
  );
  const dispatch = useDispatch();

  const { isLoading: likeLoading } = useSelector((state) => state.likeCourse);
  const { useInfo } = useSelector((state) => state.userLogin);

  const isLiked = IfCourseLiked(course);

  useEffect(() => {
    dispatch(getDetailsLessonAction(id));
  }, [dispatch, id]);

  const handleDowload = (link) => {
    console.log("go here");
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.href =
      "https://firebasestorage.googleapis.com/v0/b/share-2f46a.appspot.com/o/B%C3%A1o-c%C3%A1o-th%E1%BB%B1c-t%E1%BA%ADp-Nguy%E1%BB%85n-Quang-Huy.docx?alt=media&token=57331435-d9c6-446f-9b9e-206f285e0cc6";
    a.click();
  };

  return (
    <Layout>
      <div className="container mx-auto bg-dry p-6 mb-12">
        <div className="flex-btn flex-wrap mb-6 gap-2 bg-main rounded border border-gray-800 p-6">
          <Link
            to="/course/1"
            className="md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray"
          >
            <BiArrowBack />
            {"React js learn"}
          </Link>
          <div className="flex-btn sm:w-auto w-full gap-5">
            <button
              onClick={likeCourse(course, dispatch, useInfo)}
              disabled={likeLoading}
              className={`bg-white hover:text-subMain ${
                isLiked ? "text-subMain" : "text-white"
              }  transitions bg-opacity-30 text-white rounded px-4 py-3 text-sm`}
            >
              <FaHeart />
            </button>
            <button className="bg-subMain flex-rows gap-2 hover:text-main transitions text-white font-medium rounded px-8 py-3 text-sm">
              <FaCloudDownloadAlt /> Tải xuống
            </button>
          </div>
        </div>
        {play ? (
          <video autoPlay={play} controls className="w-full h-full rounded">
            <source
              type="video/mp4"
              title=""
              src="https://firebasestorage.googleapis.com/v0/b/share-2f46a.appspot.com/o/video.mp4?alt=media&token=c088ada5-5942-4600-89ee-7191d84c950a"
            />
          </video>
        ) : (
          <div className="w-full h-screen rounded overflow-hidden relative">
            <div className="absolute top-0 left-0 bottom-0 right-0 bg-main bg-opacity-30 flex-colo">
              <button
                onClick={() => setPlay(true)}
                className="bg-white  text-subMain flex-colo border border-subMain rounded-full w-20 h-20 font-medium text-xl"
              >
                <FaPlay />
              </button>
            </div>
            <img
              src="/react.png"
              alt="Bai Hoc"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        )}

        <div className="mt-6  bg-dry border border-gray-800 p-6">
          <Title title="Nội dung bài viết" Icon={HiDocumentText} />
          <p className="text-text text-lg leading-7 py-12 h-full">
            <span className="text-star inline-block mr-5">
              {<FaHandPointRight className="" />}
            </span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in
          </p>
        </div>
        <div className="mt-6  bg-dry border border-gray-800 p-6 ">
          <div className="mb-4">
            <Title title="Bài giảng" Icon={HiDocumentDownload} />
          </div>
          {[1, 2, 3, 4].map((item, i) => (
            <>
              <div key={i} className="py-3 cursor-pointer sm:text-sm text-sm ">
                <object
                  data="https://firebasestorage.googleapis.com/v0/b/share-2f46a.appspot.com/o/902974d8-f449-45d3-8e7f-cc6cce18dbc1.pdf?alt=media&token=d9701787-b130-4558-ae3c-e71a57d3f51a"
                  type="application/pdf"
                  className="h-pdf px-44 sm:px-10 md:px-14"
                  width="100%"
                >
                  <iframe
                    title="a"
                    src="https://firebasestorage.googleapis.com/v0/b/share-2f46a.appspot.com/o/902974d8-f449-45d3-8e7f-cc6cce18dbc1.pdf?alt=media&token=d9701787-b130-4558-ae3c-e71a57d3f51a"
                    width="100%"
                    height="100%"
                  >
                    <p>
                      Your browser does not support PDFs.
                      <a href="https://example.com/test.pdf">
                        Download the PDF
                      </a>
                    </p>
                  </iframe>
                </object>
              </div>
              <br />
            </>
          ))}
        </div>
        <div className="mt-6  bg-dry border border-gray-800 p-6">
          <div className="mb-4">
            <Title title="Tệp đính kèm" Icon={HiDocumentDownload} />
          </div>
          {[1, 2, 3, 4].map((item, i) => (
            <>
              <div
                key={i}
                className="py-3 cursor-pointer sm:text-sm text-sm"
                onClick={handleDowload}
              >
                {"+   "}
                <span className=" text-files underline">
                  https://tailwindcss.com/docs/text-decoration
                </span>
              </div>
              <br />
            </>
          ))}
        </div>
        <ListLesson />
      </div>
    </Layout>
  );
}

export default WatchPage;
