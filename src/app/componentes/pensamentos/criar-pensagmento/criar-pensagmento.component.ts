import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensagmento',
  templateUrl: './criar-pensagmento.component.html',
  styleUrls: ['./criar-pensagmento.component.css'],
})
export class CriarPensagmentoComponent implements OnInit {
  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: '',
  };

  constructor() {}

  ngOnInit(): void {}

  criarPensamento(){
    alert("teste ")
  }

  cancelarPensamento(){
    alert("teste")
  }
}
