package com.groupby.groupbybackend.models;

import org.hibernate.validator.constraints.UniqueElements;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.sql.Timestamp;
import java.util.Date;

@Entity
@Table(name = "groups")

public class Group {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, length = 30)
    @NotBlank
    @Size(max = 30)
    private String name;

    @Size(max = 5000)
    private String description;

    @Size(max = 250)
    private String shortDescription;

    @Size(max = 250)
    private String image;

    @Size(max = 250)
    private String url;

    @NotBlank
    private boolean isPrivate;

    @Lob
    private String settings;

    @NotBlank
    private Date createdAt;

    @NotBlank
    private Date updatedAt;


}
