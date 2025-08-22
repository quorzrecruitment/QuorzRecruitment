import React from "react";
import Image from "next/image";
export default function Success() {
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-12">
          <div>
            <div className="relative p-[3px] rounded-4xl animate-border bg-gradient-to-r from-[#dd0525] via-transparent to-[#dd0525]">
              <div className="relative aspect-square overflow-hidden rounded-4xl bg-white">
                <Image
                  src="/images/employee1.png"
                  alt="Bob"
                  width={400}
                  height={400}
                  priority
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-[24px] font-medium font-sans mt-4 text-secondary">
              Why Headhunting Matters for Your Success
            </h2>
            <p className="text-[14px] text-secondary text-normal font-sans mt-4">
              In today’s competitive labour market, attracting and retaining top
              performers is vital. Many of the most talented professionals are
              not actively seeking new roles. Through our headhunting services,
              <strong>Quorz Recruitment</strong> enables you to reach beyond
              traditional channels and connect directly with this exceptional
              talent pool.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
