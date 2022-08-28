type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

export type RegionFilterOption = Region | 'All';

export type Currency = {[currency : string]: { name: string }};

export type Language = {[langCode : string]: [languageName: string]};

export interface Country {
    name: {
      common: string,
      nativeName: {
        [langCode : string]: {
          official: string,
          common: string
        }
      }
    },
    population: number,
    region: Region,
    subregion: string,
    capital: string,
    flags: {
      svg: string
    },
    cca3: string,
    tld: string,
    currencies: Currency,
    languages: Language,
    borders: [
      cca3: string
    ]
}