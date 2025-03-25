import { Cattle } from '../Cattle';
import { MaleCattle } from '../MaleCattle';
import { FemaleCattle } from '../FemaleCattle';
import { CattleFactory } from '../CattleFactory';

describe('Cattle', () => {
  test('creates a cattle instance with all properties', () => {
    const cattle = new Cattle(1, 'Male', 'COW001', 'Angus', 'North Pasture', 'Healthy', 'image.jpg');
    
    expect(cattle.id).toBe(1);
    expect(cattle.tag).toBe('COW001');
    expect(cattle.breed).toBe('Angus');
    expect(cattle.location).toBe('North Pasture');
    expect(cattle.status).toBe('Healthy');
    expect(cattle.imageUrl).toBe('image.jpg');
  });

  test('creates a cattle instance without image', () => {
    const cattle = new Cattle(1, 'Male', 'COW001', 'Angus', 'North Pasture', 'Healthy');
    
    expect(cattle.imageUrl).toBeNull();
  });

  test('getStatusClass returns lowercase status with spaces replaced by hyphens', () => {
    const cattle = new Cattle(1, 'Male', 'COW001', 'Angus', 'North Pasture', 'Vet Check Needed');
    
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
    const formData = {
      sex: 'Male',
      tag: 'COW001',
      breed: 'Angus',
      location: 'North Pasture',
      status: 'Healthy'
    };
    
    const cattle = CattleFactory.createFromFormData(formData);
    
    expect(cattle.tag).toBe('COW001');
    expect(cattle.breed).toBe('Angus');
    expect(cattle.location).toBe('North Pasture');
    expect(cattle.status).toBe('Healthy');
    expect(cattle.sex).toBe('Male');
  });

  test('creates a male cattle from form data with default status', () => {
    const formData = {
      sex: 'Male',
      tag: 'COW001',
      breed: 'Angus',
      location: 'North Pasture'
    };
    
    const cattle = CattleFactory.createFromFormData(formData);
    
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
      new Date('2024-08-15'),
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
    expect(cattle.dueDate).toEqual(new Date('2024-08-15'));
  });

  test('creates a female cattle from form data', () => {
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
    
    expect(cattle.tag).toBe('COW001');
    expect(cattle.breed).toBe('Angus');
    expect(cattle.location).toBe('North Pasture');
    expect(cattle.status).toBe('Healthy');
    expect(cattle.sex).toBe('Female');
    expect(cattle.isPregnant).toBe(true);
    expect(cattle.dueDate).toEqual(new Date('2024-08-15'));
  });

  test('creates a female cattle from form data with default status', () => {
    const formData = {
      sex: 'Female',
      tag: 'COW001',
      breed: 'Angus',
      location: 'North Pasture',
      isPregnant: 'false'
    };
    
    const cattle = CattleFactory.createFromFormData(formData);
    
    expect(cattle.status).toBe('Healthy');
    expect(cattle.isPregnant).toBe(false);
    expect(cattle.dueDate).toBeNull();
  });

  test('getPregnancyStatusClass returns correct class', () => {
    const pregnantCattle = new FemaleCattle(1, 'COW001', 'Angus', 'North Pasture', 'Healthy', true, new Date('2025-08-15'));
    const notPregnantCattle = new FemaleCattle(1, 'COW002', 'Angus', 'North Pasture', 'Healthy', false, null);
    
    expect(pregnantCattle.getPregnancyStatusClass()).toBe('pregnant');
    expect(notPregnantCattle.getPregnancyStatusClass()).toBe('not-pregnant');
  });

  test('formatDueDate returns formatted date or N/A', () => {
    const pregnantCattle = new FemaleCattle(1, 'COW001', 'Angus', 'North Pasture', 'Healthy', true, new Date('2024-08-15'));
    const notPregnantCattle = new FemaleCattle(1, 'COW002', 'Angus', 'North Pasture', 'Healthy', false, null);
    
    expect(pregnantCattle.formatDueDate()).toBe('8/15/2024');
    expect(notPregnantCattle.formatDueDate()).toBe('N/A');
  });
}); 