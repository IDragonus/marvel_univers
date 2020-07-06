import { CreatorssvcService } from './services/creatorssvc.service';
import { ComicssvcService } from './services/comicssvc.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CharactersvcService } from './services/charactersvc.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ComicsComponent } from './components/comics/comics.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CreatorsComponent } from './components/creators/creators.component';
import { SeriesComponent } from './components/series/series.component';
import { CharacterSingleComponent } from './components/character-single/character-single.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FilterPipe } from './pipes/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterComicsPipe } from './pipes/filter-comics.pipe';
import { ComicSingleComponent } from './components/comic-single/comic-single.component';
import { CreatorComponent } from './components/creator/creator.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ComicsComponent,
    CharactersComponent,
    CreatorsComponent,
    SeriesComponent,
    CharacterSingleComponent,
    FilterPipe,
    FilterComicsPipe,
    ComicSingleComponent,
    CreatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [CharactersvcService, ComicssvcService, CreatorssvcService],
  bootstrap: [AppComponent],
})
export class AppModule {}
