package com.ecarsm.vuttr.api.start;

import com.ecarsm.vuttr.api.model.user.LocalUser;
import com.ecarsm.vuttr.api.model.user.repository.LocalUserRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

/**
 *
 * @author Ecar. S. M.
 */
@Component
@Order(1)
public class UserStart implements ApplicationRunner {

    @Autowired
    private LocalUserRep localUserRep;

    @Override
    public void run(ApplicationArguments args) throws Exception {

        LocalUser user = new LocalUser();
        user.setEmail("admin@admin.com");
        user.setName("Admin");
        user.setPassword("123");

        user = this.localUserRep.save(user);

    }

}
