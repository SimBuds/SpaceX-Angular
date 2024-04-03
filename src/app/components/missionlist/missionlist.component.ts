import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpaceXService } from '../../services/spacex.service';
import { Mission } from '../../models/mission';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: Mission[] = [];
  filteredMissions: Mission[] = [];
  filterYear: string = '';
  availableYears: string[] = [];

  constructor(private spaceXService: SpaceXService, private router: Router) {}

  ngOnInit() {
    this.spaceXService.getMissions().subscribe(
      (data) => {
        this.missions = data;
        this.filteredMissions = data;
        this.availableYears = this.extractUniqueYears(data);
      },
      (error) => console.error(error)
    );
  }

  goToMissionDetails(flightNumber: number) {
    this.router.navigate(['/mission', flightNumber]);
  }

  extractUniqueYears(data: Mission[]): string[] {
    const years = data.map((mission) => mission.launch_year);
    return Array.from(new Set(years)).sort((a, b) => b.localeCompare(a));
  }

  onFilterChange() {
    this.filteredMissions = this.filterYear ?
      this.missions.filter(mission => mission.launch_year === this.filterYear) :
      [...this.missions];
  }

  resetFilter() {
    this.filterYear = '';
    this.onFilterChange();
  }
}