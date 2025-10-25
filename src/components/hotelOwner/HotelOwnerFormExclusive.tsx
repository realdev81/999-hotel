import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import AddImageModal from "../ui/AddImageModal";
import SimpleImageModal from "../ui/SimpleImageModal";

import { MdPhotoSizeSelectActual } from "react-icons/md";
import { BsCloudUpload } from "react-icons/bs";

import { Upload, Image } from "antd";
import type { UploadProps, UploadFile } from "antd";
import { FaEye, FaTrash } from "react-icons/fa";

import { Role } from "../../interfaces/HotelView";
import { maxAboutSectionTextareaLength, maxHotelInfoHotelTextareaLength, minTextareaLength, hotelViewHighlightOptions } from "../../utils/Constants";

// @ts-ignore
import image1 from "../../assets/new/HotelOwnerForm/image1.png";
// @ts-ignore
import image2 from "../../assets/new/HotelOwnerForm/image2.png";
// @ts-ignore
import image3 from "../../assets/new/HotelOwnerForm/image3.png";

interface FormData {
  hotelName: string;
  name: string;
  emailAddress: string; 
  street: string;
  number: string;
  postalCode: string;
  city: string;
  country: string;
  phoneNumber: string;
  email: string;
  websiteUrl: string;
  bookingLink: string;  
  hornsteinRanking: boolean;
  fairJobHotel: boolean;
  fact1: string;
  fact2: string;
  fact3: string;
  fact4: string;
  fact5: string;
  aboutText: string;
  hotelInfoText: string;
  highlight1: boolean;
  highlight2: boolean;
  highlight3: boolean;
  highlight4: boolean;
  highlight5: boolean;
  highlight6: boolean;
  highlight7: boolean;
  highlight8: boolean;
  highlight9: boolean;
  highlight10: boolean;
  manageQuoteText: string;
  manageNameOrRole: string;
  managerName: string;
  quoteManagerRole: string;
  quoteOtherManagerRole: string;
  interviewManagerRole: string;
  interviewOtherManagerRole: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  answer5: string;
  addOtherHighlights: boolean;
  customHighlights: string[];
  imageCopyrightAgreed: boolean;
  plaketteChecked: boolean;
  plaketteWording: string;
  plaketteSize: string;
  flagChecked: boolean;
  flagFormat: string;
  flagAttachment: string;
}

const HotelOwnerFormExclusive = () => {
  const { t } = useTranslation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSimpleModalVisible, setIsSimpleModalVisible] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const [formData, setFormData] = useState<FormData>({
    hotelName: "",
    name: "",
    emailAddress: "",
    street: "",
    number: "",
    postalCode: "",
    city: "",
    country: "",
    phoneNumber: "",
    email: "",
    websiteUrl: "",
    bookingLink: "",
    hornsteinRanking: false,
    fairJobHotel: false,
    fact1: "",
    fact2: "",
    fact3: "",
    fact4: "",
    fact5: "",
    aboutText: "",
    hotelInfoText: "",
    highlight1: false,
    highlight2: false,
    highlight3: false,
    highlight4: false,
    highlight5: false,
    highlight6: false,
    highlight7: false,
    highlight8: false,
    highlight9: false,
    highlight10: false, 
    manageQuoteText: "",
    manageNameOrRole: "",
    managerName: "",
    quoteManagerRole: "",
    quoteOtherManagerRole: "",
    interviewManagerRole: "",
    interviewOtherManagerRole: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    answer5: "",
    addOtherHighlights: false,
    customHighlights: [],
    imageCopyrightAgreed: false,
    plaketteChecked: false,
    plaketteWording: "",
    plaketteSize: "25cm",
    flagChecked: false,
    flagFormat: "",
    flagAttachment: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.hotelName ||
      !formData.street ||
      !formData.number ||
      !formData.postalCode ||
      !formData.city ||
      !formData.country ||
      !formData.phoneNumber ||
      !formData.email
    ) {
      console.log("Please fill all required fields.");
      return;
    }
    console.log("Hotel Owner Form Data:", formData);
  };

  const handleModalOpen = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const handleModalSave = (data: any) => {
    console.log("Image data saved:", data);
    setIsModalVisible(false);
    // Here you can add the image data to your form state or handle it as needed
  };

  const handleSimpleModalOpen = () => {
    setIsSimpleModalVisible(true);
  };

  const handleSimpleModalClose = () => {
    setIsSimpleModalVisible(false);
  };

  const handleSimpleModalSave = (data: any) => {
    console.log("Simple image data saved:", data);
    setIsSimpleModalVisible(false);
    // Here you can add the image data to your form state or handle it as needed
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
      // Limit to only one file
      const limitedFileList = newFileList.slice(-1);
      setFileList(limitedFileList);
    };
  
  const getBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const handlePreview = async (file: UploadFile) => {
    console.log(file)
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as File);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleRemove = (fileToRemove) => {
    setFileList((prev) => prev.filter((file) => file.uid !== fileToRemove.uid));
  };

  const inputClass =
    "w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-emerald-500 transition-all duration-200 disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed";

  const textareaClass =
    "w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-emerald-500 transition-all duration-200 resize-none";

  return (
    <div className="h-[calc(100vh-66px)] w-full flex flex-col bg-white overflow-y-auto">
      <div className="flex-1 sm:p-8 p-4">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Hotel Name */}
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-black">
                {t("hotelOwner.hotelName")}
              </h2>
              <input
                name="hotelName"
                value={formData.hotelName}
                onChange={handleInputChange}
                className={inputClass}
                required
              />
            </div>

            {/* Administrative Hotel Contact Information */}
            <div className="space-y-4"> 
              <h2 className="text-lg font-semibold text-black">
                {t("hotelOwner.administrativeHotelContactInformation")}
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    {t("hotelOwner.name")}
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={inputClass}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    {t("hotelOwner.emailAddress")}
                  </label>
                  <input
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                    className={inputClass}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Hotel Address */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-black">
                {t("hotelOwner.hotelAddress")}
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    {t("hotelOwner.street")}
                  </label>
                  <input
                    name="street"
                    value={formData.street}
                    onChange={handleInputChange}
                    className={inputClass}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    {t("hotelOwner.number")}
                  </label>
                  <input
                    name="number"
                    value={formData.number}
                    onChange={handleInputChange}
                    className={inputClass}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    {t("hotelOwner.postalCode")}
                  </label>
                  <input
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className={inputClass}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    {t("hotelOwner.city")}
                  </label>
                  <input
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={inputClass}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    {t("hotelOwner.country")}
                  </label>
                  <input
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className={inputClass}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Hotel Contact Information */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-black">
                {t("hotelOwner.hotelContactInformation")}
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    {t("hotelOwner.phoneNumber")}
                  </label>
                  <input
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className={inputClass}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    {t("hotelOwner.email")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={inputClass}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    {t("hotelOwner.websiteUrl")}
                  </label>
                  <input
                    type="url"
                    name="websiteUrl"
                    value={formData.websiteUrl}
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            {/* Hotel Booking Link */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-black">
                {t("hotelOwner.hotelBookingLink")}
              </h2>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  {t("hotelOwner.buttonLink")}
                </label>
                <input
                  name="bookingLink"
                  value={formData.bookingLink}
                  onChange={handleInputChange}
                  className={inputClass}
                />
              </div>
            </div>

            {/* About section */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-black">
                {t("hotelOwner.aboutSection")}
              </h2> 

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  {t("hotelOwner.aboutText")}
                </label>
                <div className="relative">
                  <textarea
                    name="aboutText"
                    value={formData.aboutText}
                    onChange={handleInputChange}
                    rows={5}
                    minLength={minTextareaLength}
                    maxLength={maxAboutSectionTextareaLength}
                    className={textareaClass}
                  />
                  <div className="absolute bottom-2 right-2 text-xs text-gray-600">
                    {t("hotelOwner.maxCharacters", { count: maxAboutSectionTextareaLength })}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional honors */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-black">
                {t("hotelOwner.additionalHonors")}
              </h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="hornsteinRanking"
                    name="hornsteinRanking"
                    checked={formData.hornsteinRanking}
                    onChange={handleInputChange}
                    className="h-5 w-5 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded cursor-pointer"
                  />
                  <label 
                    htmlFor="hornsteinRanking"
                    className="ml-3 text-sm font-medium text-black cursor-pointer">
                    {t("hotelOwner.hornsteinRanking")}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="fairJobHotel"
                    name="fairJobHotel"
                    checked={formData.fairJobHotel}
                    onChange={handleInputChange}
                    className="h-5 w-5 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded cursor-pointer"
                  />
                  <label 
                    htmlFor="fairJobHotel"
                    className="ml-3 text-sm font-medium text-black cursor-pointer">
                    {t("hotelOwner.fairJobHotel")}
                  </label>
                </div>
              </div>
            </div>
  
            {/* 5 Facts */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-black">
                {t("hotelOwner.fiveFacts")}
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    {t("hotelOwner.fact1")}
                  </label>
                  <div className="relative">
                    <textarea
                      name="fact1"
                      value={formData.fact1}
                      onChange={handleInputChange}
                      rows={3}
                      minLength={75}
                      maxLength={150}
                      className={textareaClass}
                    />
                    <div className="absolute bottom-2 right-2 text-xs text-gray-600">
                      {t("hotelOwner.maxCharacters", { count: 150 })}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    {t("hotelOwner.fact1Example")}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    {t("hotelOwner.fact2")}
                  </label>
                  <div className="relative">
                    <textarea
                      name="fact2"
                      value={formData.fact2}
                      onChange={handleInputChange}
                      rows={3}
                      minLength={75}
                      maxLength={150}
                      className={textareaClass}
                    />
                    <div className="absolute bottom-2 right-2 text-xs text-gray-600">
                      {t("hotelOwner.maxCharacters", { count: 150 })}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    {t("hotelOwner.fact2Example")}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    {t("hotelOwner.fact3")}
                  </label>
                  <div className="relative">
                    <textarea
                      name="fact3"
                      value={formData.fact3}
                      onChange={handleInputChange}
                      rows={3}
                      minLength={75}
                      maxLength={150}
                      className={textareaClass}
                    />
                    <div className="absolute bottom-2 right-2 text-xs text-gray-600">
                      {t("hotelOwner.maxCharacters", { count: 150 })}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    {t("hotelOwner.fact3Example")}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    {t("hotelOwner.fact4")}
                  </label>
                  <div className="relative">
                    <textarea
                      name="fact4"
                      value={formData.fact4}
                      onChange={handleInputChange}
                      rows={3}
                      minLength={75}
                      maxLength={150}
                      className={textareaClass}
                    />
                    <div className="absolute bottom-2 right-2 text-xs text-gray-600">
                      {t("hotelOwner.maxCharacters", { count: 150 })}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    {t("hotelOwner.fact4Example")}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    {t("hotelOwner.fact5")}
                  </label>
                  <div className="relative">
                    <textarea
                      name="fact5"
                      value={formData.fact5}
                      onChange={handleInputChange}
                      rows={3}
                      minLength={75}
                      maxLength={150}
                      className={textareaClass}
                    />
                    <div className="absolute bottom-2 right-2 text-xs text-gray-600">
                      {t("hotelOwner.maxCharacters", { count: 150 })}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    {t("hotelOwner.fact5Example")}
                  </p>
                </div>
              </div>
            </div>

            {/* Hotel Info Section */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-black">
                {t("hotelOwner.hotelInfoSection")}
              </h2> 

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  {t("hotelOwner.hotelInfoText")}
                </label>
                <div className="relative">
                  <textarea
                    name="hotelInfoText"
                    value={formData.hotelInfoText}
                    onChange={handleInputChange}
                    rows={5}
                    minLength={minTextareaLength}
                    maxLength={maxHotelInfoHotelTextareaLength}
                    className={textareaClass}
                  />
                  <div className="absolute bottom-2 right-2 text-xs text-gray-600">
                    {t("hotelOwner.maxCharacters", { count: maxHotelInfoHotelTextareaLength })}
                  </div>
                </div>
              </div>
            </div>

            {/* Hotel Highlights Section */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-black">
                {t("hotelOwner.hotelHighlightsSection")}
              </h2>

              {/* Pre-defined Highlights */}
              <div className="space-y-4">
                {hotelViewHighlightOptions.map((option, index)  => (
                  <div key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      id={option}
                      name={option}
                      checked={formData[option as keyof typeof formData]}
                      onChange={handleInputChange}
                      className="h-5 w-5 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded cursor-pointer"
                    />
                    <label htmlFor={option} className={`ml-3 border ${formData[option] ? "border-black" : "border-[#777777]"} focus:outline-none rounded-lg p-3 w-full text-center cursor-pointer transition-all duration-300`}>
                      <div className="flex items-center justify-between">
                        <div className="text-center flex justify-start items-center gap-3">
                          <MdPhotoSizeSelectActual className={`text-xl ${formData[option]  ? "text-black" : "text-[#777777]"}`} />
                          <p className={`${formData[option] ? "text-black" : "text-[#777777]"} !mb-0 text-md`}>
                            {t(`hotelOwner.${option}`)}
                          </p>
                        </div>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Manager Quote Section */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-black">
                {t("hotelOwner.manageQuote")}
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    {t("hotelOwner.manageQuoteText")}
                  </label>

                  <div className="relative">
                    <textarea
                      name="manageQuoteText"
                      value={formData.manageQuoteText}
                      onChange={handleInputChange}
                      rows={5}
                      minLength={75}
                      maxLength={150}
                      className={textareaClass}
                    />
                    <div className="absolute bottom-2 right-2 text-xs text-gray-600">
                      {t("hotelOwner.maxCharacters", { count: 150 })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      {t("hotelOwner.name")}
                    </label>
                    <input
                      name="manageNameOrRole"
                      value={formData.manageNameOrRole}
                      onChange={handleInputChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-medium text-black mb-2">
                    {t("hotelOwner.role")}
                  </label>

                  {Object.values(Role).map(role => (
                    <div key={role} className="flex items-center">
                      <input
                        type="radio"
                        id={`quote-${role}`}
                        name="quoteManagerRole"
                        value={role}
                        checked={formData.quoteManagerRole === role}
                        onChange={handleInputChange}
                        className="h-5 w-5 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded cursor-pointer"
                      />
                      <label
                        htmlFor={`quote-${role}`}
                        className="ml-3 text-sm font-medium text-black cursor-pointer"
                      >
                        {t(`hotelOwner.${role}`)}
                      </label>
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    {t("hotelOwner.pleaseEnter")}
                  </label>
                  <input
                    name="quoteOtherManagerRole"
                    value={formData.quoteOtherManagerRole}
                    onChange={handleInputChange}
                    className={inputClass}
                    disabled={formData.quoteManagerRole !== Role.OTHERROLE}
                  />
                </div>
              </div>
            </div>

            {/* Interview with Manager / Owner Section */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-black">
                {t("hotelOwner.generalManagerOwner")}
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    {t("hotelOwner.name")}
                  </label>
                  <input
                    name="managerName"
                    value={formData.managerName}
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-medium text-black mb-2">
                    {t("hotelOwner.role")}
                  </label>

                  {Object.values(Role).map(role => (
                    <div key={role} className="flex items-center">
                      <input
                        type="radio"
                        id={`interview-${role}`}
                        name="interviewManagerRole"
                        value={role}
                        checked={formData.interviewManagerRole === role}
                        onChange={handleInputChange}
                        className="h-5 w-5 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded cursor-pointer"
                      />
                      <label
                        htmlFor={`interview-${role}`}
                        className="ml-3 text-sm font-medium text-black cursor-pointer"
                      >
                        {t(`hotelOwner.${role}`)}
                      </label>
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    {t("hotelOwner.pleaseEnter")}
                  </label>
                  <input
                    name="interviewOtherManagerRole"
                    value={formData.interviewOtherManagerRole}
                    onChange={handleInputChange}
                    className={inputClass}
                    disabled={formData.interviewManagerRole !== Role.OTHERROLE}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    {t("hotelOwner.question1")}
                  </label>

                  <div className="relative">
                    <textarea
                      name="answer1"
                      value={formData.answer1}
                      onChange={handleInputChange}
                      rows={5}
                      minLength={75}
                      maxLength={150}
                      className={textareaClass}
                    />
                    <div className="absolute bottom-2 right-2 text-xs text-gray-600">
                      {t("hotelOwner.maxCharacters", { count: 150 })}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    {t("hotelOwner.question2")}
                  </label>

                  <div className="relative">
                    <textarea
                      name="answer2"
                      value={formData.answer2}
                      onChange={handleInputChange}
                      rows={5}
                      minLength={75}
                      maxLength={150}
                      className={textareaClass}
                    />
                    <div className="absolute bottom-2 right-2 text-xs text-gray-600">
                      {t("hotelOwner.maxCharacters", { count: 150 })}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    {t("hotelOwner.question3")}
                  </label>

                  <div className="relative">
                    <textarea
                      name="answer3"
                      value={formData.answer3}
                      onChange={handleInputChange}
                      rows={5}
                      minLength={75}
                      maxLength={150}
                      className={textareaClass}
                    />
                    <div className="absolute bottom-2 right-2 text-xs text-gray-600">
                      {t("hotelOwner.maxCharacters", { count: 150 })}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    {t("hotelOwner.question4")}
                  </label>

                  <div className="relative">
                    <textarea
                      name="answer4"
                      value={formData.answer4}
                      onChange={handleInputChange}
                      rows={5}
                      minLength={75}
                      maxLength={150}
                      className={textareaClass}
                    />
                    <div className="absolute bottom-2 right-2 text-xs text-gray-600">
                      {t("hotelOwner.maxCharacters", { count: 150 })}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    {t("hotelOwner.question5")}
                  </label>

                  <div className="relative">
                    <textarea
                      name="answer5"
                      value={formData.answer5}
                      onChange={handleInputChange}
                      rows={5}
                      minLength={75}
                      maxLength={150}
                      className={textareaClass}
                    />
                    <div className="absolute bottom-2 right-2 text-xs text-gray-600">
                      {t("hotelOwner.maxCharacters", { count: 150 })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hotel Images Section */}
            <div className="space-y-8">
              <h2 className="text-lg font-semibold text-black">
                {t("hotelOwner.images")}
              </h2>

              {/* Book Images Section */}
              <div className="space-y-4">
                <h2 className="text-base font-semibold text-black">
                  {t("hotelOwner.bookImage")}
                </h2>

                <div className="space-y-3">
                  <p className="text-sm text-black">
                    {t("hotelOwner.exlBookHotelImageDescription")}
                  </p>

                  {/* Book Hotel Images Section */}
                  <div className="border border-gray-300 rounded-lg p-4 bg-[#FFFAFA]">
                    <h3 className="text-md font-medium text-black mb-3">
                      {t("hotelOwner.hotelImages")}
                    </h3>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-start gap-3">
                        <div className="w-[95px] sm:w-[130px] flex justify-end">
                          <span className="font-bold text-right w-[95px] sm:w-[130px]">
                            {t("hotelOwner.numberOfImages")}:
                          </span>
                        </div>
                        <span className="text-left">
                          {t("hotelOwner.exlBookHotelNumberOfImagesValue")}
                        </span>
                      </div>
                      <div className="flex justify-start gap-3">
                        <div className="w-[95px] sm:w-[130px] flex justify-end">
                          <span className="font-bold text-right w-[95px] sm:w-[130px]">
                            {t("hotelOwner.format")}:
                          </span>
                        </div>
                        <span className="text-left" style={{ whiteSpace: "pre-line" }}>
                          {t("hotelOwner.preBookHotelFormatValue")}
                        </span>
                      </div>
                      <div className="flex justify-start gap-3">
                        <div className="w-[95px] sm:w-[130px] flex justify-end">
                          <span className="font-bold text-right w-[95px] sm:w-[130px]">
                            {t("hotelOwner.colorMode")}:
                          </span>
                        </div>
                        <span className="text-left">
                          {t("hotelOwner.colorModeValue")}
                        </span>
                      </div>
                      <div className="flex justify-start gap-3">
                        <div className="w-[95px] sm:w-[130px] flex justify-end">
                          <span className="font-bold text-right w-[95px] sm:w-[130px]">
                            {t("hotelOwner.resolution")}:
                          </span>
                        </div>
                        <span className="text-left">
                          {t("hotelOwner.resolutionValue")}
                        </span>
                      </div>
                      <div className="flex justify-start gap-3">
                        <div className="w-[95px] sm:w-[130px] flex justify-end">
                          <span className="font-bold text-right w-[95px] sm:w-[130px]">
                            {t("hotelOwner.fileFormat")}:
                          </span>
                        </div>
                        <span className="text-left">
                          {t("hotelOwner.fileFormatValue")}
                        </span>
                      </div>
                    </div>
                  </div>

                    {/* Book Manager Images Section */}
                  <div className="border border-gray-300 rounded-lg p-4 bg-[#FFFAFA]">
                    <h3 className="text-md font-medium text-black mb-3">
                      {t("hotelOwner.generalManagerImage")}
                    </h3>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-start gap-3">
                        <div className="w-[95px] sm:w-[130px] flex justify-end">
                          <span className="font-bold text-right w-[95px] sm:w-[130px]">
                            {t("hotelOwner.numberOfImages")}:
                          </span>
                        </div>
                        <span className="text-left">
                          1
                        </span>
                      </div>
                      <div className="flex justify-start gap-3">
                        <div className="w-[95px] sm:w-[130px] flex justify-end">
                          <span className="font-bold text-right w-[95px] sm:w-[130px]">
                            {t("hotelOwner.format")}:
                          </span>
                        </div>
                        <span className="text-left">
                          {t("hotelOwner.preBookManagerImageFormatValue")}
                        </span>
                      </div>
                      <div className="flex justify-start gap-3">
                        <div className="w-[95px] sm:w-[130px] flex justify-end">
                          <span className="font-bold text-right w-[95px] sm:w-[130px]">
                            {t("hotelOwner.colorMode")}:
                          </span>
                        </div>
                        <span className="text-left">
                          {t("hotelOwner.preBookManagerImageColorModeValue")}
                        </span>
                      </div>
                      <div className="flex justify-start gap-3">
                        <div className="w-[95px] sm:w-[130px] flex justify-end">
                          <span className="font-bold text-right w-[95px] sm:w-[130px]">
                            {t("hotelOwner.resolution")}:
                          </span>
                        </div>
                        <span className="text-left">
                          {t("hotelOwner.resolutionValue")}
                        </span>
                      </div>
                      <div className="flex justify-start gap-3">
                        <div className="w-[95px] sm:w-[130px] flex justify-end">
                          <span className="font-bold text-right w-[95px] sm:w-[130px]">
                            {t("hotelOwner.fileFormat")}:
                          </span>
                        </div>
                        <span className="text-left">
                          {t("hotelOwner.fileFormatValue")}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <button
                      type="button"
                      className="w-full px-4 py-4 rounded-lg text-sm font-medium transition-colors border-2"
                      style={{
                        backgroundColor: "#FFFFFF",
                        color: "#777777",
                        borderColor: "#000000",
                      }}
                    >
                      {t("hotelOwner.noImages")}
                    </button>

                    <button
                      type="button"
                      onClick={handleModalOpen}
                      className="w-full px-4 py-4 cursor-pointer rounded-lg text-sm font-medium transition-colors"
                      style={{
                        backgroundColor: "#DEDEDE",
                        color: "#777777",
                      }}
                    >
                      + {t("hotelOwner.addImage")}
                    </button>
                  </div>
                </div>
              </div>

              {/* Website Images Section */}
              <div className="space-y-4">
                <h2 className="text-base font-semibold text-black">
                  {t("hotelOwner.websiteImage")}
                </h2>

                <div className="space-y-3">
                  <p className="text-sm text-black">
                    {t("hotelOwner.preWebsiteImagesDescription")}
                  </p>

                  {/* Website Hotel Images Section */}
                  <div className="border border-gray-300 rounded-lg p-4 bg-[#FFFAFA]">
                    <h3 className="text-md font-medium text-black mb-3">
                      {t("hotelOwner.hotelImages")}
                    </h3>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-start gap-3">
                        <div className="w-[95px] sm:w-[130px] flex justify-end">
                          <span className="font-bold text-right w-[95px] sm:w-[130px]">
                            {t("hotelOwner.numberOfImages")}:
                          </span>
                        </div>
                        <span className="text-left">
                          {t("hotelOwner.exlWebsiteHotelNumberOfImagesValue")}
                        </span>
                      </div>
                      <div className="flex justify-start gap-3">
                        <div className="w-[95px] sm:w-[130px] flex justify-end">
                          <span className="font-bold text-right w-[95px] sm:w-[130px]">
                            {t("hotelOwner.format")}:
                          </span>
                        </div>
                        <span className="text-left">
                          {t("hotelOwner.preWebsiteHotelFormatValue")}
                        </span>
                      </div>
                      <div className="flex justify-start gap-3">
                        <div className="w-[95px] sm:w-[130px] flex justify-end">
                          <span className="font-bold text-right w-[95px] sm:w-[130px]">
                            {t("hotelOwner.colorMode")}:
                          </span>
                        </div>
                        <span className="text-left">
                          {t("hotelOwner.preWebsiteHotelColorModeValue")}
                        </span>
                      </div>
                      <div className="flex justify-start gap-3">
                        <div className="w-[95px] sm:w-[130px] flex justify-end">
                          <span className="font-bold text-right w-[95px] sm:w-[130px]">
                            {t("hotelOwner.resolution")}:
                          </span>
                        </div>
                        <span className="text-left">
                          {t("hotelOwner.preImageResolutionValue")}
                        </span>
                      </div>
                      <div className="flex justify-start gap-3">
                        <div className="w-[95px] sm:w-[130px] flex justify-end">
                          <span className="font-bold text-right w-[95px] sm:w-[130px]">
                            {t("hotelOwner.fileFormat")}:
                          </span>
                        </div>
                        <span className="text-left">
                          {t("hotelOwner.preImageFileFormatValue")}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Website Manager Images Section */}
                  <div className="border border-gray-300 rounded-lg p-4 bg-[#FFFAFA]">
                    <h3 className="text-md font-medium text-black mb-3">
                      {t("hotelOwner.generalManagerImage")}
                    </h3>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-start gap-3">
                        <div className="w-[95px] sm:w-[130px] flex justify-end">
                          <span className="font-bold text-right w-[95px] sm:w-[130px]">
                            {t("hotelOwner.numberOfImages")}:
                          </span>
                        </div>
                        <span className="text-left">
                          1
                        </span>
                      </div>
                      <div className="flex justify-start gap-3">
                        <div className="w-[95px] sm:w-[130px] flex justify-end">
                          <span className="font-bold text-right w-[95px] sm:w-[130px]">
                            {t("hotelOwner.format")}:
                          </span>
                        </div>
                        <span className="text-left">
                          {t("hotelOwner.preWebsiteManagerFormatValue")}
                        </span>
                      </div>
                      <div className="flex justify-start gap-3">
                        <div className="w-[95px] sm:w-[130px] flex justify-end">
                          <span className="font-bold text-right w-[95px] sm:w-[130px]">
                            {t("hotelOwner.colorMode")}:
                          </span>
                        </div>
                        <span className="text-left">
                          {t("hotelOwner.preWebsiteManagerColorModeValue")}
                        </span>
                      </div>
                      <div className="flex justify-start gap-3">
                        <div className="w-[95px] sm:w-[130px] flex justify-end">
                          <span className="font-bold text-right w-[95px] sm:w-[130px]">
                            {t("hotelOwner.resolution")}:
                          </span>
                        </div>
                        <span className="text-left">
                          {t("hotelOwner.preImageResolutionValue")}
                        </span>
                      </div>
                      <div className="flex justify-start gap-3">
                        <div className="w-[95px] sm:w-[130px] flex justify-end">
                          <span className="font-bold text-right w-[95px] sm:w-[130px]">
                            {t("hotelOwner.fileFormat")}:
                          </span>
                        </div>
                        <span className="text-left">
                          {t("hotelOwner.preImageFileFormatValue")}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <button
                      type="button"
                      className="w-full px-4 py-4 rounded-lg text-sm font-medium transition-colors border-2"
                      style={{
                        backgroundColor: "#FFFFFF",
                        color: "#777777",
                        borderColor: "#000000",
                      }}
                    >
                      {t("hotelOwner.noImages")}
                    </button>

                    <button
                      type="button"
                      onClick={handleSimpleModalOpen}
                      className="w-full px-4 py-4 rounded-lg text-sm font-medium transition-colors"
                      style={{
                        backgroundColor: "#DEDEDE",
                        color: "#777777",
                      }}
                    >
                      + {t("hotelOwner.addImage")}
                    </button>
                  </div>
                </div>
              </div>

              {/* Image Copyright Section */}
              <div className="space-y-4">
                <h2 className="text-base font-semibold text-black">
                  {t("hotelOwner.imageCopyright")}
                </h2>

                <div className="space-y-3">
                  <p className="text-sm text-black">
                    {t("hotelOwner.copyrightNotice")}
                  </p>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="imageCopyrightAgreed"
                      name="imageCopyrightAgreed"
                      checked={formData.imageCopyrightAgreed}
                      onChange={handleInputChange}
                      className="h-5 w-5 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded mt-1"
                    />
                    <label
                      htmlFor="imageCopyrightAgreed"
                      className="text-sm text-black cursor-pointer"
                    >
                      {t("hotelOwner.copyrightAgreement")}
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Photo Customization Section */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-black">
                {t("hotelOwner.photoCustomization")}
              </h2>

              <div className="space-y-4">
                <div className="p-3 border-[#aaaaaa] border space-y-4">
                  <label className="block text-sm font-bold text-black mb-2">
                    {t("hotelOwner.sendCoverPhoto")}
                  </label>

                  {fileList.length === 0 ? (
                    <div className="flex flex-col justify-center items-center w-full h-50 sm:h-80 border-2 border-dashed border-gray-300 rounded-md">
                      <p className="!mb-0 text-sm sm:text-2xl text-gray-500">No images</p>
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-3 mt-5">
                      
                      {fileList.map((file, index) => {
                        const src = file.url || (file.originFileObj ? URL.createObjectURL(file.originFileObj) : "");
                        return (
                          <div
                            key={file.uid || index}
                            className="relative w-full h-auto rounded-md border border-gray-300 overflow-hidden group"
                          >
                            <img src={src} alt={file.name} className="w-full h-full object-cover" />

                            {/* Hover overlay with preview & delete */}
                            <div 
                              className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center gap-6 transition-opacity duration-300 ease-in-out"
                              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}  
                            >
                              <FaEye
                                onClick={() => handlePreview(file)}
                                className="text-white text-2xl cursor-pointer hover:scale-110 transition-transform"
                              />
                              <FaTrash
                                onClick={() => handleRemove(file)}
                                className="text-white text-2xl cursor-pointer hover:scale-110 transition-transform"
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  <div className="border border-gray-300 rounded-lg p-2 bg-[#FFFAFA]">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-start gap-3">
                        <div className="w-[95px] flex justify-end">
                          <span className="font-bold text-right w-[95px]">
                            {t("hotelOwner.format")}:
                          </span>
                        </div>
                        <span className="text-left">
                          {t("hotelOwner.customFormatValue")}
                        </span>
                      </div>
                      <div className="flex justify-start gap-3">
                        <div className="w-[95px] flex justify-end">
                          <span className="font-bold text-right w-[95px]">
                            {t("hotelOwner.colorMode")}:
                          </span>
                        </div>
                        <span className="text-left">
                          {t("hotelOwner.colorModeValue")}
                        </span>
                      </div>
                      <div className="flex justify-start gap-3">
                        <div className="w-[95px] flex justify-end">
                          <span className="font-bold text-right w-[95px]">
                            {t("hotelOwner.resolution")}:
                          </span>
                        </div>
                        <span className="text-left">
                          {t("hotelOwner.resolutionValue")}
                        </span>
                      </div>
                      <div className="flex justify-start gap-3">
                        <div className="w-[95px] flex justify-end">
                          <span className="font-bold text-right w-[95px]">
                            {t("hotelOwner.fileFormat")}:
                          </span>
                        </div>
                        <span className="text-left">
                          {t("hotelOwner.fileFormatValue")}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Upload 
                    style={{ width: "100%" }}
                    fileList={fileList}
                    onChange={handleChange}
                    showUploadList={false}
                  >
                    <div
                      className="border border-black focus:outline-none rounded-lg p-3 text-center cursor-pointer transition-all duration-300"
                      onClick={() => handleChange}
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-center flex justify-start items-center gap-2">
                          <MdPhotoSizeSelectActual className="text-2xl text-[#777777]" />
                          <p className="text-[#777777] !mb-0">
                            {t("hotelOwner.dragOrDropImage")}
                          </p>
                        </div>
      
                        <BsCloudUpload className="text-2xl text-[#777777]" />
                      </div>
                    </div>
                  </Upload>
                </div>
              </div>
            </div>

            {/* Merchandise Section */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-black">
                {t("hotelOwner.merchandise")}
              </h2>

              <div className="space-y-4">
                <div className="p-3 border-[#aaaaaa] border space-y-4">
                  {/* Plaque Checkbox */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="plaketteChecked"
                      name="plaketteChecked"
                      checked={formData.plaketteChecked}
                      onChange={handleInputChange}
                      className="h-5 w-5 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="plaketteChecked"
                      className="ml-3 text-sm font-medium text-black cursor-pointer"
                    >
                      {t("hotelOwner.plakette")}
                    </label>
                  </div>

                  {/* Plaque Content - Only show when checked */}
                  {formData.plaketteChecked && (
                    <div className="space-y-4">
                      {/* Plaque Image Placeholder */}
                      <div className="flex justify-start">
                        <img
                          src={image1}
                          alt="image1"
                          className="sm:w-82 w-full h-auto"
                        />
                      </div>

                      {/* Wording Input */}
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">
                          {t("hotelOwner.wordingHotelname")}
                        </label>
                        <input
                          name="plaketteWording"
                          value={formData.plaketteWording}
                          onChange={handleInputChange}
                          className={inputClass}
                        />
                      </div>

                      {/* Plaque Size Selection */}
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">
                          {t("hotelOwner.plaketteSize")}
                        </label>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="plaketteSize25cm"
                              name="plaketteSize"
                              value="25cm"
                              checked={formData.plaketteSize === "25cm"}
                              onChange={handleInputChange}
                              className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300"
                            />
                            <label
                              htmlFor="plaketteSize25cm"
                              className="ml-3 text-sm font-medium text-black cursor-pointer"
                            >
                              {t("hotelOwner.plaketteSize25cm")}
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="plaketteSize40cm"
                              name="plaketteSize"
                              value="40cm"
                              checked={formData.plaketteSize === "40cm"}
                              onChange={handleInputChange}
                              className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300"
                            />
                            <label
                              htmlFor="plaketteSize40cm"
                              className="ml-3 text-sm font-medium text-black cursor-pointer"
                            >
                              {t("hotelOwner.plaketteSize40cm")}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-3 border-[#aaaaaa] border space-y-4">
                  {/* Flag Checkbox */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="flagChecked"
                      name="flagChecked"
                      checked={formData.flagChecked}
                      onChange={handleInputChange}
                      className="h-5 w-5 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="flagChecked"
                      className="ml-3 text-sm font-medium text-black cursor-pointer"
                    >
                      {t("hotelOwner.flag")}
                    </label>
                  </div>

                  {/* Flag Content - Only show when checked */}
                  {formData.flagChecked && (
                    <div className="space-y-4">
                      {/* Flag Image */}
                      <div className="flex justify-start">
                        <img
                          src={image2}
                          alt="flag"
                          className="sm:w-80 w-full h-auto"
                        />
                      </div>

                      {/* Flag Format Input */}
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">
                          {t("hotelOwner.flagFormat")}
                        </label>
                        <input
                          name="flagFormat"
                          value={formData.flagFormat}
                          onChange={handleInputChange}
                          className={inputClass}
                        />
                      </div>

                      {/* Flag Attachment Input */}
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">
                          {t("hotelOwner.flagAttachment")}
                        </label>
                        <input
                          name="flagAttachment"
                          value={formData.flagAttachment}
                          onChange={handleInputChange}
                          className={inputClass}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-1 justify-end items-center py-6 px-8 border-t border-t-[#aaaaaa] sticky bottom-0 bg-white">
        <div className="w-2xl mx-auto flex justify-end items-center">
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 !text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            {t("hotelOwner.submit")}
          </button>
        </div>
      </div>

      {/* Add Image Modal */}
      <AddImageModal
        visible={isModalVisible}
        onCancel={handleModalClose}
        onSave={handleModalSave}
      />

      {/* Simple Image Modal */}
      <SimpleImageModal
        roleVisible={true}
        visible={isSimpleModalVisible}
        onCancel={handleSimpleModalClose}
        onSave={handleSimpleModalSave}
      />

      {/* Image Preview Modal */}
      {previewImage && (
        <Image
          wrapperStyle={{ display: "none" }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
    </div>
  );
};

export default HotelOwnerFormExclusive;