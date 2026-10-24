import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter.component';
import { HeroComponent } from './pages/hero/hero.component';
import { AnimePageComponent } from './pages/anime-page/anime-page.component';
import { AnimeSuperPageComponent } from './pages/anime-super/anime-super-page.component';

export const routes: Routes = [
    {path:'', component: CounterPageComponent},
    {path:'hero', component: HeroComponent},
    {path:'anime', component: AnimePageComponent},
    {path:'anime-super', component: AnimeSuperPageComponent}
];
