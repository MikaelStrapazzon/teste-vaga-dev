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
  const [cnpj, setCnpj] = useState('');
  const [name, setName] = useState('');
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');

  const handleClearForm = () => {
    setCnpj('');
    setName('');
    setCep('');
    setAddress('');
    setNumber('');
    setNeighborhood('');
  };

  const [states, setStates] = useState<state[]>([]);
  const [stateSelected, setStateSelected] = useState<number>();

  const [cities, setCities] = useState<city[]>([]);

  useEffect(() => {
    api.get("state")
      .then( response => setStates(response.data) )
  }, []);

  useEffect(() => {
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
          <input id='form_cnpj' type='text' value={cnpj} onChange={(e) => setCnpj(e.target.value)}/>
        </div>

        <div>
          <label htmlFor='form_name'>Nome da Empresa</label>
          <input id='form_name' type='text' value={name} onChange={(e) => setName(e.target.value)}/>
        </div>

        <div>
          <label htmlFor='form_cep'>CEP</label>
          <input id='form_cep' type='text' value={cep} onChange={(e) => setCep(e.target.value)}/>
        </div>

        <div>
          <label htmlFor='form_address'>Endereço</label>
          <input id='form_address' type='text' value={address} onChange={(e) => setAddress(e.target.value)}/>
        </div>

        <div>
          <label htmlFor='form_number'>Número</label>
          <input id='form_number' type='text' value={number} onChange={(e) => setNumber(e.target.value)}/>
        </div>

        <div>
          <label htmlFor='form_neighborhood'>Bairro</label>
          <input id='form_neighborhood' type='text' value={neighborhood} onChange={(e) => setNeighborhood(e.target.value)}/>
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
          <select id='form_city' onChange={(e) => setCity(e.target.value)}>
            {cities.map(city => (
              <option value={city.id}>{city.name}</option>
            ))}
            <option hidden selected value='0'>Selecione um estado</option>
          </select>
        </div>

        <input type='button' value='Cancelar' onClick={handleClearForm}/>
        <input type='submit' value='Salvar'/>

      </form>
    </Container>
  );
}