import { useNavigate, useParams } from "react-router-dom"

const withRouter = (Component) => {
    const RouterWrapper = (props) => {
        const navigate = useNavigate();
        const params = useParams();

        return <Component {...props} navigate={navigate} params={params} />
    }

    return RouterWrapper;
};

export default withRouter;
