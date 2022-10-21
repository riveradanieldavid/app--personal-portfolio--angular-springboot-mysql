package com.bezkoder.spring.datajpa.controller;

import com.bezkoder.spring.datajpa.model.Image;
import com.bezkoder.spring.datajpa.repository.ImageRepository;
import com.bezkoder.spring.datajpa.util.ImageUtility;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
//@CrossOrigin(origins = "http://localhost:8082") open for specific port
// @RequestMapping ADD ROUTE AT REST Gets Post Put ETC...
@RequestMapping("/api")
@CrossOrigin // open for all ports
public class ImageController {

  @Autowired
  ImageRepository imageRepository;

  //GET :getAllEmployees
  @GetMapping("/get/images")
  public List<Image> getAllImage() {
    return imageRepository.findAll();
  }

  @PostMapping("/upload/image")
  public ResponseEntity<ImageUploadResponse> uplaodImage(
    @RequestParam("image") MultipartFile file
  )
    throws IOException {
    imageRepository.save(
      Image
        .builder()
        .name(file.getOriginalFilename())
        .type(file.getContentType())
        .image(ImageUtility.compressImage(file.getBytes()))
        .build()
    );
    return ResponseEntity
      .status(HttpStatus.OK)
      .body(
        new ImageUploadResponse(
          "Image uploaded successfully: " + file.getOriginalFilename()
        )
      );
  }

  @GetMapping(path = { "/get/image/info/{name}" })
  public Image getImageDetails(@PathVariable("name") String name)
    throws IOException {
    final Optional<Image> dbImage = imageRepository.findByName(name);

    return Image
      .builder()
      .name(dbImage.get().getName())
      .type(dbImage.get().getType())
      .image(ImageUtility.decompressImage(dbImage.get().getImage()))
      .build();
  }

  @GetMapping(path = { "/get/image/{name}" })
  public ResponseEntity<byte[]> getImage(@PathVariable("name") String name)
    throws IOException {
    final Optional<Image> dbImage = imageRepository.findByName(name);

    return ResponseEntity
      .ok()
      .contentType(MediaType.valueOf(dbImage.get().getType()))
      .body(ImageUtility.decompressImage(dbImage.get().getImage()));
  }

  // BEZKODER
  @PutMapping("/image/{id}")
  public ResponseEntity<Image> updateImage(
    @PathVariable Long id,
    @RequestBody Image imageDeatails
  ) {
    //get element by id
    Image image = imageRepository.findById(id).orElseThrow();

    //set differents details de l 'element
    image.setName(imageDeatails.getName());
    image.setImage(imageDeatails.getImage());

    //enregistrer l'element modifié
    Image updatedImage = imageRepository.save(image);
    return ResponseEntity.ok(updatedImage);
  }

  @DeleteMapping("/get/image/{id}")
  public ResponseEntity<HttpStatus> deleteImage(@PathVariable("id") long id) {
    try {
      imageRepository.deleteById(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //   @GetMapping("/get/images")
  //   public ResponseEntity<List<Image>> getAllImages(
  //     @RequestParam(required = false) String name
  //   ) {
  //     try {
  //       List<Image> images = new ArrayList<Image>();

  //       if (name == null) imageRepository
  //         .findAll()
  //         .forEach(images::add); else imageRepository
  //         .findByNameContaining(name)
  //         .forEach(images::add);

  //       if (images.isEmpty()) {
  //         return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  //       }

  //       return new ResponseEntity<>(images, HttpStatus.OK);
  //     } catch (Exception e) {
  //       return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
  //     }
  //   }
  // BEZKODER /

  //GET :getAllEmployees
  // @GetMapping("/image")
  // public List<Image> getAllImage() {
  //   return imageRepository.findAll();
  // }
}
