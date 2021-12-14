import { Component, Input, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Contractor } from 'src/assets/interfaces/contractor';

@Component({
  selector: 'app-table-results',
  templateUrl: './table-results.component.html',
  styleUrls: ['./table-results.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class TableResultsComponent implements OnInit {
  @Input() isMobile!: boolean;

  public dataSource = ELEMENT_DATA;
  columnsToDisplay = [
    'name',
    'type',
    'startDate',
    'ammount',
    'status',
    'actions',
  ];
  public namesAndData = [
    { nameColData: 'name', nameDisplay: 'Contractor Name' },
    { nameColData: 'type', nameDisplay: 'Type' },
    { nameColData: 'startDate', nameDisplay: 'Start Date' },
    { nameColData: 'ammount', nameDisplay: 'Ammount' },
    { nameColData: 'status', nameDisplay: 'Status' },
    { nameColData: 'actions', nameDisplay: 'Actions' },
  ];
  public expandedElement: Contractor | null;

  constructor() {
    this.expandedElement = {
      name: '',
      ammount: '',
      startDate: '',
      type: '',
      status: '',
      actions: '',
      imgSrc: '',
    };
  }

  ngOnInit(): void {}
}



const ELEMENT_DATA: Contractor[] = [
  {
    ammount: '$200 USD',
    name: 'Darlene Robertson',
    type: 'Traditional',
    startDate: 'Mar 4 ,2021',
    status: 'Active',
    actions: 'more_vert',
    imgSrc: './../../../assets/images/persona_1.svg',
  },
  {
    name: 'Darlene Robertson',
    type: 'Traditional',
    startDate: 'Mar 4 ,2021',
    ammount: '$200 USD',
    status: 'Active',
    actions: 'more_vert',
    imgSrc: './../../../assets/images/persona_2.svg',
  },
  {
    ammount: '$200 USD',
    name: 'Darlene Robertson',
    type: 'Traditional',
    startDate: 'Mar 4 ,2021',
    status: 'Signature Pending',
    actions: 'more_vert',
    imgSrc: './../../../assets/images/persona_3.svg',
  },
];
