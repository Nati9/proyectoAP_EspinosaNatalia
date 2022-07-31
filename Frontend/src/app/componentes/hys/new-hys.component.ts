import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { hys } from 'src/app/model/hys';
import { HySService } from 'src/app/service/hys.service';

@Component({
  selector: 'app-new-hys',
  templateUrl: './new-hys.component.html',
  styleUrls: ['./new-hys.component.css']
})
export class NewHysComponent implements OnInit {
  nombreSkill: string = '';
  percentSkill: number;
  imagenSkill: string = '';

  constructor(private hysService: HySService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const hysList = new hys(this.nombreSkill, this.percentSkill, this.imagenSkill);
    this.hysService.save(hysList).subscribe(
      data => {
        alert("Habilidad añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }


}
