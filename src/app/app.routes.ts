import { AuthGuard } from './services/app.guard';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { NgModule } from '@angular/core';
import { CadastroGuard } from './services/cadastro.guard';
import { FilmesComponent } from './demos/pipes/filmes.component';
import { BarComponent } from './demos/bar-di-zones/bar.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'cadastro', component: CadastroComponent, canDeactivate: [CadastroGuard]},
    { path: 'filmes', component: FilmesComponent },
    { path: 'bar', component: BarComponent },
    { path: 'produtos',
        loadChildren: () => import('./demos/arquitetura-components/produto.module')
        .then(m => m.ProdutoModule)
    },
    { path: 'admin',
        loadChildren: () => import('./admin/admin.module')
        .then(m => m.AdminModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard]
    },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(rootRouterConfig, { enableTracing: false })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }