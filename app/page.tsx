"use client";

import Navbar from "@/components/ui/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen pt-24 ">
        <motion.div
          className="rounded-3xl h-[70vh]  flex flex-col w-[98%] mx-auto"
          style={{
            backgroundImage: `url(/main.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            quis architecto, accusantium tempore impedit optio doloribus. Et
            perspiciatis quos nisi possimus obcaecati exercitationem blanditiis
            a earum, optio distinctio aut facilis!
          </p>
          <h1>The best way to predict the future is to invent it</h1>
          <Link href={"/"}>Find More</Link>
        </motion.div>

        <div className="w-11/12 mx-auto pt-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="bg-slate-300 rounded-2xl p-4 flex-1 ">
                <h1 className="text-6xl pb-4">10 K</h1>
                <p className="opacity-80">Lorem ipsum dolor sit amet !</p>
              </div>
            ))}
          </div>
        </div>
      </section>

              {/* section 2 */ }

      <section className="min-h-screen pt-24 w-[98%] flex mx-auto   gap-16 flex-col sm:flex-row">
        {/* left  */}

        <div className="flex-1 flex flex-col ">
                        <p className="max-w-prose text leading-relaxed text-black/80 pb-16 pl-12 font-bold">

            Lorem ipsum dolor asperiores repellat aperiam vitae perspiciatis
            molestiae blanditiis quae?
          </p>

          <div className="flex flex-1 flex-col  pb-16  pl-5 pr-5">
  <div className="relative h-40 w-full overflow-hidden mb-4">
    
                    <Image
                src={"/3d.jpg"}
                alt={"t"}
                fill
                className="rounded-4xl object-cover  "
              />
            </div>
  <div className="relative flex-1 w-full overflow-hidden">
                  <Image
                src={"/lap.jpg"}
                alt={"t"}
                fill
                className="rounded-4xl object-cover "
              />
            </div>
          </div>
        </div>

       {/* right */}
<div className="flex-1">
  <div className="flex flex-col sm:flex-row gap-4 pb-8 p-4 sm:p-0 sm:pb-8">
    <div className="relative w-full sm:basis-1/3 h-[200px] sm:h-96 overflow-hidden">
      <Image
        src="/3d.jpg"
        alt="3D grafika"
        fill
        className="object-cover rounded-4xl"
      />
    </div>

    <div className="relative w-full sm:basis-2/3 h-[200px] sm:h-96 overflow-hidden">
      <Image
        src="/lap.jpg"
        alt="Notebook"
        fill
        className="object-cover rounded-4xl"
      />
    </div>
  </div>

  <div className="p-4 sm:p-0">
    <h2 className="text-xl font-bold pb-4">About</h2>
    <div className="flex flex-col sm:flex-row gap-8 pb-16">
      <p className="max-w-prose text leading-relaxed text-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
        nemo, ex voluptates soluta modi deserunt quis deleniti ullam
        saepe dolor autem provident hic officiis quod architecto
        voluptatibus esse id porro?
      </p>
      <p className="max-w-prose text leading-relaxed text-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
        nemo, ex voluptates soluta modi deserunt quis deleniti ullam
        saepe dolor autem provident hic officiis quod architecto
        voluptatibus esse id porro?
      </p>
    </div>
  </div>

  <h1 className="text-xl sm:text-3xl font-bold leading-tight tracking-wide p-4 sm:p-0">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
    adipisci esse, rerum dolor dolores laborum excepturi sunt ducimus
    sequi hic nisi cum harum exercitationem possimus error consequuntur
    distinctio molestiae blanditiis.
  </h1>
</div>
      </section>


   {/* section3 */}
<section className="bg-[#2c2d31] h-screen flex justify-end items-end">
  <div className="max-w-6xl w-full mx-auto  pb-48 ">
    <h1 className="text-2xl font-bold uppercase text-white pb-16">What we do</h1>

    <ul className="flex flex-wrap gap-4">
      {[1, 2, 3, 4, 5].map((_, i) => (
        <li className="uppercase text-6xl text-gray-700" key={i}>
          URBAN design /
        </li>
      ))}
    </ul>
  </div>
</section>


    </>
  );
}
