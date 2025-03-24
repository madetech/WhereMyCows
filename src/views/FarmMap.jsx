import React from 'react';
import './FarmMap.css';

const FarmMap = ({ locations, currentLocation, onLocationChange, cattle }) => {
  const handlePastureClick = (location) => {
    onLocationChange(location);
  };

  const getCowsInLocation = (location) => {
    return cattle.filter(cow => cow.location === location);
  };

  const renderCowNametags = (location) => {
    const cows = getCowsInLocation(location);
    return cows.map((cow, index) => (
      <div 
        key={cow.id}
        className="cow-nametag"
        style={{
          top: `${(index * 20) + 20}%`,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        {cow.tag}
      </div>
    ));
  };

  return (
    <div className="farm-map">
      <h2>Farm Layout</h2>
      <div className="map-container">
        <div className="farm-boundary">
          <div 
            className="pasture north-pasture"
            onClick={() => handlePastureClick('North Pasture')}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && handlePastureClick('North Pasture')}
          >
            <h3>North Pasture</h3>
            {renderCowNametags('North Pasture')}
            <div className={`location-indicator ${currentLocation === 'North Pasture' ? 'active' : ''}`}>
              {currentLocation === 'North Pasture' && 'Selected'}
            </div>
          </div>
          <div 
            className="pasture east-pasture"
            onClick={() => handlePastureClick('East Pasture')}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && handlePastureClick('East Pasture')}
          >
            <h3>East Pasture</h3>
            {renderCowNametags('East Pasture')}
            <div className={`location-indicator ${currentLocation === 'East Pasture' ? 'active' : ''}`}>
              {currentLocation === 'East Pasture' && 'Selected'}
            </div>
          </div>
          <div 
            className="pasture south-pasture"
            onClick={() => handlePastureClick('South Pasture')}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && handlePastureClick('South Pasture')}
          >
            <h3>South Pasture</h3>
            {renderCowNametags('South Pasture')}
            <div className={`location-indicator ${currentLocation === 'South Pasture' ? 'active' : ''}`}>
              {currentLocation === 'South Pasture' && 'Selected'}
            </div>
          </div>
          <div 
            className="pasture west-pasture"
            onClick={() => handlePastureClick('West Pasture')}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && handlePastureClick('West Pasture')}
          >
            <h3>West Pasture</h3>
            {renderCowNametags('West Pasture')}
            <div className={`location-indicator ${currentLocation === 'West Pasture' ? 'active' : ''}`}>
              {currentLocation === 'West Pasture' && 'Selected'}
            </div>
          </div>
          <div 
            className="farm-center"
            onClick={() => handlePastureClick('Farm Center')}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && handlePastureClick('Farm Center')}
          >
            <h3>Farm Center</h3>
            {renderCowNametags('Farm Center')}
            <div className={`location-indicator ${currentLocation === 'Farm Center' ? 'active' : ''}`}>
              {currentLocation === 'Farm Center' && 'Selected'}
            </div>
          </div>
        </div>
      </div>
      <div className="map-legend">
        <div className="legend-item">
          <div className="legend-color active"></div>
          <span>Selected Location</span>
        </div>
        <div className="legend-item">
          <div className="legend-color pasture"></div>
          <span>Pasture</span>
        </div>
      </div>
    </div>
  );
};

export default FarmMap; 