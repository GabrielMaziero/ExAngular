import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  lista: string[] = ["Tatu", "Papagaio", "Cavalo"]
  animal: string;
  addAnimal() {
    this.lista.push(this.animal);
    this.animal = '';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
