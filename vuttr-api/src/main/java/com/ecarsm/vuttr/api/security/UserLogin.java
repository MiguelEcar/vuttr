package com.ecarsm.vuttr.api.security;

import com.ecarsm.vuttr.api.model.user.LocalUser;
import java.util.Collection;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

public class UserLogin extends User {

    private static final long serialVersionUID = 1L;

    @Getter
    private LocalUser user;

    public UserLogin(LocalUser user, Collection<? extends GrantedAuthority> authorities) {
        super(user.getEmail(), user.getPassword(), authorities);
        this.user = user;
    }
}
