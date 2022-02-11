package com.groupby.groupbybackend.models;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
@Table(name = "app_groups")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class AppGroup {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    @NotBlank
    @Size(max = 40)
    private String name;

    @Size(max = 2000)
    private String description;

    @Size(max = 250)
    private String shortDescription;

    @Size(max = 250)
    private String image;

    @Size(max = 250)
    private String url;

    @NotBlank
    private boolean isPrivate;

    private String settings;

    @NotBlank
    private Date createdAt;

}
