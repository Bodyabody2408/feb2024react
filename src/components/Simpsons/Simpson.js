const Simpson = ({simpson}) => {
    const {name, surname, age, image, photo} = simpson ;
    return (
        <div>
            <div>name: {name}</div>
            <div>surname: {surname}</div>
            <div>age: {age}</div>
            <div>image: {image}</div>
            <img src={photo} alt={name}/>
        </div>
    );
};

export {Simpson};
