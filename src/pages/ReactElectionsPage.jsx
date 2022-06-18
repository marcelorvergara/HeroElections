import { useEffect, useState } from "react";
import { apiGetResults } from "../services/apiServices";
import Header from "../components/Header";
import Main from "../components/Main";
import M from "materialize-css";
import Results from "../components/Results";
import Loading from "../components/Loading";

// apiGetUrlData("cities").then((res) => console.log("cities", res));
// apiGetUrlData("candidates").then((res) => console.log("candidates", res));
// apiGetUrlData("election").then((res) => console.log("election", res));

export default function ReactElectionsPage() {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState();
  // loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    M.AutoInit();
  }, []);
  useEffect(() => {
    async function getAllCities() {
      try {
        const allCities = await apiGetResults();
        setCities(allCities);
        setLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    }
    getAllCities();
  }, []);

  const handleCityChange = (event) => {
    const ctObj = cities.find((f) => f.id === event.target.value);
    setCity(ctObj);
  };

  let mainJsx = (
    <div className="flex justify-center my-4">
      <Loading />
    </div>
  );

  if (!loading) {
    mainJsx = (
      <>
        <div className="flex flex-col items-center justify-center mt-4">
          <label className="text-xl p-2" htmlFor="citiesSelect">
            Escolha a cidade:
          </label>
          <select
            id="citiesSelect"
            defaultValue={cities[0].id}
            className="browser-default p-2"
            onChange={handleCityChange}>
            {cities.map((city) => {
              const { id, name } = city;
              return (
                <option key={id} value={id}>
                  {name}
                </option>
              );
            })}
          </select>
        </div>
      </>
    );
  }

  if (!loading && city !== undefined) {
    mainJsx = (
      <>
        <div className="flex flex-col items-center justify-center mt-4">
          <label className="text-xl p-2" htmlFor="citiesSelect">
            Escolha a cidade:
          </label>
          <select
            id="citiesSelect"
            defaultValue={cities[0].id}
            className="browser-default p-2"
            onChange={handleCityChange}>
            {cities.map((city) => {
              const { id, name } = city;
              return (
                <option key={id} value={id}>
                  {name}
                </option>
              );
            })}
          </select>
        </div>
        <Results>{city}</Results>
      </>
    );
  }

  return (
    <>
      <Header>React Elections</Header>
      <Main>{mainJsx}</Main>
    </>
  );
}
