import CandidateCard from "./CandidateCard";

export default function Results({ children: city = "" }) {
  return (
    <div className="flex flex-col items-center justify-center mt-10 border mx-10">
      <div>
        <strong>Eleição em: {city.name}</strong>
      </div>
      <div className="flex flex-row space-x-6 p-3">
        <span>
          <strong>
            Total de eleitores:{" "}
            {parseInt(city.votingPopulation).toLocaleString("pt-BT")}
          </strong>
        </span>
        <span>
          <strong>
            Abstenções: {parseInt(city.absence).toLocaleString("pt-BR")}
          </strong>
        </span>
        <span>
          <strong>
            Comparecimento: {parseInt(city.presence).toLocaleString("pt-BR")}
          </strong>
        </span>
        <span>
          <strong>
            Candidatos:{" "}
            {parseInt(city?.results?.length).toLocaleString("pt-BR")}
          </strong>
        </span>
      </div>
      <div className="flex flex-row mb-10">
        {city.results.map((result) => {
          return (
            <CandidateCard
              key={result.id}
              winner={city.results.indexOf(result) === 0}
              percentVote={(
                (parseInt(result.votes) / parseInt(city.presence)) *
                100
              ).toFixed(2)}
              totVotes={result.votes}>
              {result.candidateObj}
            </CandidateCard>
          );
        })}
      </div>
    </div>
  );
}
