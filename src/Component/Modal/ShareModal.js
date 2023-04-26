import React from "react";
import { FaFacebook, FaTelegram, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
    EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from "react-share";
import MainModal from "./MainModal";

function ShareModal({ modalOpen, setModalOpen, course }) {
  const shareData = [
    {
      icon: FaFacebook,
      shareButton: FacebookShareButton,
    },
    {
      icon: FaTwitter,
      shareButton: TwitterShareButton,
    },
    {
      icon: FaTelegram,
      shareButton: TelegramShareButton,
    },

    {
      icon: MdEmail,
      shareButton: EmailShareButton,
    },
  ];
  const url = `${window.location.protocol}//${window.location.host}/course/${course.id}`;
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div
        className="inline-block 
      sm:w-4/5 border-border md:w-3/5 lg:w-2/5 
      w-full align-middle 
      p-10 overflow-y-auto h-full bg-main text-white rounded-2xl"
      >
        <h2 className="text-2xl">
          Chia sẻ <span className="text-xl font-bold">{course?.name}</span>{" "}
        </h2>

        <form className="flex-rows flex-wrap gap-6 mt-6">
          {shareData.map((item, index) => (
            <item.shareButton key={index} url={url} quote="">
              <div className="w-12 transitions hover:bg-subMain flex-colo text-lg h-12 bg-white rounded bg-opacity-30">
                <item.icon />
              </div>
            </item.shareButton>
          ))}
        </form>
      </div>
    </MainModal>
  );
}

export default ShareModal;
