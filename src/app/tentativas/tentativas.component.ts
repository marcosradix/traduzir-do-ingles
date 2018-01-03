import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() tentativa:number;
  public coracoes: Array<Coracao> = [new Coracao(true),new Coracao(true),new Coracao(true)];
  constructor() {}

  ngOnInit() {
  }
  ngOnChanges(){
    console.log("Tentativas ", this.tentativa);
    if(this.tentativa !== this.coracoes.length && this.tentativa > -1){
      let indice = this.coracoes.length - this.tentativa;
      this.coracoes[indice - 1].cheio = false;
      console.log("indice ",indice);
    }else{
      this.coracoes[0].cheio = true;
      this.coracoes[1].cheio = true;
      this.coracoes[2].cheio = true;
    }
   }
}
