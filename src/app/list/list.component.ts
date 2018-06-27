import { Component,EventEmitter, OnInit , Input,Output} from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() list;
  @Output('childEvent') out = new EventEmitter()
  constructor() { 

  }
    
  ngOnInit() {
  }
  outData(data){
    console.log('子组件内部')
    //向外输出数据
    this.out.emit(data)
  }

}
