import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  tags: string[] = [];
  selectedTag: string
  linkImage: string;
  statusCode: string;

  constructor(
    private appService: ModalService
  ) {}

  ngOnInit(): void {
    this.appService.getTags()
    .subscribe(tags => {
      console.log(tags);
      this.tags = tags;
    });
  }

  consultar() {
    console.log(this.selectedTag);
    this.linkImage = 'https://http.cat/' + Number(this.statusCode);
  }

}
