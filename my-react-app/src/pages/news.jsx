import React from "react";
import banner from "../assets/banner.webp";
import banner1 from "../assets/banner1.webp";
import banner2 from "../assets/ielts-banner-3.webp";
import banner3 from "../assets/ielts-banner-31.webp";
import banner4 from "../assets/ielts-banner-96.webp";
import banner5 from "../assets/banner5.webp";

export default function NewsPage() {
  return (
    <>
      <div className="flex gap-5">
        <div className="w-[389px] border border-l-neutral-400 rounded-md text-center bg-white">
          <img src={banner} alt="Banner IELTS" />
          <p className="font-bold font-serif pt-3 pb-3 ">
            IELTS will continue to be accepted by the Australian Government to
            support skilled migration pathways
          </p>
          <p className="font-thin pb-3">
            Asutralia has renewed its agreement with IELTS partners. IELTS
            remains trusted for visas, with One Skill Retake accepted for
            most...
          </p>

          <p className="bottom-0 pb-2">01 August 2025</p>
        </div>

        <div className="w-[389px] border border-l-neutral-400 rounded-md text-center bg-white">
          <img src={banner1} alt="Banner IELTS" />
          <p className="font-bold font-serif pt-3 pb-3 ">
            IDP IELRS Referral Partner Program
          </p>
          <p className="font-thin pb-3">
            Become an IDP IELTS Referral Partner and earn commission while
            helping people achieve their work and study goals
          </p>

          <p className="bottom-0">07 May 2025</p>
        </div>

        <div className="w-[389px] border border-l-neutral-400 rounded-md text-center bg-white">
          <img src={banner2} alt="Banner IELTS" />
          <p className="font-bold font-serif pt-3 pb-3 ">
            English Exams for Abroad: Which is the Best Option for You
          </p>
          <p className="font-thin pb-3">
            Planning to work or study abroad? Here is every thing you need to
            know about English language proficienty tests
          </p>

          <p className="bottom-0">02 May 2025</p>
        </div>
      </div>

      <div className="flex gap-5 mt-3">
        <div className="w-[389px] border border-l-neutral-400 rounded-md text-center bg-white">
          <img src={banner3} alt="Banner IELTS" />
          <p className="font-bold font-serif pt-3 pb-3 ">
            Does It Matter Where I Take IELTS- IDP Or British Counil ?
          </p>
          <p className="font-thin pb-3">
            Studying overseas in an English-speaking country means taking your
            IELTS exam. However, between IDP and British Council, ...
          </p>

          <p className="bottom-0 pb-2">26 January 2024</p>
        </div>

        <div className="w-[389px] border border-l-neutral-400 rounded-md text-center bg-white">
          <img src={banner4} alt="Banner IELTS" />
          <p className="font-bold font-serif pt-3 pb-3 ">
            Handling unclear questions in IELTS Speaking: A comprehensive guide
          </p>
          <p className="font-thin pb-3">
            Struggling with IELTS Speaking questions? Learn strategies to handle
            unclear prompts and boost your performance. Ace the test wit...
          </p>

          <p className="bottom-0">07 May 2025</p>
        </div>

        <div className="w-[389px] border border-l-neutral-400 rounded-md text-center bg-white">
          <img src={banner5} alt="Banner IELTS" />
          <p className="font-bold font-serif pt-3 pb-3 ">
            Mastering the art of rewriting introductions in IELTS Writing
          </p>
          <p className="font-thin pb-3">
            This article aims to provide you with valuable insights to master
            the art of rewriting introductions, and to boost your score in the
            ...
          </p>

          <p className="bottom-0">02 May 2025</p>
        </div>
      </div>
    </>
  );
}
