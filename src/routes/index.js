import routerUser from './user.js';
import routerStudents from './students.js';

const router = (app) => {

    app.use('/', routerUser);
    
    app.use('/', routerStudents);

}

export default router;