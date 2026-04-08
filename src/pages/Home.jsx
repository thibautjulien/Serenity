import { useEffect } from "react";
import { Link } from "react-router-dom";

import Counter from "../components/Counter";

import entraide from "../assets/entraide.png";
import competition from "../assets/epees.png";
import relation from "../assets/relation.png";
import mascotte from "../assets/mascotte.png";
import membres from "../assets/groupe.png";
import calendrier from "../assets/calendrier.png";
import trophee from "../assets/trophee.png";
import soon from "../assets/bientot.png";
import carte from "../assets/carte.png";
import dragon from "../assets/dragon.png";

function Home() {
  useEffect(() => {
    document.title = "Serenity";
  }, []);

  return (
    <div>
      <div>
        <div className="mt-20 px-4 text-center sm:mt-32">
          <h1 className="text-5xl uppercase tracking-[0.18em] sm:text-7xl lg:text-8xl lg:tracking-widest">Serenity</h1>
          <p className="mt-4 text-sm uppercase tracking-[0.25em] sm:text-base sm:tracking-[0.43em]">Une guilde soudée et redoutable</p>

          <Link
            to="/rejoindre"
            className="mt-8 inline-block rounded-lg bg-[#2A3F7D] px-5 py-3 text-sm uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#4DA3FF] sm:text-base sm:tracking-widest"
          >
            Rejoindre la guilde
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4 px-4 uppercase sm:mt-16 sm:gap-10">
          <div className="flex items-center justify-center">
            <img src={entraide} alt="Entraide" className="mr-3 h-5 w-5 object-contain" />
            <p className="text-base sm:text-xl">Entraide</p>
          </div>

          <div className="flex items-center justify-center px-4 sm:border-x-2 sm:border-white sm:px-10">
            <img src={competition} alt="CompÃ©tition" className="mr-3 h-5 w-5 object-contain" />
            <p className="text-base sm:text-xl">Compétition</p>
          </div>

          <div className="flex items-center justify-center">
            <img src={relation} alt="ConvivialitÃ©" className="mr-3 h-5 w-5 object-contain" />
            <p className="text-base sm:text-xl">Convivialité</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mt-16 flex flex-col gap-6 lg:mt-30 lg:flex-row lg:gap-8">
          <div className="relative flex-1 rounded-2xl border border-white/10 bg-[rgba(10,20,50,0.55)] px-6 py-6 backdrop-blur-md sm:px-8 sm:py-8 lg:px-10 lg:py-6 lg:pr-56">
            <div className="max-w-[400px]">
              <h2 className="mb-3 text-2xl font-bold uppercase tracking-[0.2em] sm:text-xl sm:tracking-widest">À propos de nous</h2>

              <p className="leading-relaxed text-white/80">
                Serenity est une guilde de joueurs passionnés,
                <br className="hidden sm:block" />
                unis pour la victoire et l'aventure.
              </p>

              <Link to="" className="mt-6 inline-block rounded-lg bg-[#2A3F7D] px-5 py-3 text-sm uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#4DA3FF] sm:tracking-widest">
                En savoir plus
              </Link>
            </div>

            <img src={mascotte} alt="Mascotte" className="mx-auto mt-8 h-40 w-40 object-contain hidden lg:block lg:absolute lg:right-5 lg:bottom-0 lg:mt-0 lg:h-56 lg:w-56" />
          </div>

          <div className="flex w-full flex-shrink-0 items-center justify-between rounded-2xl border border-white/10 bg-[rgba(10,20,50,0.55)] px-4 py-6 backdrop-blur-md uppercase sm:px-8 lg:w-[420px] lg:px-10">
            <div className="flex flex-1 flex-col items-center gap-2">
              <img src={membres} alt="Membres" className="h-10 w-10" />
              <p className="text-3xl sm:text-4xl">
                <Counter target={120} />
              </p>
              <p className="text-[10px] tracking-[0.18em] sm:text-xs sm:tracking-widest">Membres</p>
            </div>

            <div className="flex flex-1 flex-col items-center gap-2 border-x border-white/20 px-3 sm:px-6">
              <img src={calendrier} alt="Ã‰vÃ©nements" className="h-10 w-10" />
              <p className="text-3xl sm:text-4xl">
                <Counter target={35} />
              </p>
              <p className="text-[10px] tracking-[0.18em] sm:text-xs sm:tracking-widest">Événements</p>
            </div>

            <div className="flex flex-1 flex-col items-center gap-2">
              <img src={trophee} alt="Ã‚ge de la guilde" className="h-10 w-10" />
              <p className="text-3xl sm:text-4xl">
                <Counter target={5} />
              </p>
              <p className="text-[10px] tracking-[0.18em] sm:text-xs sm:tracking-widest">Années</p>
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-25">
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-2xl font-bold uppercase tracking-[0.2em] sm:text-xl sm:tracking-widest">Événements récents</h3>
            <Link
              to=""
              className="inline-block rounded-lg bg-[#2A3F7D] px-5 py-3 text-center text-sm uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#4DA3FF] sm:w-auto sm:tracking-widest"
            >
              Voir plus
            </Link>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-between">
            <div className="relative h-[260px] w-full rounded-3xl overflow-hidden border border-white/10 bg-[rgba(10,20,50,0.55)] backdrop-blur-md transition-transform duration-300 hover:scale-105 md:w-[calc(50%-0.75rem)] xl:w-[390px]">
              <img src={dragon} alt="Dragon des glaces" className="absolute top-4 left-4 h-20 w-20 object-contain sm:h-24 sm:w-24" />

              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <p className="mb-4 text-2xl font-bold uppercase">Dragon des glaces</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm sm:text-base">
                    <img src={calendrier} alt="Calendrier" className="h-5 w-5 object-contain" />
                    <p className="ml-2 uppercase tracking-widest">23 avril</p>
                  </div>

                  <div className="flex items-center text-sm sm:text-base">
                    <img src={membres} alt="Membres" className="h-5 w-5 object-contain" />
                    <p className="ml-2 uppercase tracking-widest">5/12</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[260px] w-full rounded-3xl overflow-hidden border border-white/10 bg-[rgba(10,20,50,0.55)] backdrop-blur-md transition-transform duration-300 hover:scale-105 md:w-[calc(50%-0.75rem)] xl:w-[390px]">
              <img src={competition} alt="Tournois PVP" className="absolute top-4 left-4 h-20 w-20 object-contain sm:h-24 sm:w-24" />

              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <p className="mb-4 text-2xl font-bold uppercase">Tournois PVP</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm sm:text-base">
                    <img src={calendrier} alt="Calendrier" className="h-5 w-5 object-contain" />
                    <p className="ml-2 uppercase tracking-widest">10 mai</p>
                  </div>

                  <div className="flex items-center text-sm sm:text-base">
                    <img src={membres} alt="Membres" className="h-5 w-5 object-contain" />
                    <p className="ml-2 uppercase tracking-widest">2/25</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[260px] w-full rounded-3xl overflow-hidden border border-white/10 bg-[rgba(10,20,50,0.55)] backdrop-blur-md transition-transform duration-300 hover:scale-105 md:w-[calc(50%-0.75rem)] xl:w-[390px]">
              <img src={carte} alt="Chasse au trÃ©sor" className="absolute top-4 left-4 h-20 w-20 object-contain sm:h-24 sm:w-24" />

              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <p className="mb-4 text-2xl font-bold uppercase">Chasse au trésor</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm sm:text-base">
                    <img src={soon} alt="Calendrier" className="h-5 w-5 object-contain" />
                    <p className="ml-2 uppercase tracking-widest">Prochainement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
