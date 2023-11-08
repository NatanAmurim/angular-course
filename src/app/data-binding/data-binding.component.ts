import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {

  currentValue: string = "";
  savedValue: string = "";
  isMouseOver: boolean = false;
  interpolation: string = "No toca fitas do meu carro.";
  urlImage: string = "http://lorempixel.com.br/500/400/?15000"

  courseName : string = "Angular";

  getValue(){
    return 1;
  }

  getLike(){
    return true;
  }

  clickButton(){
    alert("Clicou!");
  }

  onKeyUp(event: KeyboardEvent ){
    this.currentValue = (<HTMLInputElement>event.target).value;
    console.log((<HTMLInputElement>event.target).value);
  }

  saveValue(event: any ){
    this.savedValue = event.value;
    console.log(this.savedValue + ' foi salvo!');
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }
}
