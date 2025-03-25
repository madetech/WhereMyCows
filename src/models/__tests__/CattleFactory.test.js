import { CattleFactory } from '../CattleFactory';

describe('CattleFactory', () => {
  test('creates male cattle from form data', () => {
    const formData = {
      sex: 'Male',
      tag: 'COW001',
      breed: 'Angus',
      location: 'North Pasture',
      status: 'Healthy',
      semenQuality: 'Good'
    };
    
    const cattle = CattleFactory.createFromFormData(formData);
    
    expect(cattle.sex).toBe('Male');
    expect(cattle.tag).toBe('COW001');
    expect(cattle.breed).toBe('Angus');
    expect(cattle.location).toBe('North Pasture');
    expect(cattle.status).toBe('Healthy');
    expect(cattle.semenQuality).toBe('Good');
  });

  test('creates female cattle from form data', () => {
    const formData = {
      sex: 'Female',
      tag: 'COW001',
      breed: 'Angus',
      location: 'North Pasture',
      status: 'Healthy',
      isPregnant: 'true',
      dueDate: '2024-08-15'
    };
    
    const cattle = CattleFactory.createFromFormData(formData);
    
    expect(cattle.sex).toBe('Female');
    expect(cattle.tag).toBe('COW001');
    expect(cattle.breed).toBe('Angus');
    expect(cattle.location).toBe('North Pasture');
    expect(cattle.status).toBe('Healthy');
    expect(cattle.isPregnant).toBe(true);
    expect(cattle.dueDate).toEqual(new Date('2024-08-15'));
  });

  test('getInitialData returns array of cattle with correct types', () => {
    const cattle = CattleFactory.getInitialData();
    
    expect(cattle).toHaveLength(25);
    expect(cattle[0].sex).toBe('Male');
    expect(cattle[1].sex).toBe('Male');
    expect(cattle[2].sex).toBe('Male');
    expect(cattle[3].sex).toBe('Male');
    expect(cattle[4].sex).toBe('Male');
    expect(cattle[5].sex).toBe('Female');
    
    // Check first male cattle
    expect(cattle[0].tag).toBe('M001');
    expect(cattle[0].breed).toBe('Angus');
    expect(cattle[0].location).toBe('North Pasture');
    expect(cattle[0].status).toBe('Healthy');
    expect(cattle[0].semenQuality).toBe('Good');
    
    // Check first female cattle
    expect(cattle[5].tag).toBe('F001');
    expect(cattle[5].breed).toBe('Angus');
    expect(cattle[5].location).toBe('North Pasture');
    expect(cattle[5].status).toBe('Healthy');
    expect(cattle[5].isPregnant).toBe(true);
    expect(cattle[5].dueDate).toEqual(new Date('2024-05-15'));
  });
}); 