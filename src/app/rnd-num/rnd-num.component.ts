import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rnd-num',
  templateUrl: './rnd-num.component.html',
  styleUrls: ['./rnd-num.component.css']
})
export class RndNumComponent implements OnInit {

  random : Random[] = []
  selected:any
  colors = ["#3498db","#34dbcd","#b434db","#db3466", "#93db34", "#db3434"]

  constructor() { 
    this.generateRandom()
  }

  generateRandom() {
    this.random = [] // clear random if reset
    this.selected = ''
    let randColors = this.colors.sort((a,b)=> Math.random() -0.5)
    for (var i=0; i<6; i++) {
      this.random.push(new Random(Math.floor(Math.random() * 46) + 1, randColors[i]))
    }
    console.log(this.random) 
  }

  selectedNum(selectedRand:any) {
    this.selected = selectedRand
  }

  ngOnInit(): void {
  }

}

class Random  {
  number: number;
  color: string;

  constructor(number: number, color: string) {
    this.number = number;
    this.color = color;
  }
}
