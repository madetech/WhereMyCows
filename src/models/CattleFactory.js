import { MaleCattle } from './MaleCattle';
import { FemaleCattle } from './FemaleCattle';

export class CattleFactory {
  static createFromFormData(formData) {
    const sex = formData.get('sex');
    return sex === 'Male' 
      ? MaleCattle.createFromFormData(formData)
      : FemaleCattle.createFromFormData(formData);
  }

  static getInitialData() {
    return [
      new FemaleCattle(
        1, 
        'COW001', 
        'Angus', 
        'North Pasture', 
        'Healthy', 
        false, 
        null,
        'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&auto=format&fit=crop&q=60'
      ),
      new MaleCattle(
        2, 
        'COW002', 
        'Hereford', 
        'South Pasture', 
        'Healthy',
        'https://images.unsplash.com/photo-1546445317-29f4545e9d53?w=800&auto=format&fit=crop&q=60'
      ),
      new FemaleCattle(
        3, 
        'COW003', 
        'Angus', 
        'East Field', 
        'Vet Check Needed', 
        true, 
        '2024-08-15',
        'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=800&auto=format&fit=crop&q=60'
      )
    ];
  }
} 