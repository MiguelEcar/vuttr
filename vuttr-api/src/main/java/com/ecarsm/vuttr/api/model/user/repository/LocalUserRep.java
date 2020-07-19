package com.ecarsm.vuttr.api.model.user.repository;

import com.ecarsm.vuttr.api.model.user.LocalUser;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocalUserRep extends JpaRepository<LocalUser, Long> {

    public Optional<LocalUser> email(String email);
}
