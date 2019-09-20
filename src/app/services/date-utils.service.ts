import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateUtilsService {
  constructor() {}
  public yearsSince(date: string): number {
    return Math.floor(
      (Date.now() - new Date(date).getTime()) / 12 / 30 / 24 / 3600 / 1000
    );
  }
}
