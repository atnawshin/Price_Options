import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';
const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='bg-blue-500 rounded-md flex flex-col p-4 text-white shadow-xl'>
            <h2 className='text-center'>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl text-center my-4'>{name}</h4>
            <div className='pl-6 flex-grow'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <div className='mx-5'>
                <button className='mt-12 w-full bg-cyan-900 p-3 px-5 text-white font-bold text-lg rounded-xl hover:bg-teal-800'>Buy Now</button>
            </div>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;