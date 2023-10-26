import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

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
  }

  uploadFile() {
    if (this.selectedFile) {
      // Aqui você pode implementar a lógica para fazer o upload do arquivo.
      // Você pode usar serviços HTTP para enviar o arquivo para um servidor, por exemplo.
      // this.fileService.uploadFile(this.selectedFile).subscribe(response => {
      //   console.log('Arquivo enviado com sucesso!', response);
      // });
    }

}}
