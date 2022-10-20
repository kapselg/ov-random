import { Component, Input, OnInit, Output } from '@angular/core';
import { Hero, Role } from 'src/utils/types';
import { heroes, roles } from 'src/utils/heroInfo';
import { RandomizerService } from '../randomizer.service';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  constructor(private randomService: RandomizerService) {}

  @Input() hero!: Hero;
  @Input() index!: number;

  player: string = '';

  roleIcons = {
    tank: 'assets/tank.svg',
    support: 'assets/support.svg',
    dps: 'assets/dps.svg',
    any: 'assets/any.svg',
  };

  ngOnInit(): void {
    this.player = `P${this.index}`
  }

}
