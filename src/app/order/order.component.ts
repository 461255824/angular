import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  list:any[];
  constructor() { 
    this.list=[1,2,3,4,5,6,7,8,9]
  }
  childEvent(data){
    console.log('点击了什么',data)
  }
  ngOnInit() {
  }
  handle(ref:any):void{
    console.log(ref.index)
    console.log(ref.rowData)
    console.log(ref.innerHTML)
    ref.destroy()
  }
  tableData: any[] = [{
    name: '水爷',
    date: '2017-08-19',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '水爷',
    date: '2017-08-20',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '水爷',
    date: '2017-08-21',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '水爷',
    date: '2017-08-22',
    address: '上海市普陀区金沙江路 1510 弄',
  }]
}
