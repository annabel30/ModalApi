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
  message: string;

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
    if (this.selectedTag == null) {
      this.linkImage = 'https://cataas.com/cat/says/' + this.message;
    } else {
      this.linkImage = 'https://cataas.com/cat/' + this.selectedTag;
    }
  }

}
