import { Component, OnInit, ViewChild } from '@angular/core';
import { Historial } from '../models/Historial';
import { HistorialService } from '../services/historial.service';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { auditTime, tap } from 'rxjs/operators';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Juego } from '../models/Juego';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})

export class HistorialComponent {

  array = [];
  sum = 10;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = "";
  modalOpen = false;
  aux: string;
  aux2: string;
  private historial: any[];


  constructor(private historialService: HistorialService) {
    this.aux = "";
    this.aux2 = "";
    this.historialService.selectHistorial(localStorage.getItem("_id"))
      .subscribe((res) => {
        this.historial = res;
        console.log("histo",this.historial)
        for (let index = 0; index < this.historial.length; index++) {
          for (let index2 = 0; index2< this.historial[index].partidas.length; index2++) {
            this.historial[index].partidas[index2].nombre = this.historial[index].nombre;           
          }
        }
        let result = this.historial.map(a => a.partidas);
        console.log("histo2",result)
        var merged = [].concat.apply([], result);
        console.log(merged);
        this.historial = merged;
        console.log("histo3", this.historial)
        this.historial.sort((d1, d2) => new Date(d1.fecha_inicio).getTime() - new Date(d2.fecha_inicio).getTime());
        this.historial.reverse();
        this.array = this.historial.slice(0,27);
      })
  }

  addItems(startIndex, endIndex, _method) {
    for (let i = 0; i < this.sum; ++i) {
      this.array[_method]([i, " ", this.generateWord()].join(""));
    }
  }

  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, "push");
  }

  prependItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, "unshift");
  }

  convertir(d){
    return new Date(d).toLocaleString('es-US', { timeZone: 'America/Guayaquil' });
  }

  arr(s: string){
    return s.replace(/\s/g, '')
  }

  onScrollDown(ev) {
    console.log("scrolled down!!", ev);

    // add another 20 items
    const start = this.sum;
    this.sum += 10;
    
    this.array = this.array.concat(this.historial.slice(start, this.sum))
    console.log(this.array)
    this.direction = "down";
  }

  onUp(ev) {
    console.log("scrolled up!", ev);
    // const start = this.sum;
    // this.sum += 10;
    // // this.array.unshift(this.historial.slice(start, this.sum))

    // this.direction = "up";
  }
  generateWord() {
    return 'x';
  }

  toggleModal() {
    this.modalOpen = !this.modalOpen;
  }

  onScroll() {
    console.log('scrolled!!');
  }

  convertirDate(d: string){

    if (this.aux === d.substring(0,10)+' / '+d.substring(11,16)){
      
      return "";
    }else{
      
      this.aux = d.substring(0,10)+' / '+d.substring(11,16);
      return this.aux;
    }
  }
  
  convertirDate2(d: string){

    let h = Number(d.substring(11,13))-5;
    let hs;
    if (h<10){
      hs = "0"+ h;
    }else{
      hs = h;
    }

    this.aux = d.substring(0,10)+' / '+hs+d.substring(13,16);
    return this.aux;

  }
}

// export class HistorialsDataSource extends DataSource<Historial | undefined> {
//   private cachedHistorials = Array.from<Historial>({ length: 0 });
//   private dataStream = new BehaviorSubject<(Historial | undefined)[]>(this.cachedHistorials);
//   private subscription = new Subscription();
//   private historial: Historial[];
//   private pageSize = 10;
//   private lastPage = 0;

//   private _length = 250;
//   private _pageSize = 10;
//   private _cachedData = Array.from<Historial>({length: this._length});
//   private _fetchedPages = new Set<number>();
//   private _dataStream = new BehaviorSubject<(Historial | undefined)[]>(this._cachedData);
//   private _subscription = new Subscription();

//   constructor(private historialService: HistorialService) {
//     super();
//     this.historialService.selectHistorial(localStorage.getItem("_id"))
//       .subscribe((res) => {
//         this.historial = res;
//         console.log(this.historial);
//       })
//     // Start with some data.
//     this._fetchHistorialPage();
//   }

//   // connect(collectionViewer: CollectionViewer): Observable<(Historial | undefined)[] | ReadonlyArray<Historial | undefined>> {
//   //   this.subscription.add(collectionViewer.viewChange.subscribe(range => {

//   //     const currentPage = this._getPageForIndex(range.end);

//   //     if (currentPage && range) {
//   //       console.log(currentPage, this.lastPage);
//   //     }

//   //     if (currentPage > this.lastPage) {
//   //       this.lastPage = currentPage;
//   //       this._fetchHistorialPage();
//   //     }
//   //   }));
//   //   return this.dataStream;
//   // }

//   connect(collectionViewer: CollectionViewer): Observable<(Historial | undefined)[]> {
//     this._subscription.add(collectionViewer.viewChange.subscribe(range => {
//       const startPage = this._getPageForIndex(range.start);
//       const endPage = this._getPageForIndex(range.end - 1);
//       for (let i = startPage; i <= endPage; i++) {
//         this._fetchPage(i);
//       }
//     }));
//     return this._dataStream;
//   }

//   // disconnect(collectionViewer: CollectionViewer): void {
//   //   this.subscription.unsubscribe();
//   // }

//   disconnect(): void {
//     this._subscription.unsubscribe();
//   }

//   private _getPageForIndex(index: number): number {
//     return Math.floor(index / this._pageSize);
//   }

//   private _fetchPage(page: number) {
//     if (this._fetchedPages.has(page)) {
//       return;
//     }
//     this._fetchedPages.add(page);

//     // Use `setTimeout` to simulate fetching data from server.
//     setTimeout(() => {
//       this._cachedData = this.historial;
//       this._dataStream.next(this._cachedData);
//     }, Math.random() * 1000 + 200);
//   }

//   private _fetchHistorialPage(): void {
//     for (let i = 0; i < this.pageSize; ++i) {
//         this.cachedHistorials = this.cachedHistorials.concat(this.historial);
//         this.dataStream.next(this.cachedHistorials);
//     }
//   }

//   // private _getPageForIndex(i: number): number {
//   //   return Math.floor(i / this.pageSize);
//   // }

// }

