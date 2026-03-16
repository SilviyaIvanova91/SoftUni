import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Mission } from '../../interfaces/mission.interface';

@Component({
  selector: 'app-mission-details',
  imports: [RouterLink],
  templateUrl: './mission-details.html',
  styleUrl: './mission-details.css',
})
export class MissionDetailsComponent implements OnInit {
  mission: Mission | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.mission = this.route.snapshot.data['mission'];
  }
}
