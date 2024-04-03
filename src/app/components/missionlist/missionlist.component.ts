import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../../services/spacex.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: any[] = [];

  constructor(private spaceXService: SpaceXService) {}

  ngOnInit(): void {
    this.spaceXService.getLaunches().subscribe(data => {
      this.missions = data;
    });
  }

  filterYear(year: string): void {
    this.spaceXService.getLaunchesByYear(year).subscribe(data => {
      this.missions = data;
    });
  }
}