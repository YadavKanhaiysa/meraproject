import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';


cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async(localfilePath)=>{
  try{
   if(!localFilePath) return null;
   //upload file on cloudinary
   await cloudinary.uploader.upload(localfilePath, {resource_type: "auto"
   })
   console.log("file uploaded successfully on cloudinary",response.url);
   return response;
  }catch(error){
   fs.unlinkSync(localfilePath); //remove file from local uploads folder 
   // if uploading on cloudinary fails
   return null;
  }
}


export default uploadOnCloudinary;


cloudinary.v2.uploader
.upload("dog.mp4", { 
  public_id: "my_dog",
}, function (error, result) {
  console.log(result, error);
}
)
