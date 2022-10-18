package com.bezkoder.spring.datajpa.model;

import javax.persistence.*;

// GET DATA FROM DB (tutorials table) AND SAVED IN Tutorial CLASS
@Entity
@Table(name = "skills")
public class Skill {

  // SET IDENTIFICATOR AND COLUMNS TO USE
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;

  @Column(name = "html")
  private Integer html;

  // DEFINE EACH tutorial
  public Skill() {}

  public Skill(Integer html) {
    this.html = html;
  }

  // GETTER AND SETTER
  public long getId() {
    return id;
  }

  public Integer getHtml() {
    return html;
  }

  public void setHtml(Integer html) {
    this.html = html;
  }

  // ASSEMBLE THE "Tutorial"
  @Override
  public String toString() {
    return ("Skill [id=" + id + ", html=" + html + "]");
  }
}
