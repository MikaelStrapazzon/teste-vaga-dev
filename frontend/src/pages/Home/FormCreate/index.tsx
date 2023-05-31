import React, {useEffect, useState} from "react";
import {Container} from "./styles";
import {api} from "../../../services/api";

interface state {
  id: number
  acronym: string
}

interface city {
  id: number
  name: string
}

export default function FormCreate() {
  const [states, setStates] = useState<state[]>([]);
  const [stateSelected, setStateSelected] = useState<number>();

  const [cities, setCities] = useState<city[]>([]);

  useEffect(() => {
    api.get("state")
      .then( response => setStates(response.data) )
  }, []);

  useEffect(() => {
    console.log(stateSelected)
    if (!stateSelected)
      return

    api.get("city/state/" + stateSelected)
      .then( response => setCities(response.data) )
  }, [stateSelected]);

  return (
    <Container>
      <form>

        <div>
          <label htmlFor='form_cnpj'>CNPJ</label>
          <input id='form_cnpj' type='text' name='cnpj'/>
        </div>

        <div>
          <label htmlFor='form_name'>Nome da Empresa</label>
          <input id='form_name' type='text' name='name'/>
        </div>

        <div>
          <label htmlFor='form_cep'>CEP</label>
          <input id='form_cep' type='text' name='cep'/>
        </div>

        <div>
          <label htmlFor='form_address'>Endereço</label>
          <input id='form_address' type='text' name='address'/>
        </div>

        <div>
          <label htmlFor='form_number'>Número</label>
          <input id='form_number' type='text' name='number'/>
        </div>

        <div>
          <label htmlFor='form_neighborhood'>Bairro</label>
          <input id='form_neighborhood' type='text' name='neighborhood'/>
        </div>

        <div>
          <label htmlFor='form_state'>UF</label>
          <select id='form_state' onChange={(e) => setStateSelected(e.currentTarget.value as unknown as number)}>
            <option hidden selected>Selecione uma opção</option>
            {states.map(state => (
              <option value={state.id}>{state.acronym}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor='form_city'>Cidade</label>
          <select id='form_city' name='city_id'>
            {cities.map(city => (
              <option value={city.id}>{city.name}</option>
            ))}
            <option hidden selected>Selecione um estado</option>
          </select>
        </div>

      </form>
    </Container>
  );
}