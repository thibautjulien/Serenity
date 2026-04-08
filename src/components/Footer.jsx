import { Link } from "react-router-dom";

import logo from "../assets/logo_serenity.png";

export default function Footer() {
  return (
    <div className="mt-16 flex flex-col border-t-2 border-white/10 bg-[rgba(10,20,50,0.55)] px-6 py-12 backdrop-blur-md sm:mt-20 sm:py-20">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 sm:flex-row sm:justify-center">
        <div className="flex flex-col place-items-center pb-8 sm:mr-10 sm:border-r-2 sm:border-white/10 sm:pb-0 sm:pr-10">
          <img src={logo} alt="Serenity" className="h-15 w-15 object-contain" />
          <h1 className="mt-2 text-lg uppercase tracking-widest">Serenity</h1>
        </div>

        <div>
          <ul className="flex flex-col place-items-center gap-2 text-sm uppercase tracking-[0.2em] sm:tracking-widest">
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
        </div>
      </div>

      <p className="mt-10 text-center text-xs uppercase sm:mt-15 sm:text-sm">© 2026 Serenity. Forgée dans l'aventure, protégée par ses membres. Tous droits réservés.</p>
    </div>
  );
}
