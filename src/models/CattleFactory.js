import { MaleCattle } from './MaleCattle';
import { FemaleCattle } from './FemaleCattle';

export class CattleFactory {
  static createFromFormData(formData) {
    const sex = formData.sex;
    // Generate a new ID based on the current timestamp
    const newId = Date.now();
    
    if (!formData.tag || !formData.breed || !formData.location) {
      throw new Error('Required fields are missing');
    }

    if (sex === 'Male') {
      return new MaleCattle(
        newId,
        formData.tag,
        formData.breed,
        formData.location,
        formData.status || 'Healthy',
        formData.imageUrl || null
      );
    } else if (sex === 'Female') {
      const isPregnant = formData.isPregnant === 'true';
      const dueDate = isPregnant && formData.dueDate ? new Date(formData.dueDate) : null;

      return new FemaleCattle(
        newId,
        formData.tag,
        formData.breed,
        formData.location,
        formData.status || 'Healthy',
        isPregnant,
        dueDate,
        formData.imageUrl || null
      );
    } else {
      throw new Error('Invalid sex value');
    }
  }

  static getInitialData() {
    return [
      // Male Cattle
      new MaleCattle(1, 'M001', 'Angus', 'North Pasture', 'Healthy', 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?w=800&auto=format&fit=crop&q=60'),
      new MaleCattle(2, 'M002', 'Hereford', 'South Pasture', 'Healthy', 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&auto=format&fit=crop&q=60'),
      new MaleCattle(3, 'M003', 'Brahman', 'East Pasture', 'Vet Check Needed', 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=800&auto=format&fit=crop&q=60'),
      new MaleCattle(4, 'M004', 'Angus', 'West Pasture', 'Healthy', 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&auto=format&fit=crop&q=60'),
      new MaleCattle(5, 'M005', 'Hereford', 'North Pasture', 'Healthy', 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?w=800&auto=format&fit=crop&q=60'),

      // Female Cattle - Various Pregnancy Statuses
      new FemaleCattle(6, 'F001', 'Angus', 'North Pasture', 'Healthy', true, new Date('2024-05-15'), 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&auto=format&fit=crop&q=60'),
      new FemaleCattle(7, 'F002', 'Hereford', 'South Pasture', 'Healthy', true, new Date('2024-06-01'), 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=800&auto=format&fit=crop&q=60'),
      new FemaleCattle(8, 'F003', 'Brahman', 'East Pasture', 'Healthy', true, new Date('2024-04-30'), 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&auto=format&fit=crop&q=60'),
      new FemaleCattle(9, 'F004', 'Angus', 'West Pasture', 'Vet Check Needed', false, null, 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=800&auto=format&fit=crop&q=60'),
      new FemaleCattle(10, 'F005', 'Hereford', 'North Pasture', 'Healthy', true, new Date('2024-07-15'), 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&auto=format&fit=crop&q=60'),

      // Additional Female Cattle
      new FemaleCattle(11, 'F006', 'Angus', 'South Pasture', 'Healthy', false, null, 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=800&auto=format&fit=crop&q=60'),
      new FemaleCattle(12, 'F007', 'Hereford', 'East Pasture', 'Healthy', true, new Date('2024-08-01'), 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&auto=format&fit=crop&q=60'),
      new FemaleCattle(13, 'F008', 'Brahman', 'West Pasture', 'Vet Check Needed', false, null, 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=800&auto=format&fit=crop&q=60'),
      new FemaleCattle(14, 'F009', 'Angus', 'North Pasture', 'Healthy', true, new Date('2024-09-15'), 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&auto=format&fit=crop&q=60'),
      new FemaleCattle(15, 'F010', 'Hereford', 'South Pasture', 'Healthy', false, null, 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=800&auto=format&fit=crop&q=60'),

      // More Female Cattle
      new FemaleCattle(16, 'F011', 'Angus', 'East Pasture', 'Healthy', true, new Date('2024-10-01'), 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&auto=format&fit=crop&q=60'),
      new FemaleCattle(17, 'F012', 'Hereford', 'West Pasture', 'Vet Check Needed', false, null, 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=800&auto=format&fit=crop&q=60'),
      new FemaleCattle(18, 'F013', 'Brahman', 'North Pasture', 'Healthy', true, new Date('2024-11-15'), 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&auto=format&fit=crop&q=60'),
      new FemaleCattle(19, 'F014', 'Angus', 'South Pasture', 'Healthy', false, null, 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=800&auto=format&fit=crop&q=60'),
      new FemaleCattle(20, 'F015', 'Hereford', 'East Pasture', 'Healthy', true, new Date('2024-12-01'), 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&auto=format&fit=crop&q=60'),

      // Final Set of Female Cattle
      new FemaleCattle(21, 'F016', 'Angus', 'West Pasture', 'Vet Check Needed', false, null, 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=800&auto=format&fit=crop&q=60'),
      new FemaleCattle(22, 'F017', 'Hereford', 'North Pasture', 'Healthy', true, new Date('2025-01-15'), 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&auto=format&fit=crop&q=60'),
      new FemaleCattle(23, 'F018', 'Brahman', 'South Pasture', 'Healthy', false, null, 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=800&auto=format&fit=crop&q=60'),
      new FemaleCattle(24, 'F019', 'Angus', 'East Pasture', 'Healthy', true, new Date('2025-02-01'), 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&auto=format&fit=crop&q=60'),
      new FemaleCattle(25, 'F020', 'Hereford', 'West Pasture', 'Healthy', false, null, 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=800&auto=format&fit=crop&q=60')
    ];
  }
} 