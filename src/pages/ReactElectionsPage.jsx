import { useEffect, useState } from "react";
import { apiGetResults } from "../services/apiServices";
import Header from "../components/Header";
import Main from "../components/Main";
import Results from "../components/Results";
import Loading from "../components/Loading";
import InputSelect from "../components/InputSelect";

// apiGetUrlData("cities").then((res) => console.log("cities", res));
// apiGetUrlData("candidates").then((res) => console.log("candidates", res));
// apiGetUrlData("election").then((res) => console.log("election", res));

export default function ReactElectionsPage() {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState();
  // loading
  const [loading, setLoading] = useState(true);

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
          <InputSelect
            cities={cities}
            onCityChange={handleCityChange}></InputSelect>
        </div>
      </>
    );
  }

  if (!loading && city !== undefined) {
    mainJsx = (
      <>
        <div className="flex flex-col items-center justify-center mt-4">
          <InputSelect
            cities={cities}
            onCityChange={handleCityChange}></InputSelect>
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
