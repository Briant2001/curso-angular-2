import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HerosService } from '../../services/hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { switchMap, tap,filter } from 'rxjs';

@Component({
  selector: 'app-new-pages',
  templateUrl: './new-pages.component.html',
  styles: [
  ]
})
export class NewPagesComponent implements OnInit{
 

  public heroForm = new FormGroup({
    id: new FormControl(''),
    superhero: new FormControl('',{nonNullable:true}),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl(''),
    firts_appearance: new FormControl(''),
    characters :new FormControl(''),
    alt_image:new FormControl('')
  })

  public publishers=[
    {id:'DC Comics', desc:' DC - Comics'},
    {id:'Marvel Comics', desc:' Marvel - Comics'},
  ];

  constructor(
    private snackbar:MatSnackBar,
    private activate:ActivatedRoute,
    private route:Router,
    private herService:HerosService,
    private dialog: MatDialog
    ){

  }
  ngOnInit(): void {
    
    if (!this.route.url.includes("edit")) return;

    this.activate.params.pipe(
      switchMap(({id})=> this.herService.getHeroById(id))
    ).subscribe(hero=>{
      if (!hero) {
        this.route.navigateByUrl("/")
      }
      this.heroForm.reset(hero);
      console.log(hero?.alt_image);
    })


  }

  get currentHero():Hero{

    const hero = this.heroForm.value as Hero;

    return hero
  }

  onSubmit(){
    console.log("object");
    if (this.heroForm.invalid) return;
    if (this.currentHero.id) {
      
      this.herService.updateHero(this.currentHero).subscribe(hero=>{
        this.showSnac("Modificafo correctamente")
        console.log("object");
      });

      return

    };

    this.herService.addHero(this.currentHero).subscribe(hero=>{
      this.route.navigate(["/hero/edit",hero.id])
      this.showSnac("Se Creo "+hero.superhero)

    })

  }

  onDelete(){
    if (!this.currentHero.id) throw Error('Hero is required ');

    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data:this.heroForm.value
    });

    dialogRef.afterClosed().pipe(
      filter((res:boolean)=> res),
      switchMap(() => this.herService.deleteHero(this.currentHero.id)),
      filter( was => was == true),
      
    )
    .subscribe(result=>{
      if (result) {
        this.route.navigate(['/heroes'])
      }
    })

    // dialogRef.afterClosed().subscribe(result => {
    //   if(!result) return;
    //   this.herService.deleteHero(this.currentHero.id).subscribe(
    //     e=>{
    //       this.route.navigate(['/heroes'])

    //     }
    //   )
    // });
    

  }

  showSnac(message:string){
    this.snackbar.open(message,'ok',{
      duration:2500,
    })
  }
}
