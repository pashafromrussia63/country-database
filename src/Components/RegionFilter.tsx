import React, { useState } from 'react';
import { REGIONS as Regions } from '../config';
import { RegionFilterOption } from "../types";
import { ReactComponent as ChevronIcon } from '../icons/chevron.svg';
import './RegionFilter.scss';

function RegionFilter({ region, setRegion } : { region: RegionFilterOption, setRegion: (region : RegionFilterOption) => void }) {
  const [filterActive, setFilterActive] = useState(false);

  const toggleFilter = () => {
    setFilterActive(!filterActive);
  }

  const selectRegion = (region: RegionFilterOption) => {
    setFilterActive(false);
    setRegion(region);
  }

  const RegionFilterOptions = () => {
    if (filterActive) {
      return (
        <div className="regionFilter-options">
          {
            Regions.map(region => (
              <div
                key={region}
                onClick={() => selectRegion(region)}
              >
                {region}
              </div>
            ))
            }
        </div>
      )
    }
    return null;
  }

  return (
    <div className="regionFilter">
      <div 
        className="regionFilter-button"
        onClick={toggleFilter}
      >
        { region === 'All' ? 'Filter by Region' : region}
        <ChevronIcon className="regionFilter-icon" />
      </div>
      <RegionFilterOptions />
    </div>
  );
}

export default RegionFilter;
