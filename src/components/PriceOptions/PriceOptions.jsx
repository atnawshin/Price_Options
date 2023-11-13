import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const PriceOptions = [
        {
            id: 1,
            name: 'Basic',
            price: 29.99,
            features: [
                'Access to cardio area',
                'Standard gym equipment',
                'Locker room access',
                'Free Wi-Fi',
                'Limited group classes'
            ]
        },
        {
            id: 2,
            name: 'Premium',
            price: 49.99,
            features: [
                'Full access to all gym areas',
                'Access to all classes (yoga, spin, etc.)',
                'Personal trainer consultation (once a month)',
                'Sauna and steam room access',
                'Discounts on merchandise'
            ]
        },
        {
            id: 3,
            name: 'Ultimate',
            price: 79.99,
            features: [
                'All Premium features included',
                'Unlimited personal trainer sessions',
                'Access to swimming pool',
                'Nutritional counseling sessions',
                'Towel service included'
            ]
        }
    ];

    return (
        <div className="m-12">
            <h2 className="text-5xl mb-5 text-center text-white">Best Prices in the town</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    PriceOptions.map(option => <PriceOption key={PriceOption.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;