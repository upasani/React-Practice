import './filterRecipe.css';

export default function Recipy({ name, cuisine, image, rating, reviewCount }) {
    return (
        <div className="recipy-container">
            <div>
                <img src={image} alt="" height={200} width={200} />
                <h4>{name}</h4>
                <p>{cuisine}</p>
                <div className='flex'>
                    <p>{rating}</p>
                    <p>{reviewCount}</p>
                </div>
            </div>
        </div>
    )
}