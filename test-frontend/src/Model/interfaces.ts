export interface Country {
  name: string,
  countryCode: string
}

export interface CountryInfo {
  borderCountries: BorderCountries[],
  flagURL: string,
  populationData: PopulationData[]
}

export interface CountryComplete {
  country: Country,
  countryInfo: CountryInfo
}

interface BorderCountries {
  borders: BorderCountries,
  commonName: string,
  countryCode: string,
  OfficialNAme: string,
  region: string
}

export interface PopulationData {
  code: string,
  country: string,
  iso3: string, 
  populationCounts: PopulationCounts[]
}

interface PopulationCounts {
  year: number,
  value: number
}