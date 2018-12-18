import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-badge [nzCount]="5">
      <a class="head-example"></a>
    </nz-badge>
    <nz-badge [nzCount]="0" nzShowZero>
      <a class="head-example"></a>
    </nz-badge>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
}
