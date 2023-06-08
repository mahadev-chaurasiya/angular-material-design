import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { WeekEntity } from '../entity/weekentity';
import { AppdataService } from '../service/appdata.service';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {
  weekdays = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THIRSDAY', 'FRIDAY', 'SATURDAY'];
  filterDataObserval!: Observable<string[]>;
  formControl = new FormControl('');
  weekdaysList!:WeekEntity[];
  filterDataListObserval!: Observable<WeekEntity[]>;
  constructor(private service:AppdataService){

    this.weekdaysList = service.getWeekDaysList();
  }
  ngOnInit(): void {
    this.filterDataObserval = this.formControl.valueChanges.pipe(
      startWith(''),
      map(data => this.filter(data || ''))
    )

    this.filterDataListObserval = this.formControl.valueChanges.pipe(
      startWith(''),
      map(data => this.filterList(data || ''))
    )
  }

  private filter(searchedValue: string): string[] {
    console.log("filter data : ",searchedValue);
    const searchItem = searchedValue.toLocaleLowerCase();
    console.log("filter data toLocaleLowerCase : ",searchItem);
    return this.weekdays.filter(data => data.toLocaleLowerCase().includes(searchItem));
  }

  private filterList(searchedValue: string): WeekEntity[] {
    console.log("filter data : ",searchedValue);
    const searchItem = searchedValue.toLocaleLowerCase();
    console.log("filter data toLocaleLowerCase : ",searchItem);
    return this.weekdaysList.filter(data => 
      data.name.toLocaleLowerCase().includes(searchItem) ||
      data.code.toLocaleLowerCase().includes(searchItem)
      );
  }
}
