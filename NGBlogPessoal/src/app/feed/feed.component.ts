import { Postagem } from './../model/Postagem';
import { PostagemService } from './../service/postagem.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listaPostagens: Postagem[]
  /* PROJETAR AS DEPENDENCIAS A SER CONSUMIDAS*/
  constructor(private PostagemService: PostagemService) { }
  /* OQ VAI SER CARREGADO NO SITE*/
  ngOnInit(): void {
    this.findallPostagens()
  }

  findallPostagens() {
    this.PostagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })

  }


}
