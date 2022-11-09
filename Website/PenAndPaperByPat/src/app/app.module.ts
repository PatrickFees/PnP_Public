import { NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { StarMapComponent } from './star-map/star-map.component';
import { NewHeavenSystemNew } from './star-map/new-heaven-system-new/new-heaven-system-new.component';
import { EarthSystemNewComponent } from './star-map/earth-system-new/earth-system-new.component';
import { WarZoneSystemComponent } from './star-map/war-zone-system/war-zone-system.component';
import { SyncSystemComponent } from './star-map/sync-system/sync-system.component';
import { ForbiddenSystemComponent } from './star-map/forbidden-system/forbidden-system.component';
import { TedorComponent } from './star-map/new-heaven-system-new/locationsInSpace/tedor/tedor.component';
import { VatraComponent } from './star-map/new-heaven-system-new/locationsInSpace/vatra/vatra.component';
import { SperrzoneZweiComponent } from './star-map/new-heaven-system-new/locationsInSpace/sperrzone-zwei/sperrzone-zwei.component';
import { RastlinaComponent } from './star-map/new-heaven-system-new/locationsInSpace/rastlina/rastlina.component';
import { BumbaComponent } from './star-map/new-heaven-system-new/locationsInSpace/bumba/bumba.component';
import { SattaComponent } from './star-map/new-heaven-system-new/locationsInSpace/satta/satta.component';
import { JuengerGottesComponent } from './star-map/new-heaven-system-new/locationsInSpace/juenger-gottes/juenger-gottes.component';
import { SperrzoneDreiComponent } from './star-map/new-heaven-system-new/locationsInSpace/sperrzone-drei/sperrzone-drei.component';
import { NovaComponent } from './star-map/earth-system-new/locationsInSpace/nova/nova.component';
import { SperrzoneEinsComponent } from './star-map/earth-system-new/locationsInSpace/sperrzone-eins/sperrzone-eins.component';
import { ErdeComponent } from './star-map/earth-system-new/locationsInSpace/erde/erde.component';
import { TutkimumComponent } from './star-map/earth-system-new/locationsInSpace/tutkimum/tutkimum.component';
import { MondComponent } from './star-map/earth-system-new/locationsInSpace/mond/mond.component';
import { GareComponent } from './star-map/earth-system-new/locationsInSpace/gare/gare.component';
import { SchinComponent } from './star-map/earth-system-new/locationsInSpace/schin/schin.component';
import { MarsComponent } from './star-map/earth-system-new/locationsInSpace/mars/mars.component';
import { RochaComponent } from './star-map/earth-system-new/locationsInSpace/rocha/rocha.component';
import { SaturnComponent } from './star-map/earth-system-new/locationsInSpace/saturn/saturn.component';
import { PiticComponent } from './star-map/war-zone-system/locationsInSpace/pitic/pitic.component';
import { ManiskoerComponent } from './star-map/war-zone-system/locationsInSpace/maniskoer/maniskoer.component';
import { TuburComponent } from './star-map/war-zone-system/locationsInSpace/tubur/tubur.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    StarMapComponent,
    NewHeavenSystemNew,
    EarthSystemNewComponent,
    WarZoneSystemComponent,
    SyncSystemComponent,
    ForbiddenSystemComponent,
    TedorComponent,
    VatraComponent,
    SperrzoneZweiComponent,
    RastlinaComponent,
    BumbaComponent,
    SattaComponent,
    JuengerGottesComponent,
    SperrzoneDreiComponent,
    NovaComponent,
    SperrzoneEinsComponent,
    ErdeComponent,
    TutkimumComponent,
    MondComponent,
    GareComponent,
    SchinComponent,
    MarsComponent,
    RochaComponent,
    SaturnComponent,
    PiticComponent,
    ManiskoerComponent,
    TuburComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
