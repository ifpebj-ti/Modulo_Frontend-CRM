"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelectedLayoutSegment } from "next/navigation";

import { ChartBar, House, List, Megaphone, SignOut, X } from "@phosphor-icons/react";
import Logo from "../../../public/logo.svg";
import smallLogo from "../../../public/icon.png"

import './styles.scss'
import { currentDateFormatted } from "@/utils/formatDate";

const SideBard: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const segment = useSelectedLayoutSegment();
  const isActive = true;
  const sideBarPages = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: {
        regular: <House size={24} weight="regular" />,
        fill: <House size={24} weight="fill" />
      },
      current: `/${segment}` === "/dashboard" ? true : false,
    },
    {
      name: "Campanhas",
      href: "/campaigns",
      icon: {
        regular: <Megaphone size={24} weight="regular" />,
        fill: <Megaphone size={24} weight="fill" />
      },
      current: `/${segment}` === "/campaigns" ? true : false,
    },
    {
      name: "Vendas",
      href: "/sales",
      icon: {
        regular: <ChartBar size={24} weight="regular" />,
        fill: <ChartBar size={24} weight="fill" />
      },
      current: `/${segment}` === "/sales" ? true : false,
    },
  ];

  return (
    <div className="container">

      <div className="h-full w-full bg-white flex flex-col justify-between items-center pt-[36px] pb-[36px] px-[20px] max-md:px-[10px] max-[639px]:hidden">
        <div className="flex flex-col gap-3 items-center">
          <Image src={Logo} alt={"Logo Cavalcante"} className="max-[1279px]:hidden" />
          <Image src={smallLogo} alt={"Logo Cavalcante"} className="min-[1279px]:hidden  max-w-[60%]" />
          <p className="text-xs text-center font-semibold text-[#6C757D]">{currentDateFormatted}</p>
        </div>
        <div>
          <div className="flex flex-col gap-[40px] ">
            {sideBarPages.map((page) => {
              return (
                <>
                  <Link
                    href={page.href}
                    className={`flex max-[1279px]:flex-col min-[1280px]:flex-row gap-[12px] text-sm cursor-pointer hover:opacity-80 items-center ${page.current ? "font-bold" : ""
                      }`}
                    key={page.name}
                  >
                    {page.current ? page.icon.fill : page.icon.regular}
                    {page.name}
                  </Link>
                </>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-[24px]">
          <div className="flex p-[6px] justify-center gap-[12px] items-center rounded-[20px] bg-[#F5F8FA] cursor-pointer">
            <div
              className={`${isActive &&
                "flex pt-[6px] pb-[6px] pr-[12px] pl-[12px] rounded-[16px] bg-white"
                }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clipPath="url(#clip0_225_5478)">
                  <path
                    d="M7.5 2.5V1C7.5 0.867392 7.55268 0.740215 7.64645 0.646447C7.74021 0.552678 7.86739 0.5 8 0.5C8.13261 0.5 8.25979 0.552678 8.35355 0.646447C8.44732 0.740215 8.5 0.867392 8.5 1V2.5C8.5 2.63261 8.44732 2.75979 8.35355 2.85355C8.25979 2.94732 8.13261 3 8 3C7.86739 3 7.74021 2.94732 7.64645 2.85355C7.55268 2.75979 7.5 2.63261 7.5 2.5ZM12 8C12 8.79113 11.7654 9.56448 11.3259 10.2223C10.8864 10.8801 10.2616 11.3928 9.53073 11.6955C8.79983 11.9983 7.99556 12.0775 7.21964 11.9231C6.44371 11.7688 5.73098 11.3878 5.17157 10.8284C4.61216 10.269 4.2312 9.55628 4.07686 8.78036C3.92252 8.00444 4.00173 7.20017 4.30448 6.46927C4.60723 5.73836 5.11992 5.11365 5.77772 4.67412C6.43552 4.2346 7.20887 4 8 4C9.06051 4.00116 10.0773 4.42296 10.8271 5.17285C11.577 5.92275 11.9988 6.93949 12 8ZM11 8C11 7.40666 10.8241 6.82664 10.4944 6.33329C10.1648 5.83994 9.69623 5.45542 9.14805 5.22836C8.59987 5.0013 7.99667 4.94189 7.41473 5.05764C6.83279 5.1734 6.29824 5.45912 5.87868 5.87868C5.45912 6.29824 5.1734 6.83279 5.05764 7.41473C4.94189 7.99667 5.0013 8.59987 5.22836 9.14805C5.45542 9.69623 5.83994 10.1648 6.33329 10.4944C6.82664 10.8241 7.40666 11 8 11C8.7954 10.9992 9.55798 10.6828 10.1204 10.1204C10.6828 9.55798 10.9992 8.7954 11 8ZM3.64625 4.35375C3.74007 4.44757 3.86732 4.50028 4 4.50028C4.13268 4.50028 4.25993 4.44757 4.35375 4.35375C4.44757 4.25993 4.50028 4.13268 4.50028 4C4.50028 3.86732 4.44757 3.74007 4.35375 3.64625L3.35375 2.64625C3.25993 2.55243 3.13268 2.49972 3 2.49972C2.86732 2.49972 2.74007 2.55243 2.64625 2.64625C2.55243 2.74007 2.49972 2.86732 2.49972 3C2.49972 3.13268 2.55243 3.25993 2.64625 3.35375L3.64625 4.35375ZM3.64625 11.6462L2.64625 12.6462C2.55243 12.7401 2.49972 12.8673 2.49972 13C2.49972 13.1327 2.55243 13.2599 2.64625 13.3538C2.74007 13.4476 2.86732 13.5003 3 13.5003C3.13268 13.5003 3.25993 13.4476 3.35375 13.3538L4.35375 12.3538C4.40021 12.3073 4.43706 12.2521 4.4622 12.1914C4.48734 12.1308 4.50028 12.0657 4.50028 12C4.50028 11.9343 4.48734 11.8692 4.4622 11.8086C4.43706 11.7479 4.40021 11.6927 4.35375 11.6462C4.3073 11.5998 4.25214 11.5629 4.19145 11.5378C4.13075 11.5127 4.0657 11.4997 4 11.4997C3.9343 11.4997 3.86925 11.5127 3.80855 11.5378C3.74786 11.5629 3.69271 11.5998 3.64625 11.6462ZM12 4.5C12.0657 4.50005 12.1307 4.48716 12.1914 4.46207C12.2521 4.43697 12.3073 4.40017 12.3538 4.35375L13.3538 3.35375C13.4476 3.25993 13.5003 3.13268 13.5003 3C13.5003 2.86732 13.4476 2.74007 13.3538 2.64625C13.2599 2.55243 13.1327 2.49972 13 2.49972C12.8673 2.49972 12.7401 2.55243 12.6462 2.64625L11.6462 3.64625C11.5762 3.71618 11.5286 3.8053 11.5092 3.90235C11.4899 3.99939 11.4998 4.09998 11.5377 4.1914C11.5756 4.28281 11.6397 4.36092 11.722 4.41586C11.8043 4.4708 11.9011 4.50008 12 4.5ZM12.3538 11.6462C12.2599 11.5524 12.1327 11.4997 12 11.4997C11.8673 11.4997 11.7401 11.5524 11.6462 11.6462C11.5524 11.7401 11.4997 11.8673 11.4997 12C11.4997 12.1327 11.5524 12.2599 11.6462 12.3538L12.6462 13.3538C12.6927 13.4002 12.7479 13.4371 12.8086 13.4622C12.8692 13.4873 12.9343 13.5003 13 13.5003C13.0657 13.5003 13.1308 13.4873 13.1914 13.4622C13.2521 13.4371 13.3073 13.4002 13.3538 13.3538C13.4002 13.3073 13.4371 13.2521 13.4622 13.1914C13.4873 13.1308 13.5003 13.0657 13.5003 13C13.5003 12.9343 13.4873 12.8692 13.4622 12.8086C13.4371 12.7479 13.4002 12.6927 13.3538 12.6462L12.3538 11.6462ZM3 8C3 7.86739 2.94732 7.74021 2.85355 7.64645C2.75979 7.55268 2.63261 7.5 2.5 7.5H1C0.867392 7.5 0.740215 7.55268 0.646447 7.64645C0.552678 7.74021 0.5 7.86739 0.5 8C0.5 8.13261 0.552678 8.25979 0.646447 8.35355C0.740215 8.44732 0.867392 8.5 1 8.5H2.5C2.63261 8.5 2.75979 8.44732 2.85355 8.35355C2.94732 8.25979 3 8.13261 3 8ZM8 13C7.86739 13 7.74021 13.0527 7.64645 13.1464C7.55268 13.2402 7.5 13.3674 7.5 13.5V15C7.5 15.1326 7.55268 15.2598 7.64645 15.3536C7.74021 15.4473 7.86739 15.5 8 15.5C8.13261 15.5 8.25979 15.4473 8.35355 15.3536C8.44732 15.2598 8.5 15.1326 8.5 15V13.5C8.5 13.3674 8.44732 13.2402 8.35355 13.1464C8.25979 13.0527 8.13261 13 8 13ZM15 7.5H13.5C13.3674 7.5 13.2402 7.55268 13.1464 7.64645C13.0527 7.74021 13 7.86739 13 8C13 8.13261 13.0527 8.25979 13.1464 8.35355C13.2402 8.44732 13.3674 8.5 13.5 8.5H15C15.1326 8.5 15.2598 8.44732 15.3536 8.35355C15.4473 8.25979 15.5 8.13261 15.5 8C15.5 7.86739 15.4473 7.74021 15.3536 7.64645C15.2598 7.55268 15.1326 7.5 15 7.5Z"
                    fill="#1C1C1C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_225_5478">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M14.5963 8.88928C14.5321 8.82501 14.4517 8.77942 14.3636 8.75739C14.2755 8.73537 14.1831 8.73775 14.0963 8.76428C13.1429 9.0525 12.1291 9.07667 11.1631 8.8342C10.1971 8.59174 9.31489 8.09172 8.61061 7.38744C7.90632 6.68315 7.40631 5.80099 7.16384 4.83494C6.92137 3.8689 6.94554 2.85517 7.23376 1.90178C7.26051 1.81491 7.26307 1.72238 7.24117 1.63416C7.21927 1.54594 7.17373 1.46536 7.10946 1.40109C7.04518 1.33681 6.9646 1.29127 6.87638 1.26937C6.78816 1.24747 6.69564 1.25003 6.60876 1.27678C5.29065 1.68056 4.13347 2.48978 3.30189 3.58928C2.57465 4.55482 2.13105 5.70401 2.02093 6.90776C1.91081 8.11151 2.13853 9.32212 2.67852 10.4036C3.2185 11.485 4.04935 12.3945 5.07772 13.0298C6.10609 13.6651 7.29124 14.001 8.50001 13.9999C9.91023 14.0043 11.2829 13.5458 12.4075 12.6949C13.507 11.8633 14.3162 10.7061 14.72 9.38803C14.7465 9.30148 14.7489 9.20938 14.7271 9.12154C14.7053 9.03371 14.6601 8.95343 14.5963 8.88928ZM11.8063 11.8962C10.7472 12.6938 9.4357 13.0821 8.11311 12.9895C6.79051 12.8969 5.54589 12.3296 4.60835 11.3922C3.67081 10.4547 3.10346 9.21011 3.01074 7.88753C2.91803 6.56494 3.30619 5.25338 4.10376 4.19428C4.62339 3.50807 5.29518 2.95181 6.06626 2.56928C6.02234 2.87755 6.0002 3.18852 6.00001 3.4999C6.00183 5.22325 6.68724 6.8755 7.90583 8.09409C9.12442 9.31268 10.7767 9.99809 12.5 9.99991C12.812 9.99981 13.1236 9.97767 13.4325 9.93366C13.0496 10.7049 12.4929 11.3767 11.8063 11.8962Z"
                  fill="#6C757D"
                />
              </svg>
            </div>
          </div>
          <div className="flex gap-[12px] text-sm cursor-pointer hover:opacity-80">
            <SignOut size={22} />
            Sair
          </div>
        </div>
      </div>

      <div className="min-[640px]:hidden mt-4 ml-4">
        <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <List size={32}/>
        </button>
        <div className={`fixed inset-0 bg-white z-50 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="w-full h-full">
            <div className="flex flex-col gap-4">
              <button type="button" className="mt-4 ml-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <X size={32}/>
              </button>
              {sideBarPages.map((page) => {
                return (
                  <>
                    <Link
                      href={page.href}
                      className={`flex gap-[12px] ml-4 text-sm cursor-pointer hover:opacity-80 items-center ${page.current ? "font-bold" : ""
                        }`}
                      key={page.name}
                    >
                      {page.current ? page.icon.fill : page.icon.regular}
                      {page.name}
                    </Link>
                  </>
                );
              })}
            </div>
            <div className="flex flex-col gap-[24px]">
              <div className="flex p-[6px] mt-4 ml-4 w-min justify-center gap-[12px] items-center rounded-[20px] bg-[#F5F8FA] cursor-pointer">
                <div
                  className={`${isActive &&
                    "flex pt-[6px] pb-[6px] pr-[12px] pl-[12px] rounded-[16px] bg-white"
                    }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_225_5478)">
                      <path
                        d="M7.5 2.5V1C7.5 0.867392 7.55268 0.740215 7.64645 0.646447C7.74021 0.552678 7.86739 0.5 8 0.5C8.13261 0.5 8.25979 0.552678 8.35355 0.646447C8.44732 0.740215 8.5 0.867392 8.5 1V2.5C8.5 2.63261 8.44732 2.75979 8.35355 2.85355C8.25979 2.94732 8.13261 3 8 3C7.86739 3 7.74021 2.94732 7.64645 2.85355C7.55268 2.75979 7.5 2.63261 7.5 2.5ZM12 8C12 8.79113 11.7654 9.56448 11.3259 10.2223C10.8864 10.8801 10.2616 11.3928 9.53073 11.6955C8.79983 11.9983 7.99556 12.0775 7.21964 11.9231C6.44371 11.7688 5.73098 11.3878 5.17157 10.8284C4.61216 10.269 4.2312 9.55628 4.07686 8.78036C3.92252 8.00444 4.00173 7.20017 4.30448 6.46927C4.60723 5.73836 5.11992 5.11365 5.77772 4.67412C6.43552 4.2346 7.20887 4 8 4C9.06051 4.00116 10.0773 4.42296 10.8271 5.17285C11.577 5.92275 11.9988 6.93949 12 8ZM11 8C11 7.40666 10.8241 6.82664 10.4944 6.33329C10.1648 5.83994 9.69623 5.45542 9.14805 5.22836C8.59987 5.0013 7.99667 4.94189 7.41473 5.05764C6.83279 5.1734 6.29824 5.45912 5.87868 5.87868C5.45912 6.29824 5.1734 6.83279 5.05764 7.41473C4.94189 7.99667 5.0013 8.59987 5.22836 9.14805C5.45542 9.69623 5.83994 10.1648 6.33329 10.4944C6.82664 10.8241 7.40666 11 8 11C8.7954 10.9992 9.55798 10.6828 10.1204 10.1204C10.6828 9.55798 10.9992 8.7954 11 8ZM3.64625 4.35375C3.74007 4.44757 3.86732 4.50028 4 4.50028C4.13268 4.50028 4.25993 4.44757 4.35375 4.35375C4.44757 4.25993 4.50028 4.13268 4.50028 4C4.50028 3.86732 4.44757 3.74007 4.35375 3.64625L3.35375 2.64625C3.25993 2.55243 3.13268 2.49972 3 2.49972C2.86732 2.49972 2.74007 2.55243 2.64625 2.64625C2.55243 2.74007 2.49972 2.86732 2.49972 3C2.49972 3.13268 2.55243 3.25993 2.64625 3.35375L3.64625 4.35375ZM3.64625 11.6462L2.64625 12.6462C2.55243 12.7401 2.49972 12.8673 2.49972 13C2.49972 13.1327 2.55243 13.2599 2.64625 13.3538C2.74007 13.4476 2.86732 13.5003 3 13.5003C3.13268 13.5003 3.25993 13.4476 3.35375 13.3538L4.35375 12.3538C4.40021 12.3073 4.43706 12.2521 4.4622 12.1914C4.48734 12.1308 4.50028 12.0657 4.50028 12C4.50028 11.9343 4.48734 11.8692 4.4622 11.8086C4.43706 11.7479 4.40021 11.6927 4.35375 11.6462C4.3073 11.5998 4.25214 11.5629 4.19145 11.5378C4.13075 11.5127 4.0657 11.4997 4 11.4997C3.9343 11.4997 3.86925 11.5127 3.80855 11.5378C3.74786 11.5629 3.69271 11.5998 3.64625 11.6462ZM12 4.5C12.0657 4.50005 12.1307 4.48716 12.1914 4.46207C12.2521 4.43697 12.3073 4.40017 12.3538 4.35375L13.3538 3.35375C13.4476 3.25993 13.5003 3.13268 13.5003 3C13.5003 2.86732 13.4476 2.74007 13.3538 2.64625C13.2599 2.55243 13.1327 2.49972 13 2.49972C12.8673 2.49972 12.7401 2.55243 12.6462 2.64625L11.6462 3.64625C11.5762 3.71618 11.5286 3.8053 11.5092 3.90235C11.4899 3.99939 11.4998 4.09998 11.5377 4.1914C11.5756 4.28281 11.6397 4.36092 11.722 4.41586C11.8043 4.4708 11.9011 4.50008 12 4.5ZM12.3538 11.6462C12.2599 11.5524 12.1327 11.4997 12 11.4997C11.8673 11.4997 11.7401 11.5524 11.6462 11.6462C11.5524 11.7401 11.4997 11.8673 11.4997 12C11.4997 12.1327 11.5524 12.2599 11.6462 12.3538L12.6462 13.3538C12.6927 13.4002 12.7479 13.4371 12.8086 13.4622C12.8692 13.4873 12.9343 13.5003 13 13.5003C13.0657 13.5003 13.1308 13.4873 13.1914 13.4622C13.2521 13.4371 13.3073 13.4002 13.3538 13.3538C13.4002 13.3073 13.4371 13.2521 13.4622 13.1914C13.4873 13.1308 13.5003 13.0657 13.5003 13C13.5003 12.9343 13.4873 12.8692 13.4622 12.8086C13.4371 12.7479 13.4002 12.6927 13.3538 12.6462L12.3538 11.6462ZM3 8C3 7.86739 2.94732 7.74021 2.85355 7.64645C2.75979 7.55268 2.63261 7.5 2.5 7.5H1C0.867392 7.5 0.740215 7.55268 0.646447 7.64645C0.552678 7.74021 0.5 7.86739 0.5 8C0.5 8.13261 0.552678 8.25979 0.646447 8.35355C0.740215 8.44732 0.867392 8.5 1 8.5H2.5C2.63261 8.5 2.75979 8.44732 2.85355 8.35355C2.94732 8.25979 3 8.13261 3 8ZM8 13C7.86739 13 7.74021 13.0527 7.64645 13.1464C7.55268 13.2402 7.5 13.3674 7.5 13.5V15C7.5 15.1326 7.55268 15.2598 7.64645 15.3536C7.74021 15.4473 7.86739 15.5 8 15.5C8.13261 15.5 8.25979 15.4473 8.35355 15.3536C8.44732 15.2598 8.5 15.1326 8.5 15V13.5C8.5 13.3674 8.44732 13.2402 8.35355 13.1464C8.25979 13.0527 8.13261 13 8 13ZM15 7.5H13.5C13.3674 7.5 13.2402 7.55268 13.1464 7.64645C13.0527 7.74021 13 7.86739 13 8C13 8.13261 13.0527 8.25979 13.1464 8.35355C13.2402 8.44732 13.3674 8.5 13.5 8.5H15C15.1326 8.5 15.2598 8.44732 15.3536 8.35355C15.4473 8.25979 15.5 8.13261 15.5 8C15.5 7.86739 15.4473 7.74021 15.3536 7.64645C15.2598 7.55268 15.1326 7.5 15 7.5Z"
                        fill="#1C1C1C"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_225_5478">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M14.5963 8.88928C14.5321 8.82501 14.4517 8.77942 14.3636 8.75739C14.2755 8.73537 14.1831 8.73775 14.0963 8.76428C13.1429 9.0525 12.1291 9.07667 11.1631 8.8342C10.1971 8.59174 9.31489 8.09172 8.61061 7.38744C7.90632 6.68315 7.40631 5.80099 7.16384 4.83494C6.92137 3.8689 6.94554 2.85517 7.23376 1.90178C7.26051 1.81491 7.26307 1.72238 7.24117 1.63416C7.21927 1.54594 7.17373 1.46536 7.10946 1.40109C7.04518 1.33681 6.9646 1.29127 6.87638 1.26937C6.78816 1.24747 6.69564 1.25003 6.60876 1.27678C5.29065 1.68056 4.13347 2.48978 3.30189 3.58928C2.57465 4.55482 2.13105 5.70401 2.02093 6.90776C1.91081 8.11151 2.13853 9.32212 2.67852 10.4036C3.2185 11.485 4.04935 12.3945 5.07772 13.0298C6.10609 13.6651 7.29124 14.001 8.50001 13.9999C9.91023 14.0043 11.2829 13.5458 12.4075 12.6949C13.507 11.8633 14.3162 10.7061 14.72 9.38803C14.7465 9.30148 14.7489 9.20938 14.7271 9.12154C14.7053 9.03371 14.6601 8.95343 14.5963 8.88928ZM11.8063 11.8962C10.7472 12.6938 9.4357 13.0821 8.11311 12.9895C6.79051 12.8969 5.54589 12.3296 4.60835 11.3922C3.67081 10.4547 3.10346 9.21011 3.01074 7.88753C2.91803 6.56494 3.30619 5.25338 4.10376 4.19428C4.62339 3.50807 5.29518 2.95181 6.06626 2.56928C6.02234 2.87755 6.0002 3.18852 6.00001 3.4999C6.00183 5.22325 6.68724 6.8755 7.90583 8.09409C9.12442 9.31268 10.7767 9.99809 12.5 9.99991C12.812 9.99981 13.1236 9.97767 13.4325 9.93366C13.0496 10.7049 12.4929 11.3767 11.8063 11.8962Z"
                      fill="#6C757D"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex ml-4 gap-[12px] text-sm cursor-pointer hover:opacity-80">
                <SignOut size={22} />
                Sair
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SideBard;