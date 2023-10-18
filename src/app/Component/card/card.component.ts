import { Component, OnInit } from '@angular/core';
import { CardData } from 'src/app/card';
import { CardService } from 'src/app/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  cardData:CardData |null =null 
  constructor(private _CardService:CardService){}

  deleteProduct(id:string){
    this._CardService.DeleteAllProduct(id).subscribe({
      next:(response)=>{
        this.cardData =response
          console.log(response);
          
      }
    })
  }
ngOnInit(): void {
  this._CardService.getAllProduct().subscribe({

    next:(response:CardData)=>{
      this.cardData = response
      console.log(response);
      
    }
  })
}

}
