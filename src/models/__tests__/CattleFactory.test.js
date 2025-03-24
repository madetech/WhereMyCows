import { CattleFactory } from '../CattleFactory';

describe('CattleFactory', () => {
  test('creates male cattle from form data', () => {
    const formData = new FormData();
    formData.append('sex', 'Male');
    formData.append('tag', 'COW001');
    formData.append('breed', 'Angus');
    formData.append('location', 'North Pasture');
    formData.append('status', 'Healthy');
    
    const cattle = CattleFactory.createFromFormData(formData);
    
    expect(cattle.sex).toBe('Male');
    expect(cattle.tag).toBe('COW001');
    expect(cattle.breed).toBe('Angus');
    expect(cattle.location).toBe('North Pasture');
    expect(cattle.status).toBe('Healthy');
  });

  test('creates female cattle from form data', () => {
    const formData = new FormData();
    formData.append('sex', 'Female');
    formData.append('tag', 'COW001');
    formData.append('breed', 'Angus');
    formData.append('location', 'North Pasture');
    formData.append('status', 'Healthy');
    formData.append('isPregnant', 'true');
    formData.append('dueDate', '2024-08-15');
    
    const cattle = CattleFactory.createFromFormData(formData);
    
    expect(cattle.sex).toBe('Female');
    expect(cattle.tag).toBe('COW001');
    expect(cattle.breed).toBe('Angus');
    expect(cattle.location).toBe('North Pasture');
    expect(cattle.status).toBe('Healthy');
    expect(cattle.isPregnant).toBe(true);
    expect(cattle.dueDate).toBe('2024-08-15');
  });

  test('getInitialData returns array of cattle with correct types', () => {
    const cattle = CattleFactory.getInitialData();
    
    expect(cattle).toHaveLength(3);
    expect(cattle[0].sex).toBe('Female');
    expect(cattle[1].sex).toBe('Male');
    expect(cattle[2].sex).toBe('Female');
    
    // Check first female cattle
    expect(cattle[0].tag).toBe('COW001');
    expect(cattle[0].breed).toBe('Angus');
    expect(cattle[0].location).toBe('North Pasture');
    expect(cattle[0].status).toBe('Healthy');
    expect(cattle[0].isPregnant).toBe(false);
    expect(cattle[0].dueDate).toBeNull();
    
    // Check male cattle
    expect(cattle[1].tag).toBe('COW002');
    expect(cattle[1].breed).toBe('Hereford');
    expect(cattle[1].location).toBe('South Pasture');
    expect(cattle[1].status).toBe('Healthy');
    
    // Check second female cattle
    expect(cattle[2].tag).toBe('COW003');
    expect(cattle[2].breed).toBe('Angus');
    expect(cattle[2].location).toBe('East Field');
    expect(cattle[2].status).toBe('Vet Check Needed');
    expect(cattle[2].isPregnant).toBe(true);
    expect(cattle[2].dueDate).toBe('2024-08-15');
  });
}); 