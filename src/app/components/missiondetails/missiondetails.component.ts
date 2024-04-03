import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpaceXService } from '../../services/spacex.service';
import { Mission } from '../../models/mission';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  mission?: Mission;

  constructor(
    private route: ActivatedRoute,
    private spaceXService: SpaceXService,
    public router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const flightNumber = params['flight_number'];
      this.spaceXService.getMissionByFlightNumber(flightNumber).subscribe(
        (data) => {
          this.mission = data;
        },
        (error) => {
          console.error('Failed to get mission details:', error);
        }
      );
    });
  }

  goBack() {
    this.router.navigate(['/missions']);
  }
}