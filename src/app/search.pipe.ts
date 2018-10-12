import { Pipe, PipeTransform } from '@angular/core';
import { element } from '@angular/core/src/render3/instructions';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform<T extends object>(elements: T[], filter: T): Array<T> {

      if (!elements || !filter) {
        return elements;
      }
      // tslint:disable-next-line:no-shadowed-variable
      return elements.filter(element => this.applyFilter(element, filter));
      }
    // tslint:disable-next-line:no-shadowed-variable
    private applyFilter<T>(element: T, filter: T): boolean {
      for (const field in filter) {
        if (this.validInput(filter[field]) && this.validInput(element[field])) {
          if (!element[field].toString().toLowerCase().includes(filter[field].toString().toLowerCase())) {
            return false;
          }
        }
      }
      return true;
    }
    private validInput<T>(input: T): boolean {
      return input !== undefined && input !== null;
    }
}