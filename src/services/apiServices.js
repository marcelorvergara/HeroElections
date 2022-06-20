import { read, readAll } from "./httpService";

export async function apiGetUrlData(url) {
  const allData = await read(url);
  return allData;
}

export async function apiGetResults() {
  // prettier-ignore
  const [{ value: cities }, { value: candidates }, { value: election }] = await readAll();
  const result = cities.data.map((city) => {
    return {
      ...city,
      results: election.data.filter((election) => {
        return city.id === election.cityId;
      }),
    };
  });

  result.forEach((city) => {
    city.results.sort((a, b) => b.votes - a.votes);
    city.results = city.results.map((resp) => {
      const candidate = candidates.data.filter(
        (f) => f.id === resp.candidateId
      );
      return {
        ...resp,
        candidateObj: candidate[0],
      };
    });
  });

  console.log(result);
  return result;
}
