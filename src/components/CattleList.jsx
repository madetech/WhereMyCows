import { useState } from 'react'
import { CattleController } from '../controllers/CattleController'
import { CattleCard } from '../views/CattleCard'
import { AddCattleForm } from '../views/AddCattleForm'
import './CattleList.css'

function CattleList() {
  const [controller] = useState(() => new CattleController())
  const [cattle, setCattle] = useState(controller.getAllCattle())
  const [showAddForm, setShowAddForm] = useState(false)

  const handleAddCattle = (formData) => {
    controller.addCattle(formData)
    setCattle(controller.getAllCattle())
    setShowAddForm(false)
  }

  return (
    <div className="cattle-list">
      <div className="cattle-header">
        <h2>My Cattle</h2>
        <button onClick={() => setShowAddForm(true)} className="add-button">
          Add New Cattle
        </button>
      </div>

      {showAddForm && (
        <AddCattleForm 
          onSubmit={handleAddCattle}
          onCancel={() => setShowAddForm(false)}
          breeds={controller.getBreeds()}
          locations={controller.getLocations()}
        />
      )}

      <div className="cattle-grid">
        {cattle.map((cow) => (
          <CattleCard key={cow.id} cattle={cow} />
        ))}
      </div>
    </div>
  )
}

export default CattleList 