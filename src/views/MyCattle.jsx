import React, { useState } from 'react';
import CattleList from './CattleList';
import { CattleController } from '../controllers/CattleController';
import './MyCattle.css';

const MyCattle = () => {
  const [controller] = useState(() => new CattleController());
  const [cattle, setCattle] = useState(controller.getAllCattle());

  return (
    <div className="my-cattle">
      <CattleList 
        cattle={cattle}
        controller={controller}
        onCattleUpdate={setCattle}
      />
    </div>
  );
};

export default MyCattle; 