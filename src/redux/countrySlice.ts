import { createSlice } from '@reduxjs/toolkit'
import { Country, RegionFilterOption } from '../types';

export interface CountryState {
  countries: Country[],
  regionFilter: RegionFilterOption
}

const initialState: CountryState = {
  countries: [],
  regionFilter: 'All'
};

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    setCountries(state, action) {
      state.countries = action.payload;
    },
    setRegionFilter(state, action) {
      state.regionFilter = action.payload;
    }
  },
})

export const { setCountries, setRegionFilter } = countrySlice.actions
export default countrySlice.reducer