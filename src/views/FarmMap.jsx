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
          top: `${20 + (index * 15)}%`,
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
      <div className="farm-boundary">
        {/* Farm Center */}
        <div
          className="farm-center"
          style={{
            top: '40%',
            left: '40%',
            width: '20%',
            height: '20%',
          }}
          onClick={() => handlePastureClick('Farm Center')}
          onKeyPress={(e) => e.key === 'Enter' && handlePastureClick('Farm Center')}
          role="button"
          tabIndex={0}
        >
          Farm Center
          {renderCowNametags('Farm Center')}
        </div>

        {/* North Pasture */}
        <div
          className="pasture"
          style={{
            top: '5%',
            left: '30%',
            width: '40%',
            height: '30%',
          }}
          onClick={() => handlePastureClick('North Pasture')}
          onKeyPress={(e) => e.key === 'Enter' && handlePastureClick('North Pasture')}
          role="button"
          tabIndex={0}
        >
          North Pasture
          {renderCowNametags('North Pasture')}
        </div>

        {/* South Pasture */}
        <div
          className="pasture"
          style={{
            top: '65%',
            left: '30%',
            width: '40%',
            height: '30%',
          }}
          onClick={() => handlePastureClick('South Pasture')}
          onKeyPress={(e) => e.key === 'Enter' && handlePastureClick('South Pasture')}
          role="button"
          tabIndex={0}
        >
          South Pasture
          {renderCowNametags('South Pasture')}
        </div>

        {/* East Field */}
        <div
          className="pasture"
          style={{
            top: '35%',
            left: '70%',
            width: '25%',
            height: '30%',
          }}
          onClick={() => handlePastureClick('East Field')}
          onKeyPress={(e) => e.key === 'Enter' && handlePastureClick('East Field')}
          role="button"
          tabIndex={0}
        >
          East Field
          {renderCowNametags('East Field')}
        </div>

        {/* West Field */}
        <div
          className="pasture"
          style={{
            top: '35%',
            left: '5%',
            width: '25%',
            height: '30%',
          }}
          onClick={() => handlePastureClick('West Field')}
          onKeyPress={(e) => e.key === 'Enter' && handlePastureClick('West Field')}
          role="button"
          tabIndex={0}
        >
          West Field
          {renderCowNametags('West Field')}
        </div>

        {/* Decorative Elements */}
        <div className="tree" style={{ top: '10%', left: '10%' }} />
        <div className="tree" style={{ top: '80%', left: '80%' }} />
        <div className="water" style={{ top: '20%', left: '80%' }} />
        <div className="water" style={{ top: '70%', left: '20%' }} />
        
        {/* Paths */}
        <div 
          className="path" 
          style={{ 
            top: '35%', 
            left: '30%', 
            width: '40%', 
            height: '2%' 
          }} 
        />
        <div 
          className="path" 
          style={{ 
            top: '50%', 
            left: '30%', 
            width: '2%', 
            height: '40%' 
          }} 
        />
      </div>

      <div className="map-legend">
        <div className="legend-section">
          <div className="legend-title">Locations</div>
          <div className="legend-item">
            <div className="legend-icon pasture-icon" />
            <span className="legend-text">Pasture</span>
          </div>
          <div className="legend-item">
            <div className="legend-icon farm-center-icon" />
            <span className="legend-text">Farm Center</span>
          </div>
        </div>

        <div className="legend-section">
          <div className="legend-title">Features</div>
          <div className="legend-item">
            <div className="legend-icon tree" />
            <span className="legend-text">Trees</span>
          </div>
          <div className="legend-item">
            <div className="legend-icon water" />
            <span className="legend-text">Water Source</span>
          </div>
          <div className="legend-item">
            <div className="legend-icon path" />
            <span className="legend-text">Path</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmMap; 