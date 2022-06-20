import M from "materialize-css";
import { useEffect } from "react";

export default function InputSelect({ cities = [], onCityChange = null }) {
  function handleCityChange(event) {
    if (onCityChange) {
      onCityChange(event);
    }
  }
  return (
    <div>
      <label className="text-xl p-2 underline" htmlFor="citiesSelect">
        Escolha uma cidade para ver o resultado das eleições:
      </label>
      <select
        id="citiesSelect"
        className="browser-default px-2 py-1 border bg-slate-700 text-white rounded"
        onChange={handleCityChange}
        placeholder="Escolha a cidade">
        <option value="" disabled selected>
          Escolha a cidade
        </option>
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
  );
}
