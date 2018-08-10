import { Subscription } from 'rxjs/Subscription';
import { Component, Inject, LOCALE_ID, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IKeyboardLayout, MatKeyboardComponent, MatKeyboardRef, MatKeyboardService } from '@ngx-material-keyboard/core';
import { DataService } from './data.service';
import { ModalService } from './modal.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {

  private _enterSubscription: Subscription;
  private _keyboardRef: MatKeyboardRef<MatKeyboardComponent>;
  private _zoekterm: string;

  public first = true;
  public resultaten = [];
  public boekResultaat = [];
  public resultaat;
  displayedColumns: string[] = ['check', 'subloc', 'shelfmark', 'publication', 'status'];


  get zoekterm(): string {
    return this._zoekterm;
  }

  darkTheme: boolean;
  duration: number;
  isDebug: boolean;
  defaultLocale: string;
  layout: string;
  layouts: {
    name: string;
    layout: IKeyboardLayout;
  }[];
  zoekValue = '';

  get keyboardVisible(): boolean {
    return this._keyboardService.isOpened;
  }

  constructor(private _keyboardService: MatKeyboardService,
    @Inject(LOCALE_ID) public locale, private _dataService: DataService,
    private _modalService: ModalService
  ) { }

  ngOnInit() {
    this.defaultLocale = ` ${this.locale}`.slice(1);
  }

  ngOnDestroy() {
    this.closeCurrentKeyboard();
  }

  submitForm(form?: NgForm) {
    const temp = form.controls["zoekterm"].value;
    this._zoekterm = temp.replace(/\s/g, "%20");

    if (typeof this._zoekterm !== "undefined") {
      this._dataService.search(this._zoekterm)
        .subscribe(response => {
          console.log(response);
          if (response.aquabrowser.results !== undefined) {
            this.resultaten = response.aquabrowser.results[0].result;
          }
          else {
            this.resultaten.length = 0;
          }
          this.first = false;
        });
    }
  }

  isUndefined(authors) {
    return (typeof authors === "undefined");
  }

  openKeyboard(locale = this.defaultLocale) {
    this._keyboardRef = this._keyboardService.open(locale, {
      darkTheme: this.darkTheme,
      duration: this.duration,
      isDebug: this.isDebug
    });
    this._enterSubscription = this._keyboardRef.instance.enterClick.subscribe(() => {
      this.submitForm();
    });
  }

  closeCurrentKeyboard() {
    if (this._keyboardRef) {
      this._keyboardRef.dismiss();
    }

    if (this._enterSubscription) {
      this._enterSubscription.unsubscribe();
    }
  }

  isArray(obj: any) {
    return Array.isArray(obj)
  }

  getUrl(url: any) {
    if (url.coverimages != undefined) {
      const temp = url.coverimages[0].coverimage[0]._.replace(/&amp;/g, "&").replace('small', 'large');
      return temp;
    }
    else
      return ("assets/noimage.png");
  }

  getAuthor(a: any) {
    if (a != undefined) {
      if (a.authors[0]['main-author'] != undefined) {
        return a.authors[0]['main-author'][0]._;
      }
      else
        return a.authors[0].author[0]._;
    }
  }
  openModal(id: string, resultaat: any) {
    console.log(resultaat);
    this.resultaat = resultaat;
    this.getAvailability(resultaat.frabl[0]._);
    this._modalService.open(id, resultaat['detail-page']);
  }

  closeModal(id: string) {
    this._modalService.close(id);
  }

  getAvailability(frabl: string) {
    this._dataService.getAvailability(frabl).subscribe(
      response => {
        this.boekResultaat = response.aquabrowser.locations[0].location[0].location[0].items[0].item;
        console.log(response.aquabrowser.locations[0].location[0].location[0].items[0]);
      });
  }

  isAvailable(availabilty: string) {
    console.log(availabilty);
    return availabilty;
  }

  getIcon(icon: string) {
    if (icon.toLowerCase().includes("aanwezig"))
      return true;
    else return false;
  }
}