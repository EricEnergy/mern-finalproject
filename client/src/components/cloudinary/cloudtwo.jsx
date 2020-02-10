import React, { useState, useEffect } from 'react';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import API from '../../utils/API';

//this file is for the companies profile image
export default function Main2(props) {
    const [image, setImage] = useState({url: ""});
    const [uploadProfilePic, setUploadProfilePic] = useState('block')

    function uploadImage(){
        console.log(image)
    }

    useEffect(() => {
    },[image])

    function imagesChange() {
        props.callback({
            newImages: 'changed!'
        }) 
        
    }


    const user = JSON.parse(localStorage.getItem('user'))

    const uploadWidget = () => {
        const config = {
            cloud_name: 'ericnrgnash',
            upload_preset: 'Erics-preset-serv', 
            tags:['company']
        };
        window.cloudinary.openUploadWidget(config, (error, result) => {
            if (error) {
                console.log(error);
            } else {
                setImage(result[0].url);
                uploadImage()
                API.addPost({
                    accountID: user.data.user._id,
                    companyImageURL:result[0].url})
                    setUploadProfilePic('none')
                    imagesChange();

            }
        });
    };

    return (
        <div className="main" style={{display: uploadProfilePic}}>
            <div className="upload">
                {/* <button > */}
                    <PhotoCamera onClick={uploadWidget} className="upload-button"/>            
                {/* </button> */}
            </div>
        </div>
    );
}

