import { Component, OnInit } from '@angular/core';
import { Tarefa } from "../../models/Tarefa";
@Component({
  selector: 'app-lista-de-tarefas',
  templateUrl: './lista-de-tarefas.component.html',
  styleUrls: ['./lista-de-tarefas.component.css']
})
export class ListaDeTarefasComponent implements OnInit {
  lista: Tarefa[] = [];

  constructor() {
    this.lista.push(new Tarefa("Escovar o cabelo", false));
    this.lista.push(new Tarefa("Escovar o dente", false));
    this.lista.push(new Tarefa("Escovar a barba", false));
  }

  ngOnInit(): void {
  }

}
