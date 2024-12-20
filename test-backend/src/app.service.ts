import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { count } from 'console';

@Injectable()
export class AppService {

  async getCountries() {
    const countries = await axios.get("https://date.nager.at/api/v3/AvailableCountries");
    return countries.data;
  }

  async getCountry(id: string) {
    const country = await axios.get("https://date.nager.at/api/v3/AvailableCountries");

    const filter = country.data.filter(c => c.countryCode === id);

    return filter

  }

  async getCountryInfo(id: string){
    const borderCountries = await axios.get(`https://date.nager.at/api/v3/CountryInfo/${id}`);
    const populationData = await axios.get(`https://countriesnow.space/api/v0.1/countries/population`);

    const { data } = await axios.get(`https://countriesnow.space/api/v0.1/countries/flag/images`)

    const filterFlag = data.data.filter(f => f.name === borderCountries.data.commonName)

    const flagURL = filterFlag[0].flag;

    const filter = populationData.data.data.filter(c => c.country === borderCountries.data.commonName)

 
    return {
      borderCountries: borderCountries.data.borders,
      populationData: filter[0],
      flagURL,
    };
  }
}
