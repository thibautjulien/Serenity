import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_serenity.png";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="mt-4 flex w-full justify-center px-3 sm:mt-8 sm:px-6">
      <div className="w-full max-w-6xl rounded-2xl border border-white/10 bg-[rgba(10,20,50,0.55)] px-4 py-4 backdrop-blur-md sm:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
            <img src={logo} alt="Logo Serenity" className="absolute h-20 w-20 object-contain sm:-left-5 sm:h-25 sm:w-25" />
          </Link>

          <button
            type="button"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 text-white transition-colors hover:bg-white/10 md:hidden"
          >
            <span className="space-y-1.5">
              <span className={`block h-0.5 w-5 bg-current transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-current transition-opacity ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-current transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>

          <div className="hidden items-center gap-10 md:flex">
            <ul className="flex items-center gap-10 text-sm uppercase tracking-widest text-white">
              <li>
                <Link to="/" className="transition-colors hover:text-[#4DA3FF]">
                  Accueil
                </Link>
              </li>

              <li>
                <Link to="/guilde" className="transition-colors hover:text-[#4DA3FF]">
                  Guilde
                </Link>
              </li>

              <li>
                <Link to="/membres" className="transition-colors hover:text-[#4DA3FF]">
                  Membres
                </Link>
              </li>

              <li>
                <Link to="/events" className="transition-colors hover:text-[#4DA3FF]">
                  Événements
                </Link>
              </li>
            </ul>

            <Link to="/rejoindre" className="rounded-lg bg-[#2A3F7D] px-5 py-2 text-sm uppercase tracking-widest text-white transition-colors hover:bg-[#4DA3FF]">
              Rejoindre
            </Link>
          </div>
        </div>

        <div className={`${isOpen ? "mt-4 flex" : "hidden"} flex-col gap-3 border-t border-white/10 pt-4 md:hidden`}>
          <Link to="/" onClick={closeMenu} className="rounded-lg px-3 py-2 text-sm uppercase tracking-[0.22em] text-white transition-colors hover:bg-white/10 hover:text-[#4DA3FF]">
            Accueil
          </Link>

          <Link to="/guilde" onClick={closeMenu} className="rounded-lg px-3 py-2 text-sm uppercase tracking-[0.22em] text-white transition-colors hover:bg-white/10 hover:text-[#4DA3FF]">
            Guilde
          </Link>

          <Link to="/membres" onClick={closeMenu} className="rounded-lg px-3 py-2 text-sm uppercase tracking-[0.22em] text-white transition-colors hover:bg-white/10 hover:text-[#4DA3FF]">
            Membres
          </Link>

          <Link to="/events" onClick={closeMenu} className="rounded-lg px-3 py-2 text-sm uppercase tracking-[0.22em] text-white transition-colors hover:bg-white/10 hover:text-[#4DA3FF]">
            Événements
          </Link>

          <Link to="/rejoindre" onClick={closeMenu} className="mt-2 rounded-lg bg-[#2A3F7D] px-5 py-3 text-center text-sm uppercase tracking-[0.22em] text-white transition-colors hover:bg-[#4DA3FF]">
            Rejoindre
          </Link>
        </div>
      </div>
    </nav>
  );
}
