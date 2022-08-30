import { Component } from '@angular/core';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

interface IIcons {
  iconfileName: string,
  iconName: string
}

const icons: IIcons[] = [
  { iconfileName: 'Aprovar.svg', iconName: 'aprovar' },
  { iconfileName: 'archive.svg', iconName: 'archive' },
  { iconfileName: 'Biblioteca de Indicadores.svg', iconName: 'biblioteca_indicadores' },
  { iconfileName: 'Configurações.svg', iconName: 'configuracao' },
  { iconfileName: 'Controle de Documentos.svg', iconName: 'controle_documentos' },
  { iconfileName: 'Cronograma Metas.svg', iconName: 'cronograma_metas' },
  { iconfileName: 'Cultura Gerdau.svg', iconName: 'cultura_gerdau' },
  { iconfileName: 'Dashboard.svg', iconName: 'dashboard' },
  { iconfileName: 'Fazer Upload.svg', iconName: 'upload' },
  { iconfileName: 'Formulário Metas.svg', iconName: 'formulario_metas' },
  { iconfileName: 'Help Desk.svg', iconName: 'help_desk' },
  { iconfileName: 'Imprimir.svg', iconName: 'imprimir' },
  { iconfileName: 'Indicadores de Negócio.svg', iconName: 'indicadores_negocio' },
  { iconfileName: 'Mensagem de Sucesso.svg', iconName: 'mensagem_sucesso' },
  { iconfileName: 'Menu.svg', iconName: 'menu' },
  { iconfileName: 'Notificações.svg', iconName: 'notificacoes' },
  { iconfileName: 'Orientações.svg', iconName: 'orientacoes' },
  { iconfileName: 'Salvar.svg', iconName: 'salvar' },
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'MetasFront';


  constructor(
    matRegistry: MatIconRegistry, 
    domSanitizer: DomSanitizer,
    ) {
    icons.forEach(x => {
      matRegistry.addSvgIcon(
        x.iconName,
        domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/svg/${x.iconfileName}`));
    })
  }

}
