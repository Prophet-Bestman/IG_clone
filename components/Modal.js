import { Dialog, Transition } from "@headlessui/react";
import { CameraIcon, XCircleIcon } from "@heroicons/react/outline";
import React, { Fragment, useContext, useState, useRef } from "react";
import { PostModalContext } from "../providers/modals/postmodal.provider";
import { AuthContext } from "../providers/auth/auth.provider";
import { db, storage } from "../firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

const Modal = () => {
  const { isOpen, closeModal } = useContext(PostModalContext);
  const { user } = useContext(AuthContext);
  const captionRef = useRef(null);
  const [selectedFile, setSelctedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const filePickerRef = useRef(null);

  const addImgToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelctedFile(readerEvent.target.result);
    };
  };

  const uploadPost = async () => {
    if (loading) return;
    setLoading(true);

    const docRef = await addDoc(collection(db, "posts"), {
      username: user.email,
      caption: captionRef.current.value,
      timestamp: serverTimestamp(),
    });

    const imageRef = ref(storage, `posts/${docRef.id}/image`);
    await uploadString(imageRef, selectedFile, "data_url").then((snapshot) => {
      getDownloadURL(imageRef).then(async (url) => {
        await updateDoc(doc(db, "posts", docRef.id), {
          image: url,
        });
      });
    });

    setLoading(false);
    closeModal();
    setSelctedFile(null);
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-50 inset-0 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="flex items-end justify-center min-h-[800px] sm-min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-0 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>
                <div className="mt-3 text-center sm-mt-3">
                  {selectedFile ? (
                    <>
                      <XCircleIcon
                        className="h-6 mb-2
                       ml-auto text-red-500 cursor-pointer hover:scale-105 transform transition-all duration-150 ease-out"
                        onClick={() => setSelctedFile(null)}
                      />
                      <img src={selectedFile} className=" mb-4" />
                    </>
                  ) : (
                    <div
                      onClick={() => filePickerRef.current.click()}
                      className="mx-auto flex items-center justify-center h-12 w-12 bg-red-100 rounded-full cursor-pointer mb-1"
                    >
                      <CameraIcon className="h-6 mx-auto text-red-600" />
                    </div>
                  )}
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-900"
                  >
                    Upload a photo
                  </Dialog.Title>
                  <div>
                    <input
                      type="file"
                      ref={filePickerRef}
                      hidden
                      onChange={addImgToPost}
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    className="border-none focus:ring-0 w-full text-center"
                    placeholder="Please enter a caption"
                    ref={captionRef}
                  />
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 w-full sm:flex justify-center">
                  <button
                    type="button"
                    className="!w-full justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 active:scale-95 sm:ml-3 sm:w-auto sm:text-sm mx-0"
                    onClick={uploadPost}
                    disabled={loading}
                  >
                    {loading ? "Uploading..." : "Upload"}
                  </button>
                  {/* <button
                    type="button"
                    onClick={closeModal}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 active:scale-95 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button> */}
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
