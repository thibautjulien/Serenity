import mascotte from "../assets/mascotte.png";

export default function Preparation() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="mt-16 flex flex-col items-start gap-8 rounded-2xl border border-white/10 bg-[rgba(10,20,50,0.55)] px-6 py-6 backdrop-blur-md sm:px-8 lg:mt-30 lg:flex-row lg:items-center lg:justify-around lg:px-10">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold uppercase sm:text-3xl">Site en cours de développement..</h2>
          <p className="mt-5 leading-relaxed">
            Cette section est actuellement en cours de rédaction. <br />
            <br />
            Serenity est une communauté multigaming en développement qui a pour objectif de rassembler des joueurs autour d'une ambiance conviviale, de l'entraide et du plaisir de jouer ensemble.
            <br />
            <br />
            Bientôt, vous pourrez découvrir ici l'histoire de la guilde, ses valeurs, les jeux auxquels nous participons ainsi que les différentes activitées proposées au sein de la communauté.
            <br />
            <br />
            Revenez prochainement pour en apprendre davantage sur Serenity.
          </p>
        </div>

        <div className="hidden lg:block">
          <img src={mascotte} alt="Mascotte" className="w-72 object-contain xl:w-96" />
        </div>
      </div>
    </div>
  );
}
