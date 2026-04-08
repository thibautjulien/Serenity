import { useEffect, useState } from "react";
import { getMembers } from "../../services/members.service";

export default function Master() {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getMembers(["1480827987103584367"])
      .then((data) => setMembers(data.members))
      .catch((err) => setError(err.response?.data?.error || err.message));
  }, []);

  if (error) {
    return <p>Erreur : {error}</p>;
  }

  return (
    <div className="mt-30">
      <p className="uppercase text-2xl mb-10">Maître de guilde</p>
      <div className="flex gap-10">
        {members.length === 0 ? (
          <p>Aucun membre pour ce role.</p>
        ) : (
          members.map((member) => (
            <div key={member.id} className="rounded-2xl border border-white/10 bg-[rgba(10,20,50,0.55)] px-4 py-6 backdrop-blur-md uppercase w-40 h-40 place-items-center content-center">
              <img src={member.avatar} alt={member.displayName} width="78" className="rounded-4xl" />
              <p className="mt-3">{member.displayName}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
