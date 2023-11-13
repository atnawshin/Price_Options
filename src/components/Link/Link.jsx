import PropTypes from 'prop-types';
const Link = ({ route }) => {
    return (
        <li className="mr-10 hover:bg-slate-400 px-6 rounded-lg">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;