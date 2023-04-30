import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // colocando esse arquivo no direcionamento das rotas
import { Animal } from 'src/app/Animal'; // importanto a interface Animal.ts
import { ListService } from 'src/app/services/list.service'; // importando a service

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit{
  animal?: Animal;

  // inicializar no contructor o que será utilizado na classe
  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getAnimal()
  }
  ngOnInit(): void {

  }

  // VERIFICAR A ESTRUTURA DESSA REQUISIÇÃO
  getAnimal() {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.listService.getItem(id).subscribe((animal) => (this.animal = animal));
  }

}
