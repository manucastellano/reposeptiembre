
const Card  = ({ title, src, description}) => {
    return (<div>
                <span>{title}</span>
                <img src={src} alt="" />
                <p>{description}</p>
             </div>
    );
};

export default Card;