import { Component, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: false,
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.sass'
})
export class PaginationComponent {
@Input()PageSize:number
@Input()TotalCount:number
@Output()PageChanged=new EventEmitter()

OnChangePage(event:any){
this.PageChanged.emit(event);
}
}
