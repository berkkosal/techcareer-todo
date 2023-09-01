package com.kosalberk.todo.model.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;


import java.sql.Timestamp;
import java.util.UUID;

@MappedSuperclass
@Data
public class BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column
    private UUID uuid;

    @CreationTimestamp
    private Timestamp createdTime;
    @UpdateTimestamp
    private Timestamp updatedTime;
    @Column
    private Timestamp deletedTime;
}
