import { DarkModeService } from 'src/app/_services/dark-mode.service';
// DETAILS
import { Component, Input, OnInit } from '@angular/core';
import { SkillService } from 'src/app/_services/skill.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/_models/skill.model';
// DETAILS /

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  // DETAILS
  // ATTRIBUTES
  @Input() viewMode = false;
  @Input() currentSkill: Skill = {
    html: ''
  };
  message = '';
  // DETAILS /

  // CONSTRUCTOR
  constructor(
    // DETAILS
    private skillService: SkillService,
    private route: ActivatedRoute,
    private router: Router,
    // DETAILS /

    private darkModeService: DarkModeService

  ) { }

  // DATA AVAILABLE
  ngOnInit(): void {
    // DETAILS
    if (!this.viewMode) {
      this.message = '';
      this.getSkill(this.route.snapshot.params["id"]);
      // DETAILS /
    }
  }

  // DETAILS
  // GET DATA FROM DB
  getSkill(id: string): void {
    this.skillService.get(id)
      .subscribe({
        next: (data) => {
          this.currentSkill = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  // UPDATE DATA AND PUT IN DB
  updateSkill(): void {
    this.message = '';
    this.skillService.update(this.currentSkill.id, this.currentSkill)
      .subscribe({
        next: (res) => {
          console.log(res);
          // ADDED
          // this.router.navigate(['/skills']);
          // ADDED /
          this.message = res.message ? res.message : 'Actualizado'; // ORIGINAL
        },
        error: (e) => console.error(e)
      });
  }
  // DELETE DATA FROM DB
  deleteSkill(): void {
    this.skillService.delete(this.currentSkill.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/skills'])
          // ADDED
          window.location.reload();
          // ADDED
        },
        error: (e) => console.error(e)
      });
  }

  // ADDED
  confirmDelete() {
    if (window.confirm('Borrar item seleccionado?')) {
      this.deleteSkill()
    }
  }
  // ADDED /
  // DETAILS /




  get darkMode() {
    return this.darkModeService.darkMode;
  }

  skills = [
    {
      skillname: "HTML",
      skillvalue: "67%",
    },
    {
      skillname: "CSS",
      skillvalue: "57%",
    },
    {
      skillname: "JAVASCRIPT",
      skillvalue: "47%",
    },
    {
      skillname: "JAVA",
      skillvalue: "37%",
    },
    {
      skillname: "ANGULAR",
      skillvalue: "47%",
    },
    {
      skillname: "REACT",
      skillvalue: "20%",
    },
    {
      skillname: "BOOTSTRAP",
      skillvalue: "30%",
    },
  ]

}












