import { Cattle } from '../Cattle';
import { MaleCattle } from '../MaleCattle';
import { FemaleCattle } from '../FemaleCattle';

describe('Cattle', () => {
  test('creates a cattle instance with all properties', () => {
    const cattle = new Cattle(1, 'COW001', 'Angus', 'North Pasture', 'Healthy', 'image.jpg');
    
    expect(cattle.id).toBe(1);
    expect(cattle.tag).toBe('COW001');
    expect(cattle.breed).toBe('Angus');
    expect(cattle.location).toBe('North Pasture');
    expect(cattle.status).toBe('Healthy');
    expect(cattle.imageUrl).toBe('image.jpg');
  });

  test('creates a cattle instance without image', () => {
    const cattle = new Cattle(1, 'COW001', 'Angus', 'North Pasture', 'Healthy');
    
    expect(cattle.imageUrl).toBeNull();
  });

  test('getStatusClass returns lowercase status with spaces replaced by hyphens', () => {
    const cattle = new Cattle(1, 'COW001', 'Angus', 'North Pasture', 'Vet Check Needed');
    
    expect(cattle.getStatusClass()).toBe('vet-check-needed');
  });
});

describe('MaleCattle', () => {
  test('creates a male cattle instance with all properties', () => {
    const cattle = new MaleCattle(1, 'COW001', 'Angus', 'North Pasture', 'Healthy', 'image.jpg');
    
    expect(cattle.id).toBe(1);
    expect(cattle.tag).toBe('COW001');
    expect(cattle.breed).toBe('Angus');
    expect(cattle.location).toBe('North Pasture');
    expect(cattle.status).toBe('Healthy');
    expect(cattle.imageUrl).toBe('image.jpg');
    expect(cattle.sex).toBe('Male');
  });

  test('creates a male cattle from form data', () => {
    const formData = new FormData();
    formData.append('tag', 'COW001');
    formData.append('breed', 'Angus');
    formData.append('location', 'North Pasture');
    formData.append('status', 'Healthy');
    
    const cattle = MaleCattle.createFromFormData(formData);
    
    expect(cattle.tag).toBe('COW001');
    expect(cattle.breed).toBe('Angus');
    expect(cattle.location).toBe('North Pasture');
    expect(cattle.status).toBe('Healthy');
    expect(cattle.sex).toBe('Male');
  });

  test('creates a male cattle from form data with default status', () => {
    const formData = new FormData();
    formData.append('tag', 'COW001');
    formData.append('breed', 'Angus');
    formData.append('location', 'North Pasture');
    
    const cattle = MaleCattle.createFromFormData(formData);
    
    expect(cattle.status).toBe('Healthy');
  });
});

describe('FemaleCattle', () => {
  test('creates a female cattle instance with all properties', () => {
    const cattle = new FemaleCattle(
      1, 
      'COW001', 
      'Angus', 
      'North Pasture', 
      'Healthy', 
      true, 
      '2024-08-15',
      'image.jpg'
    );
    
    expect(cattle.id).toBe(1);
    expect(cattle.tag).toBe('COW001');
    expect(cattle.breed).toBe('Angus');
    expect(cattle.location).toBe('North Pasture');
    expect(cattle.status).toBe('Healthy');
    expect(cattle.imageUrl).toBe('image.jpg');
    expect(cattle.sex).toBe('Female');
    expect(cattle.isPregnant).toBe(true);
    expect(cattle.dueDate).toBe('2024-08-15');
  });

  test('creates a female cattle from form data', () => {
    const formData = new FormData();
    formData.append('tag', 'COW001');
    formData.append('breed', 'Angus');
    formData.append('location', 'North Pasture');
    formData.append('status', 'Healthy');
    formData.append('isPregnant', 'true');
    formData.append('dueDate', '2024-08-15');
    
    const cattle = FemaleCattle.createFromFormData(formData);
    
    expect(cattle.tag).toBe('COW001');
    expect(cattle.breed).toBe('Angus');
    expect(cattle.location).toBe('North Pasture');
    expect(cattle.status).toBe('Healthy');
    expect(cattle.sex).toBe('Female');
    expect(cattle.isPregnant).toBe(true);
    expect(cattle.dueDate).toBe('2024-08-15');
  });

  test('creates a female cattle from form data with default status', () => {
    const formData = new FormData();
    formData.append('tag', 'COW001');
    formData.append('breed', 'Angus');
    formData.append('location', 'North Pasture');
    formData.append('isPregnant', 'false');
    
    const cattle = FemaleCattle.createFromFormData(formData);
    
    expect(cattle.status).toBe('Healthy');
    expect(cattle.isPregnant).toBe(false);
    expect(cattle.dueDate).toBeNull();
  });

  test('getPregnancyStatusClass returns correct class', () => {
    const pregnantCattle = new FemaleCattle(1, 'COW001', 'Angus', 'North Pasture', 'Healthy', true, '2024-08-15');
    const notPregnantCattle = new FemaleCattle(1, 'COW002', 'Angus', 'North Pasture', 'Healthy', false, null);
    
    expect(pregnantCattle.getPregnancyStatusClass()).toBe('pregnant');
    expect(notPregnantCattle.getPregnancyStatusClass()).toBe('not-pregnant');
  });

  test('formatDueDate returns formatted date or N/A', () => {
    const pregnantCattle = new FemaleCattle(1, 'COW001', 'Angus', 'North Pasture', 'Healthy', true, '2024-08-15');
    const notPregnantCattle = new FemaleCattle(1, 'COW002', 'Angus', 'North Pasture', 'Healthy', false, null);
    
    expect(pregnantCattle.formatDueDate()).toBe('8/15/2024');
    expect(notPregnantCattle.formatDueDate()).toBe('N/A');
  });
}); 