import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "~/layouts/main";
import { Expolore } from "~/pages/explore";
import { Home } from "~/pages/home";
import { Messages } from "~/pages/messages";
import { NotFound } from "~/pages/not-found";
import { Notifications } from "~/pages/notifications";
import { Profile } from "~/pages/profile";
import { Lists } from "~/pages/lists";
import { Bookmarks } from "~/pages/bookmarks";


const routes = createBrowserRouter([

    {
        path : '/',
        element : <MainLayout />,
        children : [
            {
                //Mainloyout başladığı anda bu  gösterilecek. index true demek  main layout pathini al demek
                index : true,
                element : <Home />
            },
            {
                path : 'explore',
                element : <Expolore />
            },
            {
                path : 'notifications',
                element : <Notifications />
            },
            {
                path : 'messages',
                element : <Messages/>
            },
            {
                path : 'lists',
                element : <Lists />
            },
            {
                path : 'bookmarks',
                element : <Bookmarks />
            },
            {
                path : ':slug',
                element : <Profile />

            },
            {
                path : '*',
                element : <NotFound />
                
            },
        ]
    },
 
    
])

export default routes