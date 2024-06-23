"use client";

import Image from "next/image";
import { useState } from "react";
import Slide from "@/components/slider";
import Arrow from "@/public/assets/down-arrow.svg";
import { structure } from "@/constant";

const About = () => {
  const [gizi, setGizi] = useState(0);

  return (
    <div className="flex flex-col gap-44 relative">
      <Image
        src={Arrow}
        alt="DOWN_ARROW"
        height="80"
        className="absolute z-20 top-[75vh] left-[50vw] cursor-pointer"
        onClick={() =>
          window.scroll({ top: screen.height * 0.82, behavior: "smooth" })
        }
      />
      <div className="w-screen h-[90vh] bg-[#64646479] absolute z-10"></div>
      <Slide />
      <div className="w-screen flex justify-center">
        <div className="flex flex-col w-[80%] gap-20">
          <div className="h-[200px] flex gap-5">
            <div className="w-[10px] h-[100%] bg-[#E7E7E7]" />
            <div className="w-[45%] flex flex-col justify-between">
              <div className="text-5xl font-extrabold underline decoration-[#FFF27F] decoration-[30px] underline-offset-[-20px]">
                삶의 기본기
              </div>
              <div className="text-3xl font-bold">
                이곳은 사람들의 삶에 진정 필요한 것을 다루는 곳입니다.
              </div>
              <div>
                스스로의 생각을 키우고, 삶의 기본기를 익히고 잃어버린 감각을
                열어봅니다. 함께 떠들고 나누는 것만큼 빈둥거리고 침묵하는 것도
                중요합니다. 아이도 어른도 기지에 오면 ‘삶의 기본’이 무엇인지
                마주하게 됩니다.
              </div>
            </div>
          </div>
          <div className="h-[200px] flex gap-5">
            <div className="w-[45%] flex flex-col justify-between ml-auto">
              <div className="text-5xl font-extrabold underline decoration-[#B8F1B7] decoration-[30px] underline-offset-[-20px]">
                공동체
              </div>
              <div className="text-3xl font-bold">
                사회적 약자를 위한 배려, 이웃과의 빵 나눔을 통해 ‘공동체 의식’을
                키웁니다.
              </div>
              <div>
                사회적 약자, 장애인은 우리가 더불어 살아야할 이웃입니다.
                휠체어로 기지를 한바퀴 도는 것은 그것을 몸으로 알기 위함입니다.
              </div>
            </div>
            <div className="w-[10px] h-[100%] bg-[#E7E7E7]" />
          </div>
          <div className="h-[200px] flex gap-5">
            <div className="w-[10px] h-[100%] bg-[#E7E7E7]" />
            <div className="w-[45%] flex flex-col justify-between">
              <div className="text-5xl font-extrabold underline decoration-[#FFF27F] decoration-[30px] underline-offset-[-20px]">
                기지(basecamp)
              </div>
              <div className="text-3xl font-bold">
                망망대해의 피난처이자 전진 기지처럼 빠른 세상의 변화에도 버팀목
                같은 장소인 곳이 ‘기지’입니다.{" "}
              </div>
              <div>
                폐교된 학교를 고쳐서 다시 썼습니다. 콘크리트를 걷고 흙을 살려
                텃밭을 만들었습니다. 공동체, 열린 환경, 즐거운 경험, 맨발 활보,
                도시속 자연, 침묵들을 생각합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col w-[70vw]">
          <div className="mx-auto font-bold text-3xl">공간소개</div>
          <img src="/assets/gizi.webp" alt="GIZI" className="w-[100%]" />
          <div className="flex justify-between gap-10 my-10">
            <div className="flex flex-col gap-10 bg-green-200 w-[20%]">
              {["기지#01", "기지#02", "기지#03", "기지#야외공간"].map(
                (item, index) => (
                  <div
                    className={`font-bold cursor-pointer hover:text-[#3b3b3b] ${
                      gizi === index
                        ? "text-4xl text-black"
                        : "text-3xl text-gray-500"
                    }`}
                    onClick={() => setGizi(index)}
                  >
                    {item}
                  </div>
                )
              )}
            </div>
            <div className="bg-red-200 w-[80%] flex flex-col gap-5">
              <div>
                알로이시오전자기계고등학교의 종합실습실로 쓰던 폐교 공간
              </div>
              <div>
                실습을 위한 밀링머신, 선반 등의 대형 기계들이 놓여있었고,
                지게차로 자재를 운반할 수 있도록 통로가 넓고 층고가 높은 것이
                매력적이었던 곳으로 리모델링을 통하여 멋진 공간으로
                재탄생하였습니다.
              </div>
              <div className="flex flex-col gap-4">
                {structure.map((item, index) => (
                  <div className="flex gap-5">
                    <div className="text-3xl">{index + 1}F |</div>
                    <div className="flex gap-4">
                      {item.map((floor, findex) => (
                        <div className="text-2xl font-bold bg-">
                          {floor.name}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;