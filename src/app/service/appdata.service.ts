import { Injectable } from '@angular/core';
import { WeekEntity } from '../entity/weekentity';

@Injectable({
  providedIn: 'root'
})
export class AppdataService {

  constructor() { }

  getWeekDaysList(): WeekEntity[] {
    return [
      { code: 'SUN01', name: 'SUNDAY' },
      { code: 'MON02', name: 'MONDAY' },
      { code: 'TUE03', name: 'TUESDAY' },
      { code: 'WED04', name: 'WEDNESDAY' },
      { code: 'THI05', name: 'THIRSDAY' },
      { code: 'FRI06', name: 'FRIDAY' },
      { code: 'SAT07', name: 'SATURDAY' }
    ];
  }
}
