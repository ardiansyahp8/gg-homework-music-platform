import Button from "../UI/Button";
import Image from "../UI/Image";

import { useState, useEffect } from 'react';

const Track = ({ item }) => {
  const [selected, setSelected] = useState(false);
  const [urlSelected, setUrl] = useState("");

  const handleSelect = () =>{
      if(!selected){
          setSelected(true);
          setUrl(item.url);
      }
      else{
          setSelected(false);
          setUrl("");
      }
  }
  return (
    <div className='music-content'>
      <Image
      title={item.name}
      imgUrl={item.album.images[0].url}
      width="175px"
      height="175px"
      />
      <h2>{item.name}</h2>
      <h3>{item.album.name}</h3>
      <p>{item.artists[0].name}</p>
      <h4>{item.id}</h4>
      <div>
    <div className='btn-select' onClick={handleSelect}>
    {
        (!selected)? `Select` : `Deselect`
    }
    </div>
      </div>
    </div>
  );
};

export default Track;
