import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { BsCloudUpload } from "react-icons/bs";

interface SimpleImageModalProps {
  visible: boolean;
  onCancel: () => void;
  onSave: (data: any) => void;
}

const SimpleImageModal: React.FC<SimpleImageModalProps> = ({
  visible,
  onCancel,
  onSave,
}) => {
  const { t } = useTranslation();
  const [uploadedFile, setUploadedFile] = useState<any>(null);
  const [author, setAuthor] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle modal opening and closing with animation
  useEffect(() => {
    if (visible) {
      // Modal is opening
      setShouldRender(true);
      document.body.style.overflow = "hidden"; // Prevent background scrolling

      // Start fade-in animation
      setTimeout(() => {
        setIsAnimating(true);
      }, 10);

      // Add keyboard event listener for ESC key
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          handleCancel();
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      // Modal is closing - start fade-out animation
      setIsAnimating(false);

      // Wait for animation to complete before removing from DOM
      setTimeout(() => {
        setShouldRender(false);
        document.body.style.overflow = "unset"; // Restore scrolling
      }, 300); // Match the transition duration
    }
  }, [visible]);

  const handleSave = () => {
    if (!uploadedFile) {
      alert("Please upload an image");
      return;
    }

    onSave({
      file: uploadedFile,
      author,
    });

    // Reset form
    setUploadedFile(null);
    setAuthor("");
  };

  const handleCancel = () => {
    // Start fade-out animation
    setIsAnimating(false);

    // Wait for animation to complete before calling onCancel
    setTimeout(() => {
      // Reset form
      setUploadedFile(null);
      setAuthor("");
      onCancel();
    }, 300); // Match the transition duration
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        alert("You can only upload image files!");
        return;
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        alert("Image must be smaller than 2MB!");
        return;
      }
      setUploadedFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        alert("You can only upload image files!");
        return;
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        alert("Image must be smaller than 2MB!");
        return;
      }
      setUploadedFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCancel();
    }
  };

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 backdrop-blur-lg bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className={`bg-white rounded-lg shadow-lg w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto transition-all duration-300 transform ${
          isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* Modal Content */}
        <div className="px-6 py-6 space-y-6">
          {/* Header */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-2">
              {t("hotelOwner.addNewImageWeb")}
            </h2>
          </div>

          {/* Upload Image */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">
              {t("hotelOwner.uploadImage")}
            </h3>
            <div
              className="border border-black focus:outline-none hover:ring-2 hover:ring-emerald-500 hover:border-transparent rounded-lg p-3 text-center cursor-pointer transition-all duration-300"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onClick={() => fileInputRef.current?.click()}
            >
              {uploadedFile ? (
                <div className="flex items-center justify-center gap-3">
                  <div className="text-center flex justify-start gap-3">
                    <p className="text-green-600 font-medium !mb-0">
                      {uploadedFile.name}
                    </p>
                    <p className="text-sm text-black !mb-0">
                      {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <div className="text-center flex justify-start items-center gap-2">
                    <MdPhotoSizeSelectActual className="text-2xl text-black" />
                    <p className="text-black !mb-0">
                      {t("hotelOwner.dragOrPasteImage")}
                    </p>
                  </div>

                  <BsCloudUpload className="text-2xl text-black" />
                </div>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </div>

          {/* Copyright */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">
              {t("hotelOwner.copyright")}
            </h3>
            <p className="text-sm text-black mb-4">
              {t("hotelOwner.copyrightInstruction")}
            </p>
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                {t("hotelOwner.authorSourceOther")}
              </label>
              <textarea
                placeholder={t("hotelOwner.authorSourceOther")}
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                rows={3}
              />
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-white px-6 py-4 flex justify-end gap-3">
          <button
            onClick={handleCancel}
            className="px-8 py-3 !text-sm border border-gray-300 bg-white text-black hover:bg-gray-50 transition-colors"
          >
            {t("hotelOwner.cancel")}
          </button>
          <button
            onClick={handleSave}
            className="px-8 py-3 !text-sm bg-black !text-white hover:bg-gray-800 transition-colors"
          >
            {t("hotelOwner.saveImage")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleImageModal;
