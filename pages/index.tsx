import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import Image from "next/image";
import BackdropAnimation from "@/components/utils/backdrop_animation";
import {
  SearchingForInnovationCard,
  WorkIsPriorityCard,
} from "@/components/widgets/homeScreenCards";
import { AllAboutLearningCard } from "@/components/widgets/homeScreenCards";
import { TeamCardForHome } from "@/components/widgets/TeamCard";

interface TeamMember {
  name: string;
  branch: string;
  imageUrl: string;
}

const members = [
  {
    name: "Samarth Pal",
    branch: "Cloud and java dev",
    imageUrl: "/Samarth_Image.png",
  },
  {
    name: "Ashwin Sharma",
    branch: "App dev",
    imageUrl: "/Ashwin_Image.png",
  },
  {
    name: "Arjun Rai",
    branch: "UI / UX Developer",
    imageUrl: "/anonymous_male.svg",
  },
  {
    name: "Arjun Rai2",
    branch: "UI / UX Developer",
    imageUrl: "/anonymous_male.svg",
  },
  {
    name: "Arjun Rai3",
    branch: "UI / UX Developer",
    imageUrl: "/anonymous_male.svg",
  },
];

export default function IndexPage() {
  return (
    <DefaultLayout>

      <BackdropAnimation />

      <section className="flex flex-col items-center justify-center gap-4 py-2 md:py-10 duration-400 transition-all">
        <div className="text-center mx-auto justify-center z-20">

		{/* <Image
        src="/srm_logo.png"
        width={100}
        height={50}
        alt={""}
        className=" border-4 border-violet-300/50 md:hidden rounded-xl mx-auto mb-4"
      ></Image> */}

          {/* WELCOME CARD */}
          <div className=" flex flex-col sm:mx-10 lg:flex-row">
            <Image
              src={"/drone.svg"}
              layout="responsive"
              width={100}
              height={100}
              alt={""}
              className="  max-w-md mx-auto"
            />

            <div className=" flex flex-col animate-appearance-in mt-10 lg:mt-0 max-w-xl lg:ml-20 duration-400">
              <h1 className={title()}>Welcome </h1>
              <h1 className=" font-bold text-xl">To</h1>
              {/* <h1 className={title()}>&nbsp;</h1> */}
              <h1 className=" text-4xl lg:text-5xl font-bold text-[#7700ff]">
                Center for Innovation, Incubation and Entrepreneurship{" "}
              </h1>
              <br />

              <h4 className={subtitle({ class: "mt-4" })}>
                A place to unleash your potential
              </h4>
            </div>
          </div>
        </div>

        <SearchingForInnovationCard />
        <AllAboutLearningCard />
        <WorkIsPriorityCard />

        <TeamCardForHome teamMembers={members} />

        <div className=" h-[50px]"></div>
      </section>
    </DefaultLayout>
  );
}
