import React, { useState, useEffect } from 'react';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import API from '../../utils/API';
import { datePickerDefaultProps } from '@material-ui/pickers/constants/prop-types';



//this file will add new pictures to the companies list of pictures
export default function Main(props) {

    const [userImages, setUserImages] = useState()

    const user = JSON.parse(localStorage.getItem('user'))

    function imagesChange() {
        props.callback({
            newImages: 'changed!'
        }) 
        
    }

    useEffect(() => {
        if (!userImages) {
            API.getimages(user.data.user._id)
                .then(res => setUserImages(res.data.postImageURL))
                .catch(err => console.log(err));
        } else {
            console.log("we have images here")
        }
    }, [userImages, user.data.user._id])

    useEffect(() => {
        API.editPost(user.data.user._id, {
            postImageURL: userImages,
        })
        .catch(err => console.log(err));
    }, [userImages]);

    useEffect(() => {
    },[userImages])



    const uploadWidget = () => {
        const config = {
            cloud_name: 'ericnrgnash',
            upload_preset: 'Erics-preset-serv',
            tags: ['company']
        };
        window.cloudinary.openUploadWidget(config, (error, result) => {
            if (error) {
                console.log(error);
            } else {
                setUserImages([...userImages, result[0].url]);
                imagesChange();
            }
        });
    };


    return (
        <div className="main">
            <div className="upload">
                {/* <button onClick={uploadWidget} className="upload-button"> */}
                    <PhotoCamera onClick={uploadWidget} className="upload-button"/>  
              {/* </button> */}
            </div>
        </div>
    );
}

