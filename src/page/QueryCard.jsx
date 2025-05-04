import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const QueryCard = ({ query }) => {
  const {
    productName,
    brand,
    productPhoto,
    title,
    boycott,
    date,
    count,
    _id,
  } = query;

  return (
    <div className="max-w-xs w-full bg-white rounded-lg shadow-md overflow-hidden mx-auto">
        
      {/* Product Image */}
      <img
        src={productPhoto}
        alt={title}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://via.placeholder.com/320x200?text=Image+Unavailable';
        }}
      />

      {/* Product Details */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{productName}</h2>
        <p className="text-gray-500 mt-1">Brand: {brand}</p>
        <p className="text-gray-700 mt-2 text-sm">
          {boycott?.substring(0, 70)}...
        </p>
        <p className="mt-3 text-gray-600">
          Recommendations: <span className="font-semibold">{count}</span>
        </p>
        <p className="text-sm text-gray-500 mb-3">
          Date: {format(new Date(date), 'P')}
        </p>

        {/* Recommend Button */}
        <Link to={`/query/${_id}`}>
          <button className="w-full bg-[#8C52FF] text-white py-2 px-4 rounded-md hover:bg-[#6836c7] transition">
            Recommend
          </button>
        </Link>
      </div>
    </div>
  );
};

QueryCard.propTypes = {
  query: PropTypes.object.isRequired,
};

export default QueryCard;
