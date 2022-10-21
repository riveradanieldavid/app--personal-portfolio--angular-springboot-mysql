package com.bezkoder.spring.datajpa.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "image")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Image {
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "name")
	private String name;

	@Column(name = "type")
	private String type;

	@Column(name = "image", unique = false, nullable = false, length = 100000)
	private byte[] image;
}


// package com.bezkoder.spring.datajpa.model;


// import lombok.AllArgsConstructor;
// import lombok.Data;
// import lombok.NoArgsConstructor;
// import lombok.ToString;
// import lombok.Builder;

// import javax.persistence.*;
// import java.io.Serializable;

// @Entity
// @Data
// @NoArgsConstructor
// @AllArgsConstructor
// @ToString
// @Table(name="Image")
// @Builder

// public class Image implements Serializable {

//     @Id
//     @Column(name = "id")
//     @GeneratedValue(strategy = GenerationType.IDENTITY)

// 	@Column(name = "name")
// 	private String name;

// 	@Column(name = "type")
// 	private String type;

// 	@Column(name = "image", unique = false, nullable = false, length = 100000)
// 	private byte[] image;


// }
