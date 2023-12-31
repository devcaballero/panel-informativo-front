import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dolar',
  templateUrl: './dolar.component.html',
  styleUrls: ['./dolar.component.css']
})
export class DolarComponent implements OnInit {
  oficial: string | undefined;
  isLoading: boolean = true;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    const url = 'https://price-webscraper.onrender.com/api/v1/dolar-oficial';
    this.apiService.getData(url).subscribe(
      (data) => {
        this.oficial = data.replace(".", ",");
        this.isLoading = false; 
      },
      (error) => {
        console.log('Error al obtener la cotizacion del dolar oficial:', error);
        this.isLoading = false; 
      }
    );
  }

}