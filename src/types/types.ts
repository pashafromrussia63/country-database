export type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

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
    currencies: {
      [currency: string]: {
        name: string
      }
    },
    languages: {
      [langCode : string]: [languageName: string]
    },
    borders: [
      cca3: string
    ]
}