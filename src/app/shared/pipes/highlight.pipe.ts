import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(value: string, ...args: string[]): unknown {
    const [ searchTerm ] = args;
    // console.log('value', value);
    // console.log('args', searchTerm);
    if (searchTerm && value.toLowerCase().includes(searchTerm.toLowerCase())) {
      const safeHtml = `<span style="background-color: yellow;">${value}</span>`;
      return this.sanitizer.bypassSecurityTrustHtml(safeHtml);
    }
    return value;
  }

}
