import { useState } from 'react'
import { CattleCard } from './CattleCard'
import { AddCattleForm } from './AddCattleForm'
import FarmMap from './FarmMap'
import './CattleList.css'

function CattleList({ cattle = [], controller, onCattleUpdate }) {
  const [showAddForm, setShowAddForm] = useState(false)
  const [currentLocation, setCurrentLocation] = useState('Farm Center')
  const [locations] = useState(controller.getLocations())

  const handleAddCattle = (formData) => {
    const newCattle = controller.addCattle(formData)
    onCattleUpdate([...cattle, newCattle])
    setShowAddForm(false)
  }

  const handleLocationChange = (location) => {
    setCurrentLocation(location)
  }

  const filteredCattle = currentLocation === 'Farm Center' 
    ? cattle 
    : (cattle || []).filter(cow => cow.location === currentLocation)

  return (
    <div className="cattle-list">
      <FarmMap 
        locations={locations}
        currentLocation={currentLocation}
        onLocationChange={handleLocationChange}
        cattle={cattle || []}
      />

      <div className="cattle-header">
        <h2>My Cattle</h2>
        <div className="cattle-filters">
          <span className="location-filter">
            {currentLocation === 'Farm Center' ? 'All Locations' : currentLocation}
          </span>
          <button onClick={() => setShowAddForm(true)} className="add-button">
            Add New Cattle
          </button>
        </div>
      </div>

      {showAddForm && (
        <AddCattleForm 
          onSubmit={handleAddCattle}
          onCancel={() => setShowAddForm(false)}
          breeds={controller.getBreeds()}
          locations={locations}
        />
      )}

      <div className="cattle-grid">
        {(filteredCattle || []).map((cow) => (
          <CattleCard key={cow.id} cattle={cow} />
        ))}
      </div>
    </div>
  )
}

export default CattleList 