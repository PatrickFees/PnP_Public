import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { MainPageComponent } from './main-page/main-page.component';
import { NewHeavenSystemNew } from './star-map/new-heaven-system-new/new-heaven-system-new.component';
import { BumbaComponent } from './star-map/new-heaven-system-new/locationsInSpace/bumba/bumba.component';
import { JuengerGottesComponent } from './star-map/new-heaven-system-new/locationsInSpace/juenger-gottes/juenger-gottes.component';
import { RastlinaComponent } from './star-map/new-heaven-system-new/locationsInSpace/rastlina/rastlina.component';
import { SattaComponent } from './star-map/new-heaven-system-new/locationsInSpace/satta/satta.component';
import { SperrzoneDreiComponent } from './star-map/new-heaven-system-new/locationsInSpace/sperrzone-drei/sperrzone-drei.component';
import { SperrzoneZweiComponent } from './star-map/new-heaven-system-new/locationsInSpace/sperrzone-zwei/sperrzone-zwei.component';
import { TedorComponent } from './star-map/new-heaven-system-new/locationsInSpace/tedor/tedor.component';
import { VatraComponent } from './star-map/new-heaven-system-new/locationsInSpace/vatra/vatra.component';
import { ErdeComponent } from './star-map/earth-system-new/locationsInSpace/erde/erde.component';
import { GareComponent } from './star-map/earth-system-new/locationsInSpace/gare/gare.component';
import { MarsComponent } from './star-map/earth-system-new/locationsInSpace/mars/mars.component';
import { MondComponent } from './star-map/earth-system-new/locationsInSpace/mond/mond.component';
import { NovaComponent } from './star-map/earth-system-new/locationsInSpace/nova/nova.component';
import { RochaComponent } from './star-map/earth-system-new/locationsInSpace/rocha/rocha.component';
import { SaturnComponent } from './star-map/earth-system-new/locationsInSpace/saturn/saturn.component';
import { SchinComponent } from './star-map/earth-system-new/locationsInSpace/schin/schin.component';
import { SperrzoneEinsComponent } from './star-map/earth-system-new/locationsInSpace/sperrzone-eins/sperrzone-eins.component';
import { TutkimumComponent } from './star-map/earth-system-new/locationsInSpace/tutkimum/tutkimum.component';
import { EarthSystemNewComponent } from './star-map/earth-system-new/earth-system-new.component';
import { StarMapComponent } from './star-map/star-map.component';
import { WarZoneSystemComponent } from './star-map/war-zone-system/war-zone-system.component';
import { ManiskoerComponent } from './star-map/war-zone-system/locationsInSpace/maniskoer/maniskoer.component';
import { PiticComponent } from './star-map/war-zone-system/locationsInSpace/pitic/pitic.component';
import { TuburComponent } from './star-map/war-zone-system/locationsInSpace/tubur/tubur.component';

const routes: Routes = [
  { path: 'main-page', component: MainPageComponent },
  { path: 'star-map', component: StarMapComponent },

  { path: 'newHeavenSystem', component: NewHeavenSystemNew },
  { path: 'bumba', component: BumbaComponent },
  { path: 'juengerGottes', component: JuengerGottesComponent },
  { path: 'rastlina', component: RastlinaComponent },
  { path: 'satta', component: SattaComponent },
  { path: 'sperrzoneZwei', component: SperrzoneZweiComponent },
  { path: 'sperrzoneDrei', component: SperrzoneDreiComponent },
  { path: 'tedor', component: TedorComponent },
  { path: 'vatra', component: VatraComponent },


  { path: 'earthSystem', component: EarthSystemNewComponent },
  { path: 'erde', component: ErdeComponent },
  { path: 'gare', component: GareComponent },
  { path: 'mars', component: MarsComponent },
  { path: 'mond', component: MondComponent },
  { path: 'nova', component: NovaComponent },
  { path: 'rocha', component: RochaComponent },
  { path: 'saturn', component: SaturnComponent },
  { path: 'schin', component: SchinComponent },
  { path: 'sperrzoneEins', component: SperrzoneEinsComponent },
  { path: 'tutkimum', component: TutkimumComponent },


  { path: 'warZoneSystem', component: WarZoneSystemComponent },
  { path: 'maniskoer', component: ManiskoerComponent },
  { path: 'pitic', component: PiticComponent },
  { path: 'tubur', component: TuburComponent },

  // { path: '', component:  },
  // { path: '', component:  },


  { path: '', redirectTo: 'main-page', pathMatch: 'full' },

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }