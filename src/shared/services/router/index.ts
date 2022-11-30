import whatRoute from "./routes/what";
import whereRoute from "./routes/where";
import whoRoute from "./routes/who";


const router = {
    where: whereRoute,
    who: whoRoute,
    what: whatRoute,
};

export default router;