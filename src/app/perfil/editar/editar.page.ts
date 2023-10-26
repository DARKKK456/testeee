import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EDITARPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  fileSelected: boolean = false;
  selectedFile: File | undefined;

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.fileSelected = true;
      this.selectedFile = event.target.files[0];
    } else {
      this.fileSelected = false;
      this.selectedFile = undefined;
    }
} }
