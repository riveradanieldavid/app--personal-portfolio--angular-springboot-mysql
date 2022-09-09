import { Component } from '@angular/core';
import { Skill } from 'src/app/_models/skill.model';
import { SkillService } from 'src/app/_services/skill.service';
// ADDED
import { ActivatedRoute, Router } from '@angular/router';
// ADDED /

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})

export class AddSkillComponent {
  // ATTRIBUTES
  skill: Skill = {
    title: '',
    description: ''
  };
  submitted = false;
  // CONSTRUCTOR
  constructor(
    private skillService: SkillService,
    private route: ActivatedRoute,
    private router: Router) { }
  // SAVE DATA
  saveSkill(): void {
    const data = {
      title: this.skill.title,
      description: this.skill.description
    };
    // SERVICE
    this.skillService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          // ADDED
          this.router.navigate(['/skills']);
          // ADDED /
          // this.submitted = true; // ORIGINAL
        },
        error: (e) => console.error(e)
      });
  }

  newSkill(): void {
    this.submitted = false;
    this.skill = {
      title: '',
      description: ''
    };
  }

}

