import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { NgModule } from '@angular/core';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'produtos',
        loadChildren: () => import('./demos/arquitetura-components/produto.module')
        .then(m => m.ProdutoModule)
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