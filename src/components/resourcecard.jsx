import { FaHeart } from 'react-icons/fa';

function ResourceCard({ resource, resources, setResources }) {
  const handleLikeToggle = () => {
    const updated = resources.map(item =>
      item.id === resource.id ? { ...item, isLiked: !item.isLiked } : item
    );
    setResources(updated);
  };

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={resource.thumbnailUrl}
        className="card-img-top"
        alt={resource.title}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{resource.title}</h5>
        <p className="card-text mb-1"><strong className='fw-semibold'>Category:</strong> {resource.category}</p>
        <p className="card-text mb-1"><strong className='fw-semibold'>Type:</strong> {resource.type}</p>
        <p className="card-text">
          {resource.type === 'Video'
            ? `Duration: ${resource.duration} min`
            : `Read Time: ${resource.duration} min`}
        </p>
        <div className="mt-auto text-end">
          <button
            className="btn btn-sm"
            onClick={handleLikeToggle}
            title="Like this?"
          >
            <FaHeart color={resource.isLiked ? 'red' : 'lightgray'} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResourceCard;
