import { useEffect, useState } from "react";

function File(){

  const [avatar, setAvatar] = useState(false);
  const [image, setImage] = useState(false);
  const enabled = avatar;

  const submitHandle = () => {
    const formData = new FormData()
    formData.append('avatar', avatar)
    formData.append('name', avatar.name)
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: formData
    })
  }

  useEffect(() => {
    if (avatar) {
      const fileReader = new FileReader();
      fileReader.addEventListener('load', function(){
        setImage(this.result);
      })
      fileReader.readAsDataURL(avatar);
    }
  }, [avatar])

  return(
        <div className="col-12 my-5 py-4 selects">
          <label className="form-label mx-3">
            <input className="form-control" type="file" onChange={e => setAvatar(e.target.files[0])}/>
          </label>
          {avatar&& (
            <>
              <h3>{avatar.name}</h3>
              {image&& <img src={image} alt="mama" />}
            </>
            )}
          <button className="btn btn-dark my-4 mx-5" disabled={!enabled} onClick={submitHandle} >Gönder</button>
        </div>
  );
}

export default File;