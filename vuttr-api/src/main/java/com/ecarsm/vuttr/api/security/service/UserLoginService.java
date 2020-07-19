package com.ecarsm.vuttr.api.security.service;

import com.ecarsm.vuttr.api.model.user.LocalUser;
import com.ecarsm.vuttr.api.model.user.repository.LocalUserRep;
import com.ecarsm.vuttr.api.security.UserLogin;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service("userDetailsService")
public class UserLoginService implements UserDetailsService {

    @Autowired
    @Getter
    private LocalUserRep userRep;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<LocalUser> user = getUserRep().email(email);
        LocalUser localUser = user.orElseThrow(() -> new UsernameNotFoundException("User or password are incorrect"));

        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        authorities.add(new SimpleGrantedAuthority("ADMIN"));

        return new UserLogin(localUser, authorities);
    }
}
