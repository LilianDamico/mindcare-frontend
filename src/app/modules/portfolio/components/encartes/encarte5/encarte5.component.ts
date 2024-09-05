import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-encarte5',
  standalone: true,
  imports: [CommonModule],  // Adiciona o CommonModule para usar o NgFor
  templateUrl: './encarte5.component.html',
  styleUrls: ['./encarte5.component.scss']
})
export class Encarte5Component {
  artigosRecentes = [
    {
      titulo: 'Inovação no Setor',
      resumo: 'Descubra as últimas inovações que estão transformando o mercado.',
      thumbnail: 'url-da-imagem1.jpg',
      link: 'link-para-artigo1'
    },
    {
      titulo: 'Novidades do Produto',
      resumo: 'Saiba mais sobre as atualizações recentes do nosso produto.',
      thumbnail: 'url-da-imagem2.jpg',
      link: 'link-para-artigo2'
    },
    {
      titulo: 'Insights da Startup',
      resumo: 'Veja as tendências que a nossa startup está acompanhando.',
      thumbnail: 'url-da-imagem3.jpg',
      link: 'link-para-artigo3'
    }
  ];
}
