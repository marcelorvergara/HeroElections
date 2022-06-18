export default function Results({ children: city = "" }) {
  return (
    <div className="flex flex-col items-center justify-center mt-10 border mx-32">
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
      <div>
        {city.results.map((result) => {
          return <span key={result.id}>{result.candidateId}</span>;
        })}
      </div>
    </div>
  );
}
