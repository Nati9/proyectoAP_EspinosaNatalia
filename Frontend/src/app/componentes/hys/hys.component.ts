import { Component, OnInit } from '@angular/core';
import { hys } from 'src/app/model/hys';
import { HySService } from 'src/app/service/hys.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  hysList:hys[];

  constructor(private hysService: HySService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.hysService.lista().subscribe(data => { this.hysList = data; })
  }

  delete(id?: number){
    if(id!= undefined){
      this.hysService.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar la habilidad");
        }
      )
    }
  }
}