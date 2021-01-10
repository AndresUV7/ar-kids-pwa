import { Component, OnInit, ViewChild } from '@angular/core';
import { Historial } from '../models/Historial';
import { HistorialService } from '../services/historial.service';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { auditTime, tap } from 'rxjs/operators';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

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
  private historial: Historial[];


  constructor(private historialService: HistorialService) {
  this.historialService.selectHistorial(localStorage.getItem("_id"))
      .subscribe((res) => {
        this.historial = res;
        console.log(this.historial);
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
    return d.substring(0,10)+' / '+d.substring(11,16);
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

