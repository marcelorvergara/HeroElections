export default function CandidateCard({
  children: result,
  winner = false,
  percentVote = 0,
  totVotes = 0,
}) {
  const winnerClass = winner ? "text-green-500" : "text-orange-400";
  const winnerText = winner ? "Eleito" : "Não eleito";
  return (
    <div className="m-4 shadow-md p-4 ">
      <div className="flex flex-row">
        <img
          className="object-fill h-20 w-20 rounded-full"
          src={`/img/${result.username}.png`}
          alt={result.name}
        />
        <div className="ml-4">
          <div className={`${winnerClass}`}>{percentVote}%</div>
          <div>{parseInt(totVotes).toLocaleString("pt-BR")}</div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-xl mt-2">{result.name}</span>
        <span className={`${winnerClass} mt-2`}>{winnerText}</span>
      </div>
    </div>
  );
}
