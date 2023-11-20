"use client";

import { House } from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";
import Logo from "../../../public/logo.svg";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const SideBard: React.FC = () => {
  const segment = useSelectedLayoutSegment();
  const isActive = true;
  const sideBarPages = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <House size={32} weight="fill" />,
      current: `/${segment}` === "/dashboard" ? true : false,
    },
    {
      name: "Campanhas",
      href: "/campaigns",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M1.5 11.5833C1.50124 10.3902 1.97574 9.24637 2.81939 8.40272C3.66303 7.55908 4.80691 7.08457 6 7.08333H9.73125C10.0041 7.06739 14.7581 6.73271 19.2853 2.93583C19.5039 2.75223 19.7704 2.63482 20.0534 2.59741C20.3365 2.56 20.6243 2.60413 20.8831 2.72463C21.1419 2.84513 21.361 3.03699 21.5145 3.27766C21.6681 3.51834 21.7498 3.79784 21.75 4.08333V19.0833C21.75 19.3689 21.6684 19.6485 21.5149 19.8893C21.3614 20.1302 21.1424 20.3222 20.8835 20.4428C20.6247 20.5634 20.3368 20.6076 20.0537 20.5702C19.7706 20.5328 19.504 20.4154 19.2853 20.2318C15.7444 17.2618 12.0666 16.4105 10.5 16.1724V19.1461C10.5003 19.3933 10.4395 19.6367 10.3231 19.8548C10.2066 20.0728 10.0381 20.2587 9.8325 20.3958L8.80125 21.083C8.60192 21.2161 8.37362 21.2994 8.13546 21.3261C7.8973 21.3527 7.65622 21.322 7.43241 21.2363C7.20859 21.1507 7.00855 21.0126 6.84904 20.8338C6.68954 20.6549 6.57521 20.4405 6.51562 20.2083L5.41219 16.0496C4.32963 15.9055 3.33621 15.3733 2.61662 14.5518C1.89702 13.7303 1.50023 12.6754 1.5 11.5833ZM20.25 19.0768V4.08333C16.2366 7.44989 12.1284 8.30208 10.5 8.51208V14.6508C12.1266 14.8646 16.2337 15.7149 20.25 19.0768ZM7.96875 19.8268V19.8371L9 19.1499V16.0833H6.975L7.96875 19.8268ZM6 14.5833H9V8.58333H6C5.20435 8.58333 4.44129 8.8994 3.87868 9.46201C3.31607 10.0246 3 10.7877 3 11.5833C3 12.379 3.31607 13.142 3.87868 13.7047C4.44129 14.2673 5.20435 14.5833 6 14.5833Z"
            fill="black"
          />
        </svg>
      ),
      current: `/${segment}` === "/campaigns" ? true : false,
    },
    {
      name: "Vendas",
      href: "/sales",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M21 19.0833H20.25V4.08325C20.25 3.88434 20.171 3.69357 20.0303 3.55292C19.8897 3.41227 19.6989 3.33325 19.5 3.33325H14.25C14.0511 3.33325 13.8603 3.41227 13.7197 3.55292C13.579 3.69357 13.5 3.88434 13.5 4.08325V7.83325H9C8.80109 7.83325 8.61032 7.91227 8.46967 8.05292C8.32902 8.19357 8.25 8.38434 8.25 8.58325V12.3333H4.5C4.30109 12.3333 4.11032 12.4123 3.96967 12.5529C3.82902 12.6936 3.75 12.8843 3.75 13.0833V19.0833H3C2.80109 19.0833 2.61032 19.1623 2.46967 19.3029C2.32902 19.4436 2.25 19.6343 2.25 19.8333C2.25 20.0322 2.32902 20.2229 2.46967 20.3636C2.61032 20.5042 2.80109 20.5833 3 20.5833H21C21.1989 20.5833 21.3897 20.5042 21.5303 20.3636C21.671 20.2229 21.75 20.0322 21.75 19.8333C21.75 19.6343 21.671 19.4436 21.5303 19.3029C21.3897 19.1623 21.1989 19.0833 21 19.0833ZM15 4.83325H18.75V19.0833H15V4.83325ZM9.75 9.33325H13.5V19.0833H9.75V9.33325ZM5.25 13.8333H8.25V19.0833H5.25V13.8333Z"
            fill="black"
          />
        </svg>
      ),
      current: `/${segment}` === "/sales" ? true : false,
    },
  ];
  return (
    <div className="w-full h-full">
      <div className="h-full w-full bg-white flex flex-col justify-between items-center pt-[36px] pb-[36px] pl-[21px] pr-[19px]">
        <Image src={Logo} alt={"Logo Cavalcante"} />
        <div>
          <div className="flex flex-col gap-[40px] ">
            {sideBarPages.map((page) => {
              return (
                <>
                  <Link
                    href={page.href}
                    className={`flex gap-[12px]  cursor-pointer hover:opacity-80 items-center ${page.current ? "font-bold" : ""
                      }`}
                    key={page.name}
                  >
                    {page.icon}
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
          <div className="flex gap-[12px] cursor-pointer hover:opacity-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10.5 20.25C10.5 20.4489 10.421 20.6397 10.2803 20.7803C10.1397 20.921 9.94891 21 9.75 21H4.5C4.10218 21 3.72064 20.842 3.43934 20.5607C3.15804 20.2794 3 19.8978 3 19.5V4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3H9.75C9.94891 3 10.1397 3.07902 10.2803 3.21967C10.421 3.36032 10.5 3.55109 10.5 3.75C10.5 3.94891 10.421 4.13968 10.2803 4.28033C10.1397 4.42098 9.94891 4.5 9.75 4.5H4.5V19.5H9.75C9.94891 19.5 10.1397 19.579 10.2803 19.7197C10.421 19.8603 10.5 20.0511 10.5 20.25ZM20.7806 11.4694L17.0306 7.71937C16.8899 7.57864 16.699 7.49958 16.5 7.49958C16.301 7.49958 16.1101 7.57864 15.9694 7.71937C15.8286 7.86011 15.7496 8.05098 15.7496 8.25C15.7496 8.44902 15.8286 8.63989 15.9694 8.78063L18.4397 11.25H9.75C9.55109 11.25 9.36032 11.329 9.21967 11.4697C9.07902 11.6103 9 11.8011 9 12C9 12.1989 9.07902 12.3897 9.21967 12.5303C9.36032 12.671 9.55109 12.75 9.75 12.75H18.4397L15.9694 15.2194C15.8286 15.3601 15.7496 15.551 15.7496 15.75C15.7496 15.949 15.8286 16.1399 15.9694 16.2806C16.1101 16.4214 16.301 16.5004 16.5 16.5004C16.699 16.5004 16.8899 16.4214 17.0306 16.2806L20.7806 12.5306C20.8504 12.461 20.9057 12.3783 20.9434 12.2872C20.9812 12.1962 21.0006 12.0986 21.0006 12C21.0006 11.9014 20.9812 11.8038 20.9434 11.7128C20.9057 11.6217 20.8504 11.539 20.7806 11.4694Z"
                fill="#1C1C1C"
              />
            </svg>
            sair
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBard;
